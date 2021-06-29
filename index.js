const fs = require('fs');

const Heroku = require('heroku-client');
const heroku = new Heroku({ token: process.env.HEROKU_API_TOKEN});

const filepath = process.env.OUT_FILE;
const app = process.env.HEROKU_APP;
heroku.get(`/apps/${app}/config-vars`).then(config => {
    if (config.DATABASE_URL) {
        const out = `DATABASE_URL=${config.DATABASE_URL}`;
        if (filepath && filepath !== '') {
            fs.writeFileSync(filepath, out);
        } else {
            console.log(`DATABASE_URL=${config.DATABASE_URL}`);
        }
    }
});
