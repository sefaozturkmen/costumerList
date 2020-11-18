export class Model {
    customers;

    constructor() {
        this.customers = [
            new TodoCustomer("Sefa Öztürkmen","sefa@gmail.com","None"),
            new TodoCustomer("Merve Öztürkmen","merve@gmail.com","Silver"),
            new TodoCustomer("mehmet ahmet","emasd@gmail.com","Bronze"),
            new TodoCustomer("Hatice Öztürkmen","hatice@gmail.com","Gold"),
        ]
    }

}

export class TodoCustomer {
    name;
    mail;
    vip;

    constructor(name, mail, vip) {
        this.name = name;
        this.mail = mail;
        this.vip = vip;
    }
}