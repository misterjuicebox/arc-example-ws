@app
test-ws

@ws
# no further config required
# client code is in /public
# serverless code is in /src/ws/*

@http
get /

@tables
connections
    connectionId *String

@static
staging mjj-example-ws-staging
production mjj-example-ws-production

