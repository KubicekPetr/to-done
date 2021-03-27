import MongoDatabase from '../helpers/mongodb.ts';

const db = (await MongoDatabase.getInstance()).getDatabase;
const todoCollection = db.collection('todo');

const get = (context: any) => {
    console.log('Getting a todo');
    try {
        const todo = {
            title: "My Todo",
            description: "Todo description",
            createdAt: new Date(),
        };
        const response = {
            success: true,
            todo,
        };
        context.response.body = JSON.stringify(response);
    } catch (error) {
        const response = {
            success: false,
            error,
        };
        context.response.status = 500;
        context.response.body = JSON.stringify(response);
    }
};

const post = async (context: any) => {
    try {
        console.log('Adding a todo');
        const body = context.request.body();
        const data = await body.value;
        console.log(data);
        const insertId = await todoCollection.insertOne(data);
        context.response.body = JSON.stringify(insertId);
    } catch (e) {
        console.log(e);
    }
} 

export { 
    get,
    post,
};