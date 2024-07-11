const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config()

const authMiddleWare = (req, res, next) => {
    const authHeader = req.headers.token;
    if (!authHeader) {
        return res.status(401).json({ message: 'Authentication token is missing', status: 'ERROR' });
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token', status: 'ERROR' });
        }
        if (user?.isAdmin) {
            next();
        } else {
            return res.status(403).json({ message: 'Insufficient permissions', status: 'ERROR' });
        }
    });
};

const authUserMiddleWare = (req, res, next) => {
    const authHeader = req.headers.token;
    if (!authHeader) {
        return res.status(401).json({ message: 'Authentication token is missing', status: 'ERROR' });
    }
    const token = authHeader.split(' ')[1];
    const userId = req.params.id;
    jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token', status: 'ERROR' });
        }
        if (user?.isAdmin || user?.id === userId) {
            next();
        } else {
            return res.status(403).json({ message: 'Insufficient permissions', status: 'ERROR' });
        }
    });
};



module.exports = {
    authMiddleWare,
    authUserMiddleWare
}