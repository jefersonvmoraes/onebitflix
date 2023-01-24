import express from "express"
import { adminJs, adminJsRouter } from "./adminjs"
import { sequelize } from "./database"
import { router } from "./routes"

const app = express()

app.use(express.static('public'))

app.use(express.json())

app.use(adminJs.options.rootPath, adminJsRouter)

app.use(router)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  sequelize.authenticate().then(()=>{
    console.log('DB connection successfuly')
  })
  console.log(`Server started seccesfuly at port ${PORT}`)
})