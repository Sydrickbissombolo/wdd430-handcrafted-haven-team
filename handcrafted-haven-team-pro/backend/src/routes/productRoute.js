import express from 'express';
import {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
} from '../controllers/productController.js';

const router = express.Router();

// Route to create a new product
router.post('/', createProduct);

// Route to get a single product by ID
router.get('/:id', getProduct);

// Route to update a product by ID
router.put('/:id', updateProduct);

// Route to delete a product by ID
router.delete('/:id', deleteProduct);

// Route to get all products
router.get('/', getAllProducts);

export default router;