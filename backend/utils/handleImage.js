//estructuramos el manejador de archivos 
const multer = require('multer')

const storage = multer.diskStorage({
    // destination: './media',
    // destination: `${__dirname}/../media`,
    destination: (req, file, cb) => {
        const pathStorage = `${__dirname}/../media`;
        cb(null, pathStorage);
    },

    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        const filename = `file-${Date.now()}.${ext}`
        cb(null, filename)
    }
})

const uploadFile = multer({ storage })


module.exports = uploadFile