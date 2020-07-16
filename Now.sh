
{
  "name": "dh-admin-server",
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@now/node-server",
      "config": {
        "includeFiles": ["db.json"]
      }
    }
  ],
  "routes": [
    {
      "headers": {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Accept"
      },
      "src": "/.*",
      "dest": "/index.js"
    }
  ]
}
