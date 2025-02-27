class Person {
    name: string;
    age: number;
    city: string;

    constructor(name: string, age: number, city: string) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    displayInfo(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
}


let person1 = new Person("kim", 23, "xyz");
person1.displayInfo();
