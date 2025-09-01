# Nexrox

A full-stack MERN application with **Authentication** and **Job Management** features.

---

🌐 Live Links

Client (Frontend): https://nexrox-client.vercel.app/

Server (Backend API): https://nexrox-server.vercel.app/

## 🚀 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/MoniruzzamanBillal/Nexrox.git
cd Nexrox
```

---

### 2. Setup Client (Frontend)

```bash
cd client
npm install
npm run dev   # or npm start
```

> ⚠️ No `.env` file is required for the frontend.

---

### 3. Setup Server (Backend)

```bash
cd server
```

Create a `.env` file inside `server/` with the following variables:

```env
PORT=5000
DATABASE_URL= mongodb url
JWT_SECRET=secretKey (string)
```

Then install dependencies and run:

```bash
npm install
npm run dev   # development
# or
npm start     # production (after build)
```

---

## 🔑 Authentication Endpoints

| Method | Endpoint             | Description       | Body Fields             |
| ------ | -------------------- | ----------------- | ----------------------- |
| POST   | `/api/auth/register` | Register new user | `name, email, password` |
| POST   | `/api/auth/login`    | Login user        | `email, password`       |

### Example: Register

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "Password123!"
}
```

### Example: Login Response

```json
{
  "message": "Login successful",
  "token": "jwt_token_here"
}
```

---

## 💼 Job Endpoints (Protected – Require JWT)

| Method | Endpoint        | Description                                 |
| ------ | --------------- | ------------------------------------------- |
| POST   | `/api/jobs`     | Create a job                                |
| GET    | `/api/jobs`     | List all jobs (for logged-in user)          |
| PUT    | `/api/jobs/:id` | Update a job (only if created by same user) |
| DELETE | `/api/jobs/:id` | Delete a job (only if created by same user) |

### Example: Create Job

```json
{
  "title": "Frontend Developer",
  "lowSalary": 30000,
  "highSalary": 50000,
  "description": "Looking for a React.js developer",
  "location": "Dhaka",
  "level": "Junior",
  "category": ["Software Development"],
  "vacancy": 2
}
```

---

## 🛠 Issues & Solutions

- **MongoDB connection error** → Ensure your `DATABASE_URL` is correct in `.env`.
- **JWT authentication fails** → Check that you send the token in headers:
  ```http
  Authorization: Bearer <token>
  ```
- **Frontend not connecting to backend** → Confirm backend is running on `http://localhost:5000` and update API base URL in client code if necessary.

---

## 📌 Tech Stack

- **Frontend:** React.js (Vite/CRA)
- **Backend:** Node.js, Express.js, TypeScript
- **Database:** MongoDB (Mongoose)
- **Auth:** JWT + bcrypt

---

### Credentials :

- **Email**: abc@d.com
- **password**: 123456
