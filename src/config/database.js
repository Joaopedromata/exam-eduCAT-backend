require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})

module.exports = {
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE,
    define: {
        timestamps: true
    }
}  