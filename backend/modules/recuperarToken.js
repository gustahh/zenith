const jwt = require('jsonwebtoken');

function RecuperarToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: 'Token não fornecido' });
    }

    try {
        const secret = process.env.SECRET;
        const decoded = jwt.verify(token, secret);

        req.user = decoded; // Attach decoded token to request object
        req.token = token;  // Attach the token to request object

        console.log(token);

        next(); // Pass control to the next middleware or route handler
    } catch (error) {
        res.status(400).json({ msg: 'Token inválido' });
    }
}

module.exports = RecuperarToken;