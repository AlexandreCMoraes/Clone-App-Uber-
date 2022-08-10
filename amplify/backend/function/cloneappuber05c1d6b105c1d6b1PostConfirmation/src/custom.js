// /**
//  * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
//  */
// exports.handler = async (event, context) => {
//   // insert code to be executed by your lambda trigger
//   return event
// };

// pacote do aws
const aws = require('aws');
// cliente do dynamodb
const ddb = new was.DynamoDB();

// lamba function sera acionada quando for chamada
exports.handler = async (event, context) => {
  // assim se acessa atributos do usuario "userAtributes" em cognito e sub é um identificador unico
  // checa se nao tem im id
  if (!event.request.userAtributes.sub) {
    console.log("Error: No user was written in DynamoDB")
    // depois que terminar a lambda function, volta ao cognito
    context.done(null, event)
    return;
  }

  // Salvar o usuario no DynamoDB
  const date = new Date();
  const params = {
    Item: {
      // salvar como id. objeto com valor String 'S'
      'id': { S: event.request.userAtributes.sub },
      '__typename': { S: 'User' },
      'username': { S: event.userName },
      'email': { S: event.request.userAtributes.email },
      'createdAt': { S: event.toISOString() },
      'updatedAt': { S: event.toISOString() },

    },
    TableName: process.env.USERTABLE,
  }

  try {
    await ddb.putItem(params).promise();
    console.log("Sucesso")
  } catch (e) {
    console.log("Error", e)
  }

  context.done(null, event);
}