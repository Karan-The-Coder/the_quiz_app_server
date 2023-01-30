import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";

// for database import
import questions, { answers } from '../database/data.js';

// Get all questions
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q);
    } catch (error) {
        res.json({error})
    }
}

// Insert all questions
export async function insertQuestions(req, res){
    try {
        Questions.insertMany({ questions , answers }, function(err, data){
            res.json({ msg : "Data Saved Successfully...!"});
        })
    } catch (error) {
        res.json({error})
    }
}

// Delete all questions
export async function dropQuestions(req, res){
    try {
        await Questions.deleteMany();        
        res.json({ msg : "Questions Deleted Successfully...!"});
    } catch (error) {
        res.json({error});
    }
}

// Get all results
export async function getResults(req, res){
    try {
        const r = await Results.find();
        res.json(r);
    } catch (error) {
        res.json({error})
    }
}

// Insert all results
export async function storeResults(req, res){
    try {
       const { username, result, attempts, points, achived } = req.body;
       if(!username && !result) throw new Error('Data not Provided');

       Results.create({ username, result, attempts, points, achived }, function(err, data){
        res.json({ msg : "Results Saved Successfully...!"});
       })
    } catch (error) {
        res.json({error});
    }
}

// Delete all results
export async function dropResults(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Results Deleted Successfully...!"});
    } catch (error) {
        res.json({error});
    }   
}
