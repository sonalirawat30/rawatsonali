export interface IGit{
    id?: number,
    name: string,
    email: string,
    gender: string,
    status: string,
}

export class Git implements IGit {
    public id;
    public name;
    public email;
    public gender;
    public status;

    constructor(id,name, email,gender,status) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.gender = gender,
        this.status = status;
    }
}