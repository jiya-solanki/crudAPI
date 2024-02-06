const {getAllProduct, createProduct, deleteProduct, updateProduct} = require('../controllers/productController')
const express = require('express')
const router = express.Router()

router.get('/', getAllProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json({
        msg:"new"
    })
})
module.exports = router