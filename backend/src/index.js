import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import adminRoutes from './routes/admin.js'

dotenv.config()

const app = express()

// Middleware
app.use(express.json())
app.use(cors())
app.use(helmet())

// Routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/admin', adminRoutes)

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err))

// Create initial superuser if not exists
const createSuperuser = async () => {
  const User = mongoose.model('User')
  const superuser = await User.findOne({ email: 'admin@farmley.com' })
  
  if (!superuser) {
    const newSuperuser = new User({
      username: 'admin',
      email: 'admin@farmley.com',
      password: 'admin123', // Change this in production
      isSuperuser: true,
    })
    await newSuperuser.save()
    console.log('Initial superuser created')
  }
}

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  createSuperuser()
}) 