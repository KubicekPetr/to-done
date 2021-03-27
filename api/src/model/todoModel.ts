interface ITodo {
    name: string;
    title: string;
    description?: string;
    done: boolean;
    color?: string;
    endAt?: Date;
    createdAt: Date;
    updatedAt?: Date;
}