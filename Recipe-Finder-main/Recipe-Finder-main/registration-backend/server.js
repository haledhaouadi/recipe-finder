const express = require ('express');
const cors = require('cors');
const mongoose = require ('mongoose');
const app=express();
const PORT = process.env.PORT || 5000;

const dbURL="mongodb+srv://eyajeljli1:hello123456789@cluster0.3fde8nb.mongodb.net/?retryWrites=true&w=majority";
const connectionParams={
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.connect(dbURL,connectionParams)
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


//schema and model

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Registration = mongoose.model('Registration', registrationSchema);

let participantCount = 0;

app.use(express.json());
app.use(cors());

// Routes

app.get('/api/register', async (req, res) => {
  try {
    const registrations = await Registration.find({}, 'name email');
    res.json(registrations);
  } catch (error) {
    console.error('Failed to fetch registrations:', error);
    res.sendStatus(500);
  }
});

app.post('/api/register', async (req, res) => {

    const { name, email } = req.body;
  
    try {

      const registration = new Registration({ name, email });
      await registration.save();
      participantCount++;
      res.sendStatus(200);

    } catch (error) {
      console.error('Registration failed:', error);
      res.sendStatus(500);
    }
});
  
app.get('/api/participantCount', async (req, res) => {
    try {

      const count = await Registration.countDocuments();
      participantCount = count;
  
      res.json({ count });
    } catch (error) {
      console.error('Failed to fetch participant count:', error);
      res.sendStatus(500);
    }
});
  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
