const express = require('express');
const router = express.Router();
const Claim = require('./Models')

const getClaimById = async (req, res) => {
    const userClaim = await Claim.findById(req.params.id);
    res.status(200).json({ userClaim });
}

const postClaim = async (req, res) => {
    const { name, hospital, address, phone, age, status } = req.body;
    if (!name || !hospital || !address || !phone || !age || !status) {
        res.status(400)
        throw new Error('Please add all fields')
    }
    const claim = await Claim.create({
        name,
        hospital,
        address,
        phone,
        age,
        author,
        distance,
        status,
    });
    res.status(200).json(claim);
};

const policy = async (req, res) => {
    const postpolicy = await policy.create(req.body)
    res.status(200).json({ postpolicy });
};


const getAllClaims = async (req, res) => {
    const { id } = req.params;
    const policy = await policy.findById(id);
    const claims = policy?.claims ?? [];
    res.status(200).json({ claims });
}

const updateClaim = async (req, res) => {
    const claim = await Claim.findOneAndUpdate(req.body);
    res.status(200).json({ claim })
}
const deleteClaim = async (req, res) => {
    const delClaim = await Claim.findOneAndDelete(req.params.id);
    res.send("claim is deleted");
}

router.get('/:id', getClaimById); // Get an claim by claim id  
router.post('/', postClaim) // Create a new claim
router.post('/post', policy); //Create a new policy 
router.get('/policy/:id', getAllClaims); //Get all claims for given policy id  
router.put('/', updateClaim); //Update the claim status  
router.delete('/:id', deleteClaim); //Delete a claim by claim id 
module.exports = router
