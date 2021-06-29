# Grab Heroku Postgresql connection details

This will get the connection string to connect to your heroku postgres
externally.

It requires an auth token (you can get one that doesn't expire in heroku
settings) and your app name.

`HEROKU_API_TOKEN=token HEROKU_APP=my-app node index.js`
