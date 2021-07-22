const router = require('express').Router();
const goodContext = require('../database/goodsContext');
const validation = require('../services/ValidateTokenService');

router.get('/getAllGoods', async (req, res, next) =>{
    try {
        if(!validation.validateToken(req.headers.content_val)) { return res.json(-1); };

        let allGoods = await goodContext.getAllGoods();

        if(allGoods==null || allGoods == undefined){ return res.json(-1); }
        
        return res.json(allGoods);
    } catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }
});

module.exports = router;