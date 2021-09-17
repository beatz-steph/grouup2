import express from 'express';
import Word from './Word.js'
const router = express.Router();


router.get('/animal', async (req, res) => {
    const result = await Word.findOne({ Animals: req.query.Animals })
    if (!result) {
        return res.status(400).json({
            message: "error"
        })
    } else {
        return res.status(200).json({
            success: true,
            data: result,
        })
    }
});

export default router

