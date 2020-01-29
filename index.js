import express from 'express'
import path from 'path'
import pageRoutes from './routes/pages.route'
import bodyParser from 'body-parser'
import {getError} from './controllers/error.controller'

import {mongoConnect} from './util/database'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', pageRoutes)
app.use(getError)

//app.listen(5000)
const port = 5000

mongoConnect(() => {
    app.listen(port, () => {
        console.log(`Server is up and running on port ${port}`)
    })
})