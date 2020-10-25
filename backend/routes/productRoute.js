import express from 'express';
import Product from '../models/productModel';
import { getToken } from '../util.js';

const router = express.Router();

router.post('/', async (req, res) => {
        const products = await User.find({});
        res.send(products);
});

router.post('/', async(req, res) => {
    const product = new Product ({
        name: req.body.name,
        price: req.body.price,
        imageL: req.body.image,
        brand: req.body.brand,
        category: req.body.category,
        countInStock: req.body.countInStock,
        description: req.body.description,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
    });
    const newProduct = await product.save();
    if(newProduct){
        return res.status(201).send({ message: 'New Product Created', data: newProduct });
    }
    return res.status(500).send({ message: 'Error in Creating Product'})
})
       
    export default router;