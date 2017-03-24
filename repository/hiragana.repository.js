import Hiragana from '../models/hiragana.js';

export function getHiragana(callback, limit){
    Hiragana.find(callback).limit(limit);
}