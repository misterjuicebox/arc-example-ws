let data = require('@architect/data');

    /**
 * used to clean up event.requestContext.connectionId
 */
exports.handler = async function ws(event) {
  console.log('ws-disconnect called with', event)
    console.log(event.requestContext.connectionId);
    let connection = {connectionId : event.requestContext.connectionId};

    await data.connections.delete(connection)
  return {statusCode: 200}
}
