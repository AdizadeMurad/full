import cors from "cors"
import express from "express"
import mongoose from "mongoose"

const app = express()
const port = 3000
app.use(express.json())

app.use(cors())
const usersSchema = new mongoose.Schema({
    name: String,
    price: Number,
    title: String
});

const productModel = mongoose.model('myUsers', usersSchema);


app.get('/products',async (req, res) => {
    const product = await productModel.find()
    res.send(product)
})


app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await productModel.findById(id)
    res.send(product)
})


app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await productModel.findByIdAndDelete(id)
    res.send("Silindi")
})


app.put('/products/:id', async (req, res) => {
    const body = req.body
    const { id } = req.params
    const product = await productModel.findByIdAndUpdate(id, body)
    res.send("uptade")
})


app.post('/products', async (req, res) => {
    const body = req.body
    const product = new productModel(body)
    await product.save()
    
})




mongoose.connect('mongodb+srv://bd7xw445u:bd7xw445u@cluster0.98bgcim.mongodb.net/')
    .then(() => console.log('Connected!'));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})