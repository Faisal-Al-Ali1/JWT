# React Authentication App 🛡️

A simple authentication system built using React (Vite), Axios, and JWT. This app demonstrates a secure sign-up, login, and protected profile page with JWT authentication, using cookies to store the authentication token.

## 🚀 Features

- **Sign Up**: Register new users and hash their passwords using `bcrypt`.
- **Login**: Authenticate users with JWT and store the token in cookies.
- **Profile Page**: Protected route that can only be accessed by authenticated users.
- **Cookie-based Authentication**: JWT tokens are stored in cookies for secure access control.
- **Redirect on Authentication**: Redirect users to the login page if they try to access the profile without being logged in.

## 🛠️ Technologies Used

- **React (Vite)**: Frontend framework for building the user interface.
- **Axios**: Used for making HTTP requests.
- **Express.js**: Backend server for handling authentication and user routes.
- **JWT (JSON Web Tokens)**: For user authentication and token-based authorization.
- **bcryptjs**: For password hashing and verification.
- **CORS**: To handle cross-origin requests.

## 📦 Installation

To get started with this project locally, follow these steps:

1. **Clone this repository**:

   ```bash
   git clone https://github.com/yourusername/react-auth-app.git
   cd react-auth-app
