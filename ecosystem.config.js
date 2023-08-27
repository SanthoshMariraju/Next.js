module.exports = {
    apps: [
      {
        name: 'next-app',
        script: 'node_modules/next/dist/bin/next',
        args: 'start',
        instances: 'max',
        autorestart: true,
        watch: false,
        max_memory_restart: '1G',
      },
    ],
  };
  