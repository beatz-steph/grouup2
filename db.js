import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config();

const URI = "mongodb+srv://zhemi:norman@cluster0.i23uq.mongodb.net/norman?retryWrites=true&w=majority"

const options = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
}

const ConnectDB = async () => {
    await mongoose.connect(URI, options);
    console.log('Db connected.....')
}

export default ConnectDB;