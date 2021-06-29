const Heroku = require('heroku-client');
const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN});


const app = process.env.HEROKU_APP 
heroku.get(`/apps/${app}/config-vars`).then(config => {
    if (config.DATABASE_URL) {
        console.log(`DATABASE_URL=${config.DATABASE_URL}`);
    }
});
