const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((error) => console.error('❌ MongoDB connection error:', error));

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  subject: {
    type: String,
    required: true,
    trim: true
  },
  message: {
    type: String,
    required: true,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['new', 'read', 'replied'],
    default: 'new'
  }
});

const Contact = mongoose.model('Contact', contactSchema);

// Visitor Schema (for analytics)
const visitorSchema = new mongoose.Schema({
  ip: String,
  userAgent: String,
  timestamp: {
    type: Date,
    default: Date.now
  },
  page: String,
  referrer: String
});

const Visitor = mongoose.model('Visitor', visitorSchema);

// Routes

// Submit contact form
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Create new contact
    const newContact = new Contact({
      name,
      email,
      subject,
      message
    });

    await newContact.save();

    res.status(201).json({
      success: true,
      message: 'Thank you for your message! I\'ll get back to you soon.',
      data: {
        id: newContact._id,
        name: newContact.name,
        createdAt: newContact.createdAt
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.'
    });
  }
});

// Get all contacts (for admin use)
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({
      success: true,
      data: contacts,
      count: contacts.length
    });

  } catch (error) {
    console.error('Get contacts error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
});

// Track visitor (for analytics)
app.post('/api/visitor', async (req, res) => {
  try {
    const { page, referrer } = req.body;
    const ip = req.ip || req.connection.remoteAddress;
    const userAgent = req.get('User-Agent');

    const visitor = new Visitor({
      ip,
      userAgent,
      page,
      referrer
    });

    await visitor.save();

    res.json({
      success: true,
      message: 'Visitor tracked'
    });

  } catch (error) {
    console.error('Visitor tracking error:', error);
    res.status(500).json({
      success: false,
      message: 'Tracking error'
    });
  }
});

// Get visitor analytics
app.get('/api/analytics', async (req, res) => {
  try {
    const totalVisitors = await Visitor.countDocuments();
    const todayVisitors = await Visitor.countDocuments({
      timestamp: {
        $gte: new Date(new Date().setHours(0, 0, 0, 0))
      }
    });

    const pageViews = await Visitor.aggregate([
      {
        $group: {
          _id: '$page',
          count: { $sum: 1 }
        }
      },
      {
        $sort: { count: -1 }
      }
    ]);

    res.json({
      success: true,
      data: {
        totalVisitors,
        todayVisitors,
        pageViews
      }
    });

  } catch (error) {
    console.error('Analytics error:', error);
    res.status(500).json({
      success: false,
      message: 'Analytics error'
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});