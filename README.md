# API Starter

## Setup

```
npm install
```

## Set file .env

```
NODE_ENV=development
MONGODB_URI =
JWT_SECRET_KEY = SECRETE_KEY_TEST_123456
```

## Start project

```
npm start
```

### Api Endpoints

- `POST /user/login` User login. (require body username,password) (return token)
- `POST /user/register` User register. (require body username,password)

- `GET /` Get all jokes.
- `POST /` Add new joke. (Require header authorization Bearer Token)
- `GET /:id` Get joke by id.
- `DELETE /:id` Delete joke. (Require header authorization Bearer Token)
- `POST /:id/like` Like a joke.
- `POST /:id/dislike` Dislike a joke.
