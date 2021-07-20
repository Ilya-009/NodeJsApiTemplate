// const express = require('express');
require('dotenv').config();

const validation = {};
// in client save header as 'content_val' or 'content_'

validation.validateToken = (token)=>{
    if(token=='' || token == undefined || token == null){
        return false;
    }
    
    let correctToken = process.env.authToken;
    let handledRes = token.trim().replace(/\s+/g, '').replace(/\,/g, '');

    return handledRes === correctToken;
};

module.exports = validation;