import { Router } from 'express';
import ProductController from "./product.controller";

const router = Router();

router.get('/getAll', (req, res) => ProductController.getProducts(req, res));
router.post('/addProduct', (req, res) => ProductController.addProduct(req, res));
router.put('/:id', (req, res) => ProductController.updateProduct(req, res));
router.delete('/:id', (req, res) => ProductController.deleteProduct(req, res));
export default router;
