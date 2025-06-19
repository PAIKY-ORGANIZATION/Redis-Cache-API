# Leverage Redis Cache for performance.
## API Documentation and About:

[API Documentation](https://documenter.getpostman.com/view/40182356/2sB2x9jqfd)

## How to Use the Application

### Run with Docker Compose (recommended if you have Docker, includes a Redis service and works out of the box):
``` docker compose up --build ```

### Run integration test 
To ensure consistency run tests only in Docker.
``` docker compose run test ```

You can also test locally for speed. However, you need to set up a Redis instance locally. Make sure to set the correct environment variables: REDIS_HOST and REDIS_PORT in config/test.env
``` npm run test ```


## Environment Configuration Overview
There is NO need to modify .env files as long as you run everything in Docker.

However, here's how they works:

A "bootstrap.js" file is loaded automatically on startup to manage environment variables using dotenv.

config/shared.env holds variables common to all environments.

config/{environment}.env is loaded based on process.env.ENVIRONMENT, which is set by the script in package.json (e.g., npm run dev_local sets ENVIRONMENT=dev).

This setup keeps configuration modular and avoids duplication.


