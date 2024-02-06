const Product = require('../models/productModel')

async function getAllProduct (req, res){
    const products = await Product.find({})
    res.json({
        products
    })

}

async function createProduct(req, res){
    const data = req.body
    const newProduct = await Product.create({
        'name': req.body.name,
        'description': req.body.description,
        'price': req.body.price
    })
    res.json({
        newProduct
    })
}

async function deleteProduct(req, res){
    const id = req.params.id
    const del = await Product.deleteOne({_id: id})
    res.json({
        'msg': "Your data has been deleted"
    })
}

async function updateProduct(req, res){
    const id = req.params.id
    const updated = await Product.updateOne(
    {  _id:  id}
    ,{
        'name': req.body.name,
        'description': req.body.description,
        'price': req.body.price
    })
    res.json({
        updated
    })
}
module.exports = {getAllProduct,createProduct, deleteProduct, updateProduct}