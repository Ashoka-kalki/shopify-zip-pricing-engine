const express = require("express");



const router = express.Router();



router.post("/", (req, res) => {



    const { zipCode, productId } = req.body;



    let price;



    switch (zipCode) {



        case "75028":

            price = 1499;

            break;



        case "10001":

            price = 1699;

            break;



        case "90210":

            price = 1799;

            break;



        default:

            price = 1999;

    }



    res.json({

        success: true,

        productId,

        zipCode,

        price

    });



});



module.exports = router;



