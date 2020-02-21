import { Router } from 'express'
const router = Router()
import {getMain, postAddProduct, postAddBundle, getBundles, getProduct, getProducts, putUpdateProduct, deleteProduct} from '../controllers/products.controller'

//Serve index page
router.get('/', getMain)

//Add product
router.post('/products', postAddProduct)
//Add bundle
router.post('/bundles', postAddBundle)
//get all products
router.get('/products', getProducts)
//get all bundles
router.get('/bundles', getBundles)
//get product by id
router.get('/product/:prodId', getProduct)
//Modify product
router.put('/products/:prodId', putUpdateProduct)
//Delete product
router.delete('/products/:prodId', deleteProduct)

export default router