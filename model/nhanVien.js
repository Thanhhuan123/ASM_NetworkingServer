const mongoose = require('mongoose');
const nhanVienSchema = new mongoose.Schema({
    maNv: { type: String,},
    tenNv: {type: String,},
    image: {
        data: String,
        contentType: String
    },
    diemTb:{type:Number,}
});
const nhanvien = new mongoose.model('nhanvien', nhanVienSchema);
module.exports = nhanvien;