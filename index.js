const express = require('express');
const app = express();
const goodRoutes = require('./server/api/goodRoute');
const couponRoutes = require('./server/api/couponsRoute');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, content_val");
    next();
});

app.use(express.json());

app.use('/goods', goodRoutes);
app.use('/coupons', couponRoutes);

app.listen(8080, ()=>{
    console.log('server started');
});