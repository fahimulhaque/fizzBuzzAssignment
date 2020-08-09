module.exports.validateQuery = (fields) => {
    return (req, res, next) => {
        for (const field of fields) {
            if ((!req.query[field.name])) {
                return res
                    .status(400)
                    .send({
                        success: false,
                        result: null,
                        message: `${field.name} is missing in query param`
                    });
            } else {
                if(!req.query[field.name].match(field.regexValidation))
                {
                    return res
                    .status(400)
                    .send({
                        success: false,
                        result: null,
                        message: `${field.name} value is not correct , validation failed`
                    });

                }
            }
        }
        next();
    };
}