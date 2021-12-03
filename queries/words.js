const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
300
const JSX = mongoose.model('JSX', new mongoose.Schema({}), 'JSX');
const CPP = mongoose.model('CPP', new mongoose.Schema({}), 'CPP');
const PY = mongoose.model('PY', new mongoose.Schema({}), 'PY');
const JS = mongoose.model('JS', new mongoose.Schema({}), 'JS');

const getLang = async lang => {
    if(lang === 'React.js') {
        try {
            return await JSX.aggregate([{'$sample': {size: 300}}]);
        }
        catch (err) {
            return console.error('Could not get words from MongoDB');
        }
    }

    if(lang === 'Python') {
        try {
            return await PY.aggregate([{'$sample': {size: 300}}]);
        }
        catch (err) {
            return console.error('Could not get words from MongoDB');
        }
    }

    if(lang === 'C++') {
        try {
            return await CPP.aggregate([{'$sample': {size: 300}}]);
        }
        catch (err) {
            return console.error('Could not get words from MongoDB');
        }
    }
    
    if(lang === 'JavaScript') {
        try {
            return await JS.aggregate([{'$sample': {size: 300}}]);
        }
        catch (err) {
            return console.error('Could not get words from MongoDB');
        }
    }

}


router.get('/:lang', async (req, res) => {

    const wordList = await getLang(req.params.lang);
   
    let results = [];
    for(let i = 0; i < wordList.length; i++) {
        results.push(wordList[i].word);
    }

    res.status(200).json(
        results
    ); 
}) 

module.exports = router;