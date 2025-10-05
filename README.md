# ZedChat - Full Stack Chat Application

A modern, real-time chat application built with React frontend and Node.js backend.

## Features

- 🔐 **Authentication**: JWT-based login and registration
- 💬 **Real-time Chat**: Socket.io powered instant messaging
- 👥 **User Management**: User profiles and online status
- 🎨 **Modern UI**: Beautiful, responsive design
- 📱 **Mobile Friendly**: Works on all devices
- ⚡ **Real-time Features**: Typing indicators, online status

## Tech Stack

### Frontend
- React 18
- React Router
- Socket.io Client
- Context API for state management
- CSS3 with modern features

### Backend
- Node.js
- Express.js
- Socket.io
- JWT Authentication
- JSON file database (no external DB required)

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd zedchat
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:5000`

2. **Start the Frontend**
   ```bash
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser**
   Navigate to `http://localhost:3000`

## Usage

### First Time Setup

1. **Register a new account** on the login page
2. **Login** with your credentials
3. **Start chatting** with other users

### Features

- **Register/Login**: Create account or sign in
- **User List**: See all available users
- **Real-time Chat**: Send and receive messages instantly
- **Typing Indicators**: See when someone is typing
- **Online Status**: See who's online
- **Message History**: All messages are saved
- **Responsive Design**: Works on desktop and mobile

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/health` - Health check

### Users
- `GET /api/users` - Get all users (requires auth)

### Messages
- `GET /api/messages/:userId` - Get messages with specific user (requires auth)

### Socket.io Events
- `join` - Join user room
- `private_message` - Send private message
- `typing` - Send typing indicator
- `new_message` - Receive new message
- `user_typing` - Receive typing indicator

## Project Structure

```
zedchat/
├── backend/
│   ├── data/           # JSON database files
│   ├── server.js       # Main server file
│   └── package.json    # Backend dependencies
├── src/
│   ├── components/     # React components
│   ├── contexts/       # React contexts
│   ├── services/       # API and Socket services
│   ├── pages/          # Page components
│   └── assets/         # Static assets
└── README.md
```

## Development

### Backend Development
```bash
cd backend
npm run dev  # Uses nodemon for auto-restart
```

### Frontend Development
```bash
npm start  # React development server
```

## Database

The application uses a simple JSON file database located in `backend/data/`:
- `users.json` - User accounts and profiles
- `messages.json` - All chat messages

No external database setup required!

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=5000
JWT_SECRET=your-secret-key-here
```

## Troubleshooting

### Common Issues

1. **Backend not starting**
   - Check if port 5000 is available
   - Ensure all dependencies are installed

2. **Frontend not connecting to backend**
   - Verify backend is running on port 5000
   - Check browser console for errors

3. **Socket.io connection issues**
   - Ensure both frontend and backend are running
   - Check CORS settings in server.js

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Author

Created by Wazingwa Mugala - Software Engineer

---

**Note**: This is a simple chat application for demonstration purposes. For production use, consider adding:
- Database integration (MongoDB, PostgreSQL)
- Message encryption
- File upload support
- Push notifications
- User roles and permissions