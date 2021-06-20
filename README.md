
## Build Setup

```bash
# install dependencies
$ yarn install OR npm install

# if you want to run use nodemon
$ npm install -g nodemon

# using .env
$ cp .env.example .env OR copy .env.example .env

# working with .env
APP_PORT=YOUR_PORT
DB_HOST=YOUR_MONGODB_URI
SECRET_TOKEN=YOUR_SECRET_TOKEN

# run with node
$ node index.js

# run with nodemon
$ nodemon