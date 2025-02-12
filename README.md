![image](https://github.com/user-attachments/assets/9aedffac-fc69-4e8e-8d8d-81d70b86314c)


MERN To-Do App
A simple To-Do List Application built with the MERN Stack (MongoDB, Express.js, React.js, and Node.js).

🚀 Features
✅ Add, Edit, and Delete To-Do items
✅ Mark tasks as completed
✅ Show timestamps for when tasks were created & updated
✅ Scrollable To-Do list while keeping the input fixed
✅ Responsive UI with Bootstrap
✅ MongoDB integration for persistent storage

📂 Project Structure
graphql
Copy
Edit
mern-todo-app/
│-- backend/           # Node.js & Express API (Server)
│   │-- config/        # MongoDB connection settings
│   │-- models/        # Mongoose schemas
│   │-- routes/        # API routes for todos
│   │-- server.js      # Main backend entry point
│-- frontend/          # React.js App (Client)
│   │-- src/           # Main source code
│   │   ├── components/  # TodoForm, TodoList, TodoItem
│   │   ├── pages/       # Home page
│   │   ├── api.js       # Axios API requests
│   │   ├── App.js       # Main React component
│   │   ├── index.js     # React entry point
│-- README.md          # Project documentation
│-- package.json       # Dependencies for both backend & frontend
🔧 Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/your-username/mern-todo-app.git
cd mern-todo-app
2️⃣ Install Backend Dependencies
sh
Copy
Edit
cd backend
npm install
3️⃣ Install Frontend Dependencies
sh
Copy
Edit
cd ../frontend
npm install
4️⃣ Set Up Environment Variables
Create a .env file inside the backend/ folder:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
PORT=5000
▶️ Running the App
Start Backend (Server)
sh
Copy
Edit
cd backend
npm run dev
Start Frontend (React)
sh
Copy
Edit
cd frontend
npm start
Open the App in Browser
arduino
Copy
Edit
http://localhost:3000
🛠 API Endpoints (Backend)
Method	Endpoint	Description
GET	/api/todos	Get all to-dos
POST	/api/todos	Add a new to-do
PUT	/api/todos/:id	Update a to-do
DELETE	/api/todos/:id	Delete a to-do
🖥 Technologies Used
Frontend: React.js, Bootstrap, Axios
Backend: Node.js, Express.js, MongoDB, Mongoose
Database: MongoDB Atlas
Version Control: Git & GitHub
🎯 To-Do List (Future Features)
🔹 Add user authentication (Login/Signup)
🔹 Add due dates & reminders
🔹 Improve UI/UX with animations

🤝 Contributing
Feel free to fork this repository and submit pull requests. Contributions are welcome! 🎉
