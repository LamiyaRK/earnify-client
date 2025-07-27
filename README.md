# 💼 Micro Tasking & Earning Platform - Earnify

A full-stack web application where users can complete micro-tasks to earn coins, which can be withdrawn as real money. It supports three distinct user roles: **Worker**, **Buyer**, and **Admin**, each with unique dashboards and functionalities. Inspired by platforms like Picoworkers and Clickworker, but with a clean, modern design and smart features.


## 🚀 Technologies Used

### Frontend:
- React.js
- React Router DOM
- Tailwind CSS
- Axios
-aos
- React Hook Form
- Swiper.js

### Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- Firebase Admin SDK (for Authentication & Role Verification)
- Stripe Payment Integration

---

## 🔑 Main Features

### 🔹 Authentication
- Email/password & Google Login (Firebase)
- Role-based access (Worker / Buyer / Admin)
- Secure JWT token-based route protection

### 🔹 Buyer Features
- Add and manage tasks
- Review worker submissions (Approve/Reject)
- Purchase coins via Stripe
- View payment history

### 🔹 Worker Features
- Browse tasks and submit work
- Earn coins for approved work
- Withdraw earnings (Bkash, Nagad, Rocket, etc.)
- View submission history and earnings

### 🔹 Admin Features
- Manage all users and tasks
- Review and approve withdrawal requests
- View platform-wide analytics

### 🔹 Extra Features
- Notification system
- Responsive design (mobile-friendly)
- Image upload via ImgBB
- Animated homepage with sliders and testimonials

---

## 📦 Dependencies

- `react`
- `react-router-dom`
- `axios`
- `firebase`
- `jsonwebtoken`
- `cors`
- `dotenv`
- `mongoose`
- `express`
- `react-hook-form`
- `swiper`
- `aos`
- `imgbb-uploader`
- `stripe`


---

## ⚙️ How to Run the Project Locally

### 1. Clone the Repository
git clone https://github.com/your-username/earnify.git
cd earnify
2. Install Frontend Dependencies
cd client
npm install
3. Install Backend Dependencies
cd ../server
npm install
4. Set Up Environment Variables
client/.env
VITE_API_URL=http://localhost:5000
VITE_IMG_API_KEY=your_imgbb_api_key
VITE_FIREBASE_API_KEY=your_firebase_api_key
server/.env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
FIREBASE_PROJECT_ID=your_firebase_project_id
STRIPE_SECRET_KEY=your_stripe_secret_key
5. Run the Server
cd server
npm run dev
6. Run the Client
cd ../client
npm run dev
Now, the project should be running at http://localhost:5173

🔗 Live & Relevant Links
🔴 Live Site: https://microjob-126da.web.app/

📄 Terms & Conditions: /terms

📧 Contact: lamiyarahmankhan01@gmail.com