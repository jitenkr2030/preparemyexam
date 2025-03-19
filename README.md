# PrepareMyExam

PrepareMyExam is a comprehensive mobile application designed to help students prepare for various competitive exams effectively. The platform provides study materials, practice tests, mock exams, and personalized learning experiences.

## Features

### User Experience
- Interactive onboarding process
- Personalized dashboard
- Exam-specific study plans
- Progress tracking

### Study Materials
- Comprehensive study content
- Topic-wise organization
- Downloadable resources
- AI-generated study plans

### Practice & Assessment
- Practice questions
- Mock tests
- Performance analytics
- Personalized feedback

### Community Features
- Discussion forums
- Peer learning
- Doubt clearing
- Mentor support

## Tech Stack

### Frontend (Mobile App)
- React Native
- Expo
- React Navigation
- React Native Paper

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- MongoDB

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/PrepareMyExam.git
cd PrepareMyExam
```

2. Install Frontend Dependencies
```bash
cd preparemyexam
npm install
```

3. Install Backend Dependencies
```bash
cd ../backend
npm install
```

4. Configure Environment Variables
- Create `.env` file in the backend directory
- Add necessary environment variables:
```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=3000
```

### Running the Application

1. Start the Backend Server
```bash
cd backend
npm run dev
```

2. Start the Frontend Application
```bash
cd preparemyexam
npm start
```

## Project Structure

```
├── backend/                 # Backend server
│   ├── src/
│   │   ├── index.js        # Server entry point
│   │   ├── routes/         # API routes
│   │   ├── models/         # Database models
│   │   └── middleware/     # Custom middleware
│   └── package.json
│
└── preparemyexam/          # React Native application
    ├── App.js              # Root component
    ├── screens/            # Screen components
    ├── components/         # Reusable components
    ├── navigation/         # Navigation configuration
    ├── services/          # API services
    └── assets/            # Images and assets
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Support

For support, please email support@preparemyexam.com or join our Discord community.

## Authors

- Jitender - *Initial work*

## Acknowledgments

- Thanks to all contributors who have helped shape PrepareMyExam
- Special thanks to our early users for valuable feedback