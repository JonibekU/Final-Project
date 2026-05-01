var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next){
  try {
    const fakeTodos = [
      { id: 1, task: "Glazed Donut" },
      { id: 2, task: "Chocolate Donut" },
      { id: 3, task: "Coffee" }
    ];

    res.render('index', { title: 'My Simple TODO', todos: fakeTodos });

  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Error fetching items');
  }
});

/* Menu + About */
router.get('/menu', (req, res) => {
  res.render('menu', { title: 'Menu' });
});

router.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});


// =========================
// COMMENTS SYSTEM
// =========================

// GET comments page
router.get('/comments', function(req, res) {
  req.db.query(
    'SELECT * FROM comments ORDER BY created_at DESC',
    (err, results) => {

      if (err) {
        console.error('DB ERROR:', err);
        return res.status(500).send('Error loading comments');
      }

      res.render('comments', {
        title: 'Comments',
        comments: results
      });
    }
  );
});


// POST new comment
router.post('/comments', function(req, res) {
  let { name, comment } = req.body;

  // 🔒 SERVER-SIDE VALIDATION (REQUIRED FOR RUBRIC)
  if (!name || !comment || !name.trim() || !comment.trim()) {
    return res.status(400).send('Name and comment cannot be empty');
  }

  // limit length
  if (name.length > 100 || comment.length > 500) {
    return res.status(400).send('Input too long');
  }

  // sanitize (basic)
  name = name.trim();
  comment = comment.trim();

  req.db.query(
    'INSERT INTO comments (name, comment) VALUES (?, ?)',
    [name, comment],
    (err, results) => {

      if (err) {
        console.error('INSERT ERROR:', err);
        return res.status(500).send('Error saving comment');
      }

      // redirect back to comments page
      res.redirect('/comments');
    }
  );
});
router.post('/comments', function(req, res) {
  const { name, comment } = req.body;

  // Basic validation
  if (!name || !comment) {
    return res.status(400).send('Please fill out all fields');
  }

  req.db.query(
    'INSERT INTO comments (name, comment) VALUES (?, ?)',
    [name, comment],
    (err, results) => {
      if (err) {
        console.error('INSERT ERROR:', err);
        return res.status(500).send('Error saving comment');
      }

      // Redirect back to comments page
      res.redirect('/comments');
    }
  );
});


module.exports = router;