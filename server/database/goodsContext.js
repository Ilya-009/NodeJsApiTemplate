const db = require('./databaseConnect');

let goods = {};

goods.getAllGoods = ()=>{

    let query = 'select ID, Name, Description, Colors, Price,'
        +' Discount, ImgUrl, ImgAlt, IsPopular'
        +' from goods;';
    
    return new Promise((resolve, reject)=>{
        db.query(query, (err, results)=>{
            if(err){ return reject(err); }
            return resolve(results);
        });
    });
    
};

module.exports = goods;