// import { getDb } from '../util/database'
import { getDb } from '../util/database'
//const getDb = _getDb

const products = []

export default class Product {
    constructor(itemCode, name, price, description, imageUrl) {
        this.itemCode = itemCode
        this.name = name
        this.price = price
        this.description = description
        this.imageUrl = imageUrl
    }

    save() {
        products.push(this)


        const db = getDb();
        return db
            .collection('products')
            .insertOne(this)
            .then(result => {
                console.log(result)
            })
            .catch(err => {
                console.log(err)
            })
    }

    static fetchAll() {
        const db = getDb()
        return db
            .collection('products')
            .find()
            .toArray()
            .then(products => {
                console.log(products)
                return products
            })
            .catch(err => {
                console.log(err)
            })

        return products
    }
}