import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

type WhatsAppContextValue = {
  loading: boolean;
  phone: string;
  error: string | null;
  refresh: () => Promise<void>;
  open: (message: string) => void;
};

const WhatsAppContext = createContext<WhatsAppContextValue | null>(null);

const API_BASE =
  "https://troca-numeros-api-production.up.railway.app";

function getDomain(): string {
  if (typeof window === "undefined") return "";

  return window.location.hostname
    .trim()
    .toLowerCase()
    .replace(/^www\./, "");
}

function onlyDigits(value: unknown): string {
  return String(value ?? "").replace(/\D/g, "");
}

function buildWhatsAppUrl(phone: string, message: string): string {
  const phoneDigits = onlyDigits(phone);
  const text = encodeURIComponent(message);

  return `https://wa.me/${phoneDigits}?text=${text}`;
}

async function fetchPhoneByDomain(
  domain: string,
  signal?: AbortSignal,
): Promise<string> {
  const url = `${API_BASE}/zap?domain=${encodeURIComponent(domain)}`;

  const response = await fetch(url, {
    method: "GET",
    cache: "no-store",
    headers: {
      Accept: "application/json",
    },
    signal,
  });

  if (!response.ok) {
    throw new Error(
      `A API do WhatsApp respondeu com HTTP ${response.status}.`,
    );
  }

  const data = await response.json();

  const resolvedPhone = onlyDigits(
    data?.phone || data?.numero,
  );

  if (!resolvedPhone) {
    throw new Error(
      "A API não retornou um número de WhatsApp válido.",
    );
  }

  return resolvedPhone;
}

export function WhatsAppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);

  const loadPhone = useCallback(
    async (signal?: AbortSignal) => {
      const domain = getDomain();

      if (!domain) {
        throw new Error(
          "Não foi possível identificar o domínio do site.",
        );
      }

      const resolvedPhone = await fetchPhoneByDomain(
        domain,
        signal,
      );

      setPhone(resolvedPhone);
      setError(null);
    },
    [],
  );

  const refresh = useCallback(async () => {
    setLoading(true);

    try {
      await loadPhone();
    } catch (requestError) {
      console.error(
        "Erro ao buscar o número do WhatsApp:",
        requestError,
      );

      setPhone("");
      setError(
        "WhatsApp indisponível no momento. Tente novamente mais tarde.",
      );
    } finally {
      setLoading(false);
    }
  }, [loadPhone]);

  useEffect(() => {
    const controller = new AbortController();

    async function initializeWhatsApp() {
      try {
        await loadPhone(controller.signal);
      } catch (requestError) {
        if (controller.signal.aborted) return;

        console.error(
          "Erro ao buscar o número do WhatsApp:",
          requestError,
        );

        setPhone("");
        setError(
          "WhatsApp indisponível no momento. Tente novamente mais tarde.",
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    initializeWhatsApp();

    return () => controller.abort();
  }, [loadPhone]);

  const open = useCallback(
    (message: string) => {
      if (loading) return;

      if (!phone) {
        window.alert(
          error ||
            "WhatsApp indisponível no momento. Tente novamente mais tarde.",
        );

        return;
      }

      const url = buildWhatsAppUrl(phone, message);

      window.open(
        url,
        "_blank",
        "noopener,noreferrer",
      );
    },
    [error, loading, phone],
  );

  return (
    <WhatsAppContext.Provider
      value={{
        loading,
        phone,
        error,
        refresh,
        open,
      }}
    >
      {children}
    </WhatsAppContext.Provider>
  );
}

export function useWhatsApp(): WhatsAppContextValue {
  const context = useContext(WhatsAppContext);

  if (!context) {
    throw new Error(
      "useWhatsApp deve ser usado dentro de WhatsAppProvider.",
    );
  }

  return context;
}