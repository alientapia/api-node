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
        const {id} = req.params;
        const  {name} = req.body;

        products.forEach((product, i) => {
            if(product.id === Number(id))
                product.name = name;
            
        });
        res.json({
            'update': true,
            'msg': 'update successfuly'
        });
    },
    deleteProducts: (req, res) => {
        const {id} = req.params;

        products.forEach((product, i) =>{
            if(product.id === Number(id))
            products.splice(i, 1);
        });

        res.json({
            'delete': true,
            'msg': 'delete successfuly'
        });
    }




};