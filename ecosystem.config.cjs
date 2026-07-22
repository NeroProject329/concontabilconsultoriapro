module.exports = {
  apps: [
    {
      name: "conconta",
      cwd: __dirname,
      script: "npm",
      args: "start -- -p 3010",
      env: {
        NODE_ENV: "production",
        HOSTNAME: "127.0.0.1",
        PORT: "3010",
      },
      autorestart: true,
      max_memory_restart: "500M",
    },
  ],
};
