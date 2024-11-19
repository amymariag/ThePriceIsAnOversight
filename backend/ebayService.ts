import axios from 'axios';

const EBAY_BASE_URL = 'https://api.ebay.com';
const EBAY_API_KEY = process.env.EBAY_API_KEY;

export const getProductPrice = async (productName: string) => {
  try {
    const response = await axios.get(`${EBAY_BASE_URL}/search`, {
      params: { query: productName },
      headers: { Authorization: `Bearer ${EBAY_API_KEY}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching product price:', error);
    throw error;
  }
};
