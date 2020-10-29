const app = require('./server')

const PORT = process.env.PORT || 3333

app.listen(PORT, () => {
    console.log('The server is running on https://localhost:3333')
})