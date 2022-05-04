const express = require('express')
const router = express.Router()

const PATIENT = require('../../models/patient')

router.route('/').get(async (req, res) => {
    try {
        const { id, blood } = req.query
        const isExists = (id && (await PATIENT.exists({ id }))) || (blood && (await PATIENT.exists({ blood })))
        return res.status(200).json(Boolean(isExists))
    } catch (e) {
        return res.status(500).json({ message: e.message })
    }
})

module.exports = router
