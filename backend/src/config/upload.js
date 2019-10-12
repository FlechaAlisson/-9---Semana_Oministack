const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads' ),
        //resolve serve pra trocar as barras por virgula
        filename: (req, file, callback) => {
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname);
            callback(null, `${name}-${Date.now()}${ext}`)
        }
    }),
}