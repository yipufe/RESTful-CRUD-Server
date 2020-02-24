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

#### GET bundle by id
```
http://64.227.50.137:5000/bundle/<id>
```
This will output a single bundle as JSON by the id provided in the url.


### POST

#### Create a Product

To create a product POST to:

```
http://64.227.50.137:5000/products
```
With the following in the body

name | Type | Example
--- | --- | ---
itemCode | String | 03441
bottleType | String | Water Bottle
price | Number | 0.99
description | String | A bottle of water
imageUrl | String | https://some.image.com/waterbottle.jpg


#### Create a bundle

to create a product bundle POST to:

```
http://64.227.50.137:5000/bundles
```
with the following in the body

name | Type | Example
--- | --- | ---
bundle | String | id,id,...
price | Number | 29.99
description | String | A collection of bottles
imageUrl | String | https://some.image.com/bundleofbottles.jpg

### PUT

Update a product with a PUT request using the product id (ex: 5e4f164c823a6632280b7894) set in the url

```
http://64.227.50.137:5000/products/<id>
```

With the following in the body

name | Type | Example
--- | --- | ---
itemCode | String | 03443
bottleType | String | Water Bottle
price | Number | 0.98
description | String | A bottle of water
imageUrl | String | https://some.image.com/waterbottle.jpg

### DELETE

To delete a product use the DELETE method on
```
http://64.227.50.137:5000/products/<id>
```
Using the product id in the url
