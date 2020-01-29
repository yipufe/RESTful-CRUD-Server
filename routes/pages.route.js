import { Router } from 'express'
const router = Router()
import {getMain, postAddProduct, getProducts} from '../controllers/products.controller'

//Serve index page
router.get('/', getMain)

router.post('/products', postAddProduct)
router.get('/products', getProducts)


export default router