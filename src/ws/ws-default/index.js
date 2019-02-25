let arc = require('@architect/functions'),
  data = require('@architect/data')

/**
 * append a timestamp and echo the message back to the connectionId
 */
exports.handler = async function ws(event) {

  console.log('ws-default called with', event)

  let ts = new Date(Date.now()).toISOString()
  // let connectionId = event.requestContext.connectionId
  let message = JSON.parse(event.body)
  let text = `${ts} - ${message.text}`

    let result = await data.connections.scan({});
    console.log(result)
    console.log(result.Items);
    console.log(result.Items[0]);
    console.log(result.Items[0].connectionId);
    for (let i = 0; i < result.Items.length; i++) {
        let connectionId = result.Items[i].connectionId
       console.log(connectionId);
        await arc.ws(event).send({
            id: connectionId,
            payload: {text}
        })
    }

  return {statusCode: 200}
}
