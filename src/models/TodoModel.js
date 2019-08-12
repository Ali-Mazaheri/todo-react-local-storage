export class TodoModel { 
    constructor(title) { 
        this.title = title;
        this.id = Math.random();
    }
    id;
    title;
    completed = false;
}