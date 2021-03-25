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

export { 
    get,
};