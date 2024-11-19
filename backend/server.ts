import express from 'express';
import dotenv from 'dotenv';
import { getProductPrice } from './ebay-api/ebayService';
import { getHint } from './hintService';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Route to fetch product price from eBay
app.get('/api/product/:name', async (req, res) => {
  const productName = req.params.name;
  try {
    const price = await getProductPrice(productName);
    res.json(price);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product price' });
  }
});

// Route to get a hint using OpenAI's API
app.get('/api/hint/:question', async (req, res) => {
  const question = req.params.question;
  try {
    const hint = await getHint(question);
    res.json({ hint });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hint' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
