# Concontabil Consultoria — Next.js

Projeto migrado de TanStack Start/Vite para **Next.js App Router**, mantendo:

- layout e responsividade;
- imagens e conteúdo;
- animações de fundo, cards, marquee, flutuação e shimmer;
- animações de entrada ao rolar a página;
- contador animado;
- páginas de Política de Privacidade e Termos de Uso;
- integração dinâmica com a API de números do WhatsApp.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm install
npm run build
npm start
```

A porta padrão do Next.js é 3000. Para usar a porta 3010:

```bash
npm start -- -p 3010
```

## PM2

O projeto já possui `ecosystem.config.cjs` configurado para a porta 3010:

```bash
npm install
npm run build
pm2 delete conconta
pm2 start ecosystem.config.cjs
pm2 save
```

Também é possível executar:

```bash
chmod +x deploy/deploy-vps.sh
./deploy/deploy-vps.sh
```

## Nginx

Há um modelo pronto em:

```text
deploy/nginx-concontabilconsultoria.conf
```

Copie para o Nginx, ative o domínio e recarregue:

```bash
sudo cp deploy/nginx-concontabilconsultoria.conf /etc/nginx/sites-available/concontabilconsultoria.pro
sudo ln -s /etc/nginx/sites-available/concontabilconsultoria.pro /etc/nginx/sites-enabled/concontabilconsultoria.pro
sudo nginx -t
sudo systemctl reload nginx
```

Caso o link simbólico já exista, ignore o erro do `ln -s`.

## API do WhatsApp

A API atual permanece configurada por padrão. Para alterar sem editar o código, crie `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_API_BASE=https://troca-numeros-api-production.up.railway.app
```
