import { Bson, MongoClient } from "../../deps.ts";

class MongoDatabase {
    public client: MongoClient;

    constructor(private dbName: string, private url: string) {
        console.log('Connecting to mongo');
        // this.dbName = dbName;
        // this.url = url;
        this.client = {} as MongoClient;
    }

    connect() {
        this.client = new MongoClient();
        this.client.connect(this.url);
    }

    get getDatabase() {
        return this.client.database(this.dbName);
    }
}

export default MongoDatabase;