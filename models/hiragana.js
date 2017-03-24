import mongoose from 'mongoose';

//hiragana schema
let hiraganaSchema = mongoose.Schema({
    character:{
        type: String,
        required: true
    },
    romaji:{
        type: String,
        required: true
    }
}, {collection:'hiragana'});

let Hiragana = mongoose.model('Hiragana', hiraganaSchema);

export default Hiragana;