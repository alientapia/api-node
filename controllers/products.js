const {products} = require('../modelo/db');

module.exports = {

    getProducts: (req, res) => {
        res.json({products})
    },

    addProducts: (req, res) => {
        const {name} = req.body;
        products.push({
            id: products.length,
            name             
        });
        res.json({
            'success': true,
            'msg': 'successfuly added'
        });
    },
    updateProducts: (req, res) => {
        

    },
    deleteProducts: (req, res) => {
        
    }




};