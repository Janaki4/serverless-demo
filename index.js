module.exports.handler = async (event) => {
  setTimeout(() => {
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: 'Go Serverless v3.0! Your function executed successfully!',
          input: event,
        },
        null,
        2
      ),
    };
  }, 10000)

};
