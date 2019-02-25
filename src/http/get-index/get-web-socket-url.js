/**
 * returns hardcoded web socket urls
 * (you could also move to env vars or infer from appname)
 */
module.exports = function getWS() {
  let env = process.env.NODE_ENV
  let testing = 'ws://localhost:3333'
  let staging = 'wss://mboga9fi7k.execute-api.us-west-2.amazonaws.com/staging'
  let production = 'fixme: these urls are printed after create'
  if (env === 'testing')
    return testing
  if (env === 'staging')
    return staging
  if (env === 'production')
    return production
  return testing
}
