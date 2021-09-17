import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const WordSchema = new Schema({
    Animals : {type: String},
    Description: {
        type: String
    },

})

const Word = mongoose.model('Word', WordSchema);

export default Word;