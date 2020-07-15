import express from "express"

const app = express()
const port = 8080

app.get("/", (_req, res) => {
  res.send("Hello from Revolv! " + process.env.ASSETS_CLOUDFRONT_URL + " - " + process.env.ASSETS_S3_BUCKET)
})

app.listen(port)

console.log(`Running on http://localhost:${port}`)
