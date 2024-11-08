const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 5000;

// Middleware to handle JSON body data
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));  // Serve static assets like images

// Configure multer to store images in '/assets/img/portfolio/' folder
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'public/assets/img/portfolio')); // Save to '/assets/img/portfolio/'
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + path.extname(file.originalname); // Unique filename based on timestamp
    cb(null, filename);
  },
});

const upload = multer({ storage });

// Endpoint to handle image uploads
app.post('/api/upload', upload.array('images', 5), (req, res) => {
  const uploadedPaths = req.files.map(file => `/assets/img/portfolio/${file.filename}`);
  res.json({ uploadedPaths });
});

// Endpoint to save portfolio item with uploaded images
app.post('/api/portfolio', (req, res) => {
  const { title, category, link, images } = req.body;

  const newItem = {
    id: Date.now(),
    title,
    category,
    link,
    images,  // Array of image paths from the upload
  };

  const portfolioFilePath = path.join(__dirname, 'data', 'portfolio.json');

  fs.readFile(portfolioFilePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read portfolio file' });
    }

    const portfolioItems = JSON.parse(data || '[]');
    portfolioItems.push(newItem);

    fs.writeFile(portfolioFilePath, JSON.stringify(portfolioItems, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to save portfolio item' });
      }
      res.status(200).json({ message: 'Portfolio item saved successfully' });
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
