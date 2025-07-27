import express from 'express';
import {
  createSeller,
  getSeller,
  updateSeller,
  deleteSeller,
  getAllSellers
} from '../controllers/sellerController.js';

const router = express.Router();

// Route to create a new seller profile
router.post('/', createSeller);

// Route to get a specific seller profile by ID
router.get('/:id', getSeller);

// Route to update a seller profile by ID
router.put('/:id', updateSeller);

// Route to delete a seller profile by ID
router.delete('/:id', deleteSeller);

// Route to get all sellers
router.get('/', getAllSellers);

export default router;