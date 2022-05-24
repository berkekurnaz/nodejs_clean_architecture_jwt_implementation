# Node.js Clean Architecture JWT Implementation
This repository created for how can we JWT implementation with clean architecture in Node.js and Express.js applications.
You can find all codes here. Also, you can easily extend your projects with use this repository.



## Tech Stack
- Javascript
- Node.js
- Express.js
- MongoDB
- JWT
- Crypto



## Usage API

#### Create a new user

```http
  POST /user/createUser
```

| Body Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `username` | `string` | Username |
| `name` | `string` | Name |
| `mail` | `string` | Mail |
| `description` | `string` | Description |
| `password` | `string` | Password |

#### Login User

```http
  POST /user/login
```

| Body Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `string` | Username |
| `name` | `string` | Name |

#### Get User Details

```http
  GET /user/getMe
```

| Header Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Authorization` | `string` | YOUR_JWT |

#### Example JWT

Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOGJjMThkNTEwYjA4OWY0MGM2YzdjNCIsInVzZXJuYW1lIjoiYmVya2VrdXJuYXoxMCIsIm1haWwiOiJjb250YWN0QGJlcmtla3VybmF6LmNvbSIsImlhdCI6MTY1MzM4ODkzOCwiZXhwIjoxNjUzNDc1MzM4fQ.PXJWKnS20Le2RBQFZ2TK5BlHjallgt1no8Dk4uzLM9o



#### Example Add JWT Authenticate to Your Route

```javascript
router.get('/getMe', jwtService.authenticateToken, UserController.getMe)
```

  
### Project Setup

```bash
  npm install
```

### Tests run

```bash
  npm tests
```

### Start the project on port 80

```bash
  npm start
```
  


### Example .env file

```bash
  NODE_ENV=development 
  DATABASE_URL=cluster0.yourmongourl.mongodb.net
  DATABASE_NAME=YOUR_DB_NAME
  DATABASE_USER_USERNAME=YOUR_DB_USERNAME
  DATABASE_USER_PASSWORD=YOUR_DB_PASSWORD
  DATABASE_MAIL=YOUR_DB_MAIL
  TOKEN_SECRET=YOUR_TOKEN_SECRET
```



## Developer
Berke Kurnaz <br/>
https://github.com/berkekurnaz  