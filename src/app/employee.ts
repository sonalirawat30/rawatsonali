export interface IEmployee{
    id?: number,
    name: string,
    age: number
}

export class Employee implements IEmployee {
    public name;
    public age;

    constructor(name, age) {
        this.name = name,
        this.age = age;
    }
}