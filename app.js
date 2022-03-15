import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.json({ message: "Hello from express!"})
})

app.listen(port, () => {
    console.log(`spp is up and running on ${port}`)
})