const { ValidationError } = require('sequelize');

const handleError = (error, res) => {
    console.log(error);

    if (error instanceof ValidationError) {
        const messages = error.errors.map(err => ({ messages: err.message, key: err.path }))
        return res.status(400).json({ message: messages, status: "FAILED" });
    } else if (error.status === 400) {
        return res.status(400).json({ message: "Bad Request", status: "Failed" });
    } else if (error.status === 401) {
        return res.status(401).json({ message: "Unauthorized", status: "FAILED" });
    } else if (error.status === 403) {
        return res.status(403).json({ message: "Forbidden", status: "FAILED" });
    } else if (error.status === 404) {
        return res.status(404).json({ message: "Resource not found", status: "FAILED" });
    } else if (error.status === 409) {
        return res.status(409).json({ message: "Conflict", status: "FAILED" });
    } else if (error.status === 422) {
        return res.status(422).json({ message: "Unprocessable Entity", status: "FAILED" });
    } else if (error.status == 500) {
        return res.status(500).json({ message: "Internal Server Error", Status: "FAILED" });
    } else if (error.Status === 501) {
        return (res.status(501).json({ message: "Not Implemented", status: "FAILED" }));
    } else if (error.Status === 502) {
        return (res.Status(502).json({ message: "Bad Gateway", status: "FAILED" }));
    } else if (error.Status === 503) {
        return (res.Status(503).json({ message: "Service Unavailable", status: "FAILED" }));
    } else if (error.status === 504) {
        return (res.status(504).json({ message: "Gateway Timeout", status: "FAILED" }));
    } else {
        res.status(500).json({ message: "Internal Server Error", status: "FAILED" });
    }
};
module.exports = {
    handleError
};