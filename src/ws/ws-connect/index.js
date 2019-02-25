let data = require('@architect/data');
    /**
 * notes:
 * - verify event.headers.Origin to enforce same-origin
 * - non 200 response will disconnect the client socket
 */
exports.handler = async function ws(event) {
  console.log('ws-connect called with', event)
    console.log(event.requestContext.connectionId);
    let connection = {connectionId : event.requestContext.connectionId};

    await data.connections.put(connection)
  return {statusCode: 200}
}
