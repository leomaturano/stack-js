function getUri(serverType) {
    const hostName = 'cluster0-tfdbv.mongodb.net';
    const portNumber = 2717;
    const localPreString = 'mongodb';
    const srvPreString = 'mongodb+srv';
    const userName = 'stackjs';
    const userPass = process.env.passw;
    const dbName = 'gonodemodulo03';

    let uri;

    switch (serverType) {
        case 'atlas':
            uri = `${srvPreString}://${userName}:${userPass}@${hostName}/${dbName}?retryWrites=true&w=majority`;
            break;

        case 'localhost':
            uri = `${localPreString}://localhost:${portNumber}/${dbName}`;
            break;

        default:
            uri = 'mongodb://localhost:27017/test';
            break;
    }
    console.log(__filename, 'uri for connection', uri);
    return uri;
}

// mongodb+srv://<username>:<password>@cluster0-tfdbv.mongodb.net/test?retryWrites=true&w=majority
// mongodb://<username>:<password>@<hostname>:<portnumber>/<databasename>
// mongodb://localhost:27017/gonode03

module.exports = { uriMongo: getUri('atlas') };
