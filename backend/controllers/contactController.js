const Contact = require('../models/Contact');

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
const submitContactMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please add all fields' });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    if (contact) {
      res.status(201).json({
        message: 'Message securely transmitted to the orbital base.',
        id: contact._id,
      });
    } else {
      res.status(400).json({ error: 'Invalid message data' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error: Data transmission failed.' });
  }
};

module.exports = {
  submitContactMessage,
};
