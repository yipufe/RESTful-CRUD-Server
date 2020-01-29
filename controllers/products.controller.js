import { join } from 'path'

import Product from '../models/product.model' 

export const postAddProduct = (req, res, next)=>{
    const product = new Product(
        req.body.itemCode, 
        req.body.name,
        req.body.price,
        req.body.description,
        req.body.imageUrl)
    product.save()
        .then(result => {
            console.log('Created Product')
            res.send('Created Product! Check your DB')
        })
    //res.sendFile(join(__dirname, '../', 'views', 'products.html'))
}

export const getProducts = (req, res, next)=>{
    Product.fetchAll()
        .then(products => {
            res.json(products)
        })
        .catch(err => {
            console.log(err)
        })
    
    //res.sendFile(join(__dirname, '../', 'views', 'products.html'))
}

export const getMain = (req, res, next)=>{
    res.sendFile(join(__dirname, '../', 'views', 'index.html'))
}

