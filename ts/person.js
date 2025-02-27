var Person = /** @class */ (function () {
    function Person(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    Person.prototype.displayInfo = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", City: ").concat(this.city));
    };
    return Person;
}());
var person1 = new Person("kim", 23, "xyz");
person1.displayInfo();
