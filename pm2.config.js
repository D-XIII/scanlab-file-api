module.exports = {
    apps: [
      {
        name: 'scanlab-file-api',
        script: 'node index.js',
        autorestart: true,
        restart_delay: 60 * 1000 * 5,
        log_date_format: "DD-MM HH:mm:ss.SSS"
      }
    ]
}