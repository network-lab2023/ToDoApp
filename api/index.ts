import express, { Application, Request, Response } from 'express'

const app: Application = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api/v1/sample', async (_req: Request, res: Response) => {
    return res.status(200).send({
        message: 'Hello World!',
    })
})

app.listen(PORT, () => {
    console.log(`running: http://localhost:${PORT}/`)
})

