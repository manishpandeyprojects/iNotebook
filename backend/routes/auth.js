const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        name: "sdbdjv",
        number: 54, 
    }
    res.json(obj);
})

module.exports = router;