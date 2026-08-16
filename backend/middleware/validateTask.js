const validateTask = (req, res, next) => {

    if (req.method == 'POST' && !req.body.title) {
        return res.status(400).json({ message: 'Title required'})
    }
    next();
};

module.exports = { validateTask };