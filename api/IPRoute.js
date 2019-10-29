/**
 * @module IPRoute
 * @requires express
 * IPRoute router acts on "/ip" baseURL
 */

/**
 * @const express
 */
const express = require('express')

/**
 * @const ipRouter
 */
const router = express.Router()

const IPModel = require('../models/IPModel')
const IPService = new (require('../services/IPService'))(IPModel)

/**
 * POST request to /ip/ban
 * @name GET/ip/ban
 * @function
 * @memberof module:IPRoute
 */
router.post('/ban', (req,res) => {
    const address = req.body.address
    const reason = req.body.reason

    IPService.banAddress(address,reason).then((result) => {
        res.send({success:true, message:result})
    }).catch ((e) => {
        res.send({success:false, error:e})
    })
})

/**
 * POST request to /ip/unban
 * @name GET/ip/unban
 * @function
 * @memberof module:IPRoute
 */
router.post('/unban', (req,res) => {
    const address = req.body.address

        IPService.unbanAddress(address).then((result) => {
            res.send({success:true, message:result})
        }).catch((e) => {
            res.send({success:false, error:e})
        })
})

module.exports = router;