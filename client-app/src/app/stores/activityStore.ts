import { makeAutoObservable } from "mobx";

export default class ActivityStore {
    title = 'Welcome to Reactivities';

    constructor() {
        makeAutoObservable(this)
    }

    //arrow function automatically binds so it doesn't have to be specified
    setTitle = () => {
        this.title = this.title + '!';
    }
}