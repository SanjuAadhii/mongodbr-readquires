// 1.) Find all information about the product
db.product.find();
// 2.) Find the product price which are between 400 and 800
db.product.find({price:{$gte:400,$lte:800}})
// 3.) Find the product price which are not between 400 and 600
db.product.find({price:{$lte:400,$gte:600}})
// 4.) List four product grater that 500 in price
db.product.find({price:{$gte:600}}).limit(4)
// 5.) Find product name and product material of each product
db.product.find({},{ "product_name": 1,  "product_material":1},{})
// 6.) Find the row id of 10
db.product.find({id:10})
// 7.) Find only product name and product material of each product
db.product.find({},{"_id":0, "product_name": 1,  "product_material":1},{})
// 8.) Find all the product the contains soft
db.product.find({$regex:"soft"})
// 9.) Find all the product the color indigo and price 492.00
db.product.find({color:"indigo",price:492.00})
// 10.) Delete product price value are 28
db.product.deleteMany({price:28})