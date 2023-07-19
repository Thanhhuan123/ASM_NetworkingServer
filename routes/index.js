var express = require('express');
var router = express.Router();
const nhanvien = require('../model/nhanVien')

router.get('/', async (req, res) => {
    await nhanvien.find({}).then((nhanvien) => {
        res.render('home', { layout: 'index', nhanvien: nhanvien });
    })
})
router.get('/search/:name', async (req, res) => {
    await nhanvien.find({ tenNv: req.params.name }).then((nhanvien) => {
        res.render('home', { layout: 'index', nhanvien: nhanvien });
    })
})
module.exports = router;
