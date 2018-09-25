# express-boilerplate
## File structure
```
express-boilerplate/
├── app/
│   ├── exceptions/
│   │   ├── index.js
│   │   └── ResourceNotFoundException.js
│   ├── managers/
│   │   ├── BaseManager.js
│   │   └── UserManager.js
│   └── models/
│       └── User.js
├── config/
│   ├── app.js
│   └── database.js
├── database/
│   ├── migrations/
│   │   └── 20180823072929-create-user.js
│   └── seeders/
│       └── 20180823075353-demo-user.js
├── http/
│   ├── controllers
│   │   ├── auth.js
│   │   ├── status.js
│   │   └── users.js
│   ├── middlewares
│   │   ├── errorHandler.js
│   │   ├── index.js
│   │   └── passport.js
│   ├── resources
│   │   ├── BaseResource.js
│   │   └── UserResource.js
│   └── routes.js
├── lib/
│   ├── database.js
│   └── log.js
├── tests/
|   ├── feature/
|   │   └── auth.js
|   └── unit/
├── .env
├── .env.example
├── .eslintrc.json
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
├── README.md
└── .sequelizerc
```

## Roadmap

- [ ] Proper tests
- [ ] Unit test example
- [ ] Flexible ORM choice
- [x] Organize package.json
- [ ] Preconfigure Sequelize
