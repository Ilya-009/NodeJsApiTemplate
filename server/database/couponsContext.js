const db = require('./databaseConnect');

let coupons = {};

coupons.getCouponByName = coupon =>{
    let query = `select ID, Coupon, isActive from coupons where Coupon = ${coupon}`;

    return new Promise((resolve, reject) => {
        db.query(query, (err, result)=>{
            if(err){
                return reject(err);
            }

            return resolve(result);
        });
    });
};

module.exports = coupons;