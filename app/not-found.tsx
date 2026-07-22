import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-hero px-5 text-foreground">
      <div className="max-w-md text-center">
        <p className="font-display text-7xl font-bold text-gradient-primary">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold">Página não encontrada</h1>
        <p className="mt-3 text-muted-foreground">
          O endereço acessado não existe ou foi alterado.
        </p>
        <Link
          href="/"
          className="mt-7 inline-flex rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-glow"
        >
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
