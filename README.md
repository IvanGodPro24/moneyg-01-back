# Money Guard Backend

**MoneyG Backend** is the server-side component of the MoneyG personal finance management application. It provides RESTful APIs for user authentication, transaction management, and statistical analysis. The backend is built using Node.js and Express.js, ensuring scalability and performance.

## 🚀 API Documentation

Explore the API endpoints and their specifications at: [moneyg-01-back.onrender.com/api-docs](https://moneyg-01-back.onrender.com/api-docs)

## 🛠️ Technologies Used

- **Node.js** — JavaScript runtime environment
- **Express.js** — Web framework for building APIs
- **MongoDB** — NoSQL database for data storage
- **Mongoose** — ODM for MongoDB
- **JWT** — JSON Web Tokens for authentication
- **Swagger** — API documentation
- **ESLint & Prettier** — Code quality and formatting

## 📦 Installation & Setup

Ensure you have Node.js (v16 or higher) and MongoDB installed.

1. Clone the repository:

   ```bash
   git clone https://github.com/IvanGodPro24/moneyg-01-back.git
   ```

2. Navigate to the project directory:

   ```bash
   cd moneyg-01-back
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory based on `.env.example` and configure the necessary environment variables.
   j
5. Start the development server:

   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
moneyg-01-back/
├── src/
│   ├── controllers/        # Request handlers
│   ├── db/                 # Mongoose schemas and models
│   ├── middlewares/        # Custom middleware functions
│   ├── routers/            # API route definitions
│   ├── services/           # Database requests
│   ├── templates/          # HTML templates
│   ├── utils/              # Utility functions
│   ├── validation/         # Validation schemas
│   └── server.js           # Express app setup
├── swagger/                # Swagger API documentation
├── .env.example            # Example environment variables
├── package.json
└── README.md
```

## 🔐 Authentication

The backend uses JWT for secure authentication. Upon successful login, users receive a token. Protected routes require a valid token in the `Authorization` header.

## 📈 Features

- User registration and login
- JWT-based authentication
- CRUD operations for financial transactions
- Category management
- Statistical data aggregation
- Swagger-based API documentation

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.
