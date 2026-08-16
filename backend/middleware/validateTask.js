const validateTask = (req, res, next) => {

    if (req.method == 'POST' && !req.body.title) {
        return res.status(400).json({ message: 'Title required'})
    }


    if (req.body.priority) {
        const p = req.body.priority.toLowerCase();
        if (!['low', 'medium', 'high'].includes(p)) {
            return res.status(400).json({ message: "Priority must be: low or medium or high "});
        }
    }

    next();
};

module.exports = { validateTask };