
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }

    getName() {
        const name = this.lastName + this.firstName;
        return name;
    }

    say() {
        const name = this.getName();
        const text = name + ":" + this.age;
        return text; ßß
    }

}

const person = new Person("三", "张", 20);

const text = person.say();

console.log(text);


screen 