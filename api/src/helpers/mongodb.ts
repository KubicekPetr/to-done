import { Bson, MongoClient } from "../../deps.ts";

class MongoDatabase {
    public client: MongoClient;

    constructor(private dbName: string, private url: string) {
        console.log('Connecting to mongo on ', url);
        // this.dbName = dbName;
        // this.url = url;
        this.client = {} as MongoClient;
    }

    async connect() {
        this.client = new MongoClient();
        await this.client.connect(this.url);
    }

    get getDatabase() {
        return this.client.database(this.dbName);
    }
}

export default MongoDatabase;