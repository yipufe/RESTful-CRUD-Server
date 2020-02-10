import { Router } from 'express'
const router = Router()
import {getMain, postAddProduct, getProducts, putUpdateProduct, deleteProduct} from '../controllers/products.controller'

//Serve index page
router.get('/', getMain)

router.post('/products', postAddProduct)
// router.get('/products', getProducts)
// router.put('/products', putUpdateProduct)
// router.delete('/products/:prodId', deleteProduct)

export default router