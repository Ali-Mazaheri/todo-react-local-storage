import {TodoModel} from "../models/TodoModel"
export class LocalStorageService { 

    storage = null;
    storageKey;
    constructor(storageKey) {
        this.storageKey = storageKey;
        let d = JSON.parse( localStorage.getItem(storageKey) || '{}');
        this.storage = d;
    }
    
    getAll() { 
        let data = this.storage.data;
        return (data && data.length) ? data : [new TodoModel('Add New Items')];
    }

    write(data) { 
        let d = JSON.stringify({ data: data || [] });
        localStorage.setItem(this.storageKey, d);
    }

}