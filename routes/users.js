const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('users', { user: 'tetz' });
});

module.exports = router;
