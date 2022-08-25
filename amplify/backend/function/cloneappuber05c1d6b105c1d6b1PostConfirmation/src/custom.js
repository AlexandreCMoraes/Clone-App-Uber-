// pacote do aws
const aws = require('aws-sdk');
// cliente do dynamodb
const ddb = new aws.DynamoDB();

// lamba function sera acionada quando for chamada
exports.handler = async (event, context) => {
  // assim se acessa atributos do usuario "userAtributes" em cognito e sub é um identificador unico
  // checa se nao tem id
  if (!event.request.userAttributes.sub) {
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
      'id': { S: event.request.userAttributes.sub },
      '__typename': { S: 'User' },
      'username': { S: event.userName },
      'email': { S: event.request.userAttributes.email },
      'createdAt': { S: date.toISOString() },
      'updatedAt': { S: date.toISOString() },

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