const router = require('express').Router();
const couponsContext = require('../database/couponsContext');
const validation = require('../services/ValidateTokenService');

router.get('/getCouponByName', async (req, res, next)=>{
    try{
        if(!validation.validateToken(req.headers.content_val)) { return res.json(-1); };
        
        const couponName = req.query.coupon;

        if(couponName == null) {
            return res.json(-1);
        }

        let coupon = await couponsContext.getCouponByName(couponName);

        if(coupon == null)
            return res.json(-1);
        
        return res.json(coupon);
    }catch(e){
        console.log(e);
        return res.sendStatus(500);
    }
});

module.exports = router;