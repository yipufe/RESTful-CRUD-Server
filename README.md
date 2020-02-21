# RESTful CRUD Server

## Project setup
```
npm install
```

### Run Server
```
npm start
```

### GET

#### GET all products
```
http://64.227.50.137:5000/products
```
This will output JSON of all products in the database

#### GET product by id
```
http://64.227.50.137:5000/product/<id>
```
This will output a single product as JSON by the id provided in the url.

#### GET all bundles
```
http://64.227.50.137:5000/bundles
```
This will output all product bundles as JSON


### POST

#### Create a Product

To create a product POST to:

```
http://64.227.50.137:5000/products
```
With the following in the body

itemCode - String
bottleType - String
price - Number
description - String
imageUrl - String

#### Create a bundle

to create a product bundle POST to:

```
http://64.227.50.137:5000/bundles
```
with the following in the body
bundle - String (<product id>,<product id>,...)
price - Number
description - String
imageUrl - String

### PUT

Update a product with a PUT request using the product id set in the url

```
http://64.227.50.137:5000/products/<id>
```

With the following in the body

itemCode - String
bottleType - String
price - Number
description - String
imageUrl - String

### DELETE

To delete a product use the DELETE method on
```
http://64.227.50.137:5000/products/<id>
```
Using the product id in the url

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
