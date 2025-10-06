const User = require('../models/User');
const { stringify } = require('csv-stringify');

exports.userReport = async (req, res) => {
  try {
    const users = await User.find().select('name email role createdAt').lean();

    const columns = ['Name', 'Email', 'Role', 'Created At'];
    const data = users.map(u => [u.name, u.email, u.role, u.createdAt.toISOString()]);

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=users_report.csv');

    stringify([columns, ...data], (err, output) => {
      if (err) return res.status(500).send('Error generating CSV');
      res.send(output);
    });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
