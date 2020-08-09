exports.handler = async (event) => {
    let response = {
        isBase64Encoded: false,
        statusCode: 400,
        body: {
            success: false,
            result: null,
            message: null
        },
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const count = event.queryStringParameters && event.queryStringParameters.count;

    const generateFizzBuzz = (count) => {
        return ([...Array(Number(count))].map((n, i) => {
            i++;
            return ((i % 15 ? '' : 'FizzBuzz') || (i % 5 ? '' : 'Buzz') || (i % 3 ? '' : 'Fizz') || i);
        }));
    };

    if ((!count)) {
        response.body.message = `count is missing in query param`;
    } else {
        if(!count.match(/^(100|[1-9][0-9]?)$/)){
            response.body.message = `count value is not correct , validation failed`;
        } else {
            response.statusCode = 200;
            response.body.success = true;
            response.body.result = {
                data: generateFizzBuzz(count)
            }
        }
    }
    
    response.body = JSON.stringify(response.body);

    return response;
};