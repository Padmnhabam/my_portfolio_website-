# Padmnabham Vijay Khedekar - Portfolio Website

A modern, professional portfolio website built with React + Vite and connected to MongoDB Atlas for data storage and analytics.

## 🚀 Features

- **Modern React Architecture** with Vite for fast development
- **MongoDB Atlas Integration** for contact form and visitor analytics
- **Responsive Design** optimized for all devices
- **Smooth Animations** using Framer Motion
- **Contact Form** with backend validation and storage
- **Visitor Analytics** tracking for insights
- **Professional Design** perfect for Data Analyst/Data Scientist roles

## 🛠 Tech Stack

**Frontend:**
- React 18
- Vite
- Framer Motion
- Lucide React Icons
- CSS3 with modern features

**Backend:**
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose ODM

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update `.env` with your MongoDB Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
   ```

4. **Start the development server**
   ```bash
   npm start
   ```
   
   This will start both the backend server (port 5000) and frontend (port 5173)

## 🗄 MongoDB Atlas Setup

1. **Create MongoDB Atlas Account**
   - Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
   - Create a free account

2. **Create a Cluster**
   - Create a new cluster (free tier available)
   - Choose your preferred cloud provider and region

3. **Set up Database Access**
   - Create a database user with read/write permissions
   - Note down the username and password

4. **Configure Network Access**
   - Add your IP address to the IP Access List
   - For development, you can use `0.0.0.0/0` (not recommended for production)

5. **Get Connection String**
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string and update your `.env` file

## 📊 Database Collections

The application uses two main collections:

**contacts** - Stores contact form submissions
```javascript
{
  name: String,
  email: String,
  subject: String,
  message: String,
  createdAt: Date,
  status: String // 'new', 'read', 'replied'
}
```

**visitors** - Tracks visitor analytics
```javascript
{
  ip: String,
  userAgent: String,
  timestamp: Date,
  page: String,
  referrer: String
}
```

## 🔧 API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)
- `POST /api/visitor` - Track visitor
- `GET /api/analytics` - Get visitor analytics
- `GET /api/health` - Health check

## 🚀 Deployment

**Frontend (Netlify/Vercel):**
1. Build the project: `npm run build`
2. Deploy the `dist` folder

**Backend (Railway/Render/Heroku):**
1. Deploy the backend with environment variables
2. Update `VITE_API_URL` in frontend environment

## 📱 Features Overview

- **Hero Section** - Dynamic role rotation with animations
- **About** - Personal story with statistics
- **Skills** - Categorized technical skills with progress bars
- **Projects** - Featured projects with tech stacks
- **Education** - Academic background and certifications
- **Contact** - Working contact form with MongoDB storage
- **Analytics** - Visitor tracking and insights

## 🎨 Customization

The website is fully customizable:
- Update personal information in components
- Modify color scheme in CSS variables
- Add/remove sections as needed
- Customize animations and interactions

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

Padmnabham Vijay Khedekar
- Email: padmnabham.khedekar@email.com
- LinkedIn: [linkedin.com/in/padmnabham-khedekar](https://linkedin.com/in/padmnabham-khedekar)
- GitHub: [github.com/padmnabham-khedekar](https://github.com/padmnabham-khedekar)