const express=require('express')
const app= express()
const port=process.env.PORT || 8080

app.use(express.json())

    const insuranceRoutes=require('./routes/insurance')
    const customerRoutes=require('./routes/customer')

const mongoose=require('mongoose')
require('dotenv').config()

main()
.then (()=> console.log('Base datos Conectada'))
.catch((err)=> console.log(err  ))

async function main(){
    await mongoose.connect(process.env.DB_MONGO)
}

app.use('/api',insuranceRoutes)
app.use('/api',customerRoutes)
app.listen(port,()=>{
    console.log('app listening on port ', port)
}) 