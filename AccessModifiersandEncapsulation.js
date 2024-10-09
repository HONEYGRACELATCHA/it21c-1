class Person {

    //Private Fields
    #name;
    #age;
    #gender;
    #hobby;

    constructor(name, age, hobby) {
        this.#name = name;
        this.#age = age;
        this.#hobby = hobby;
    }
    //Getters
    get name() {
        return this.#name;
    }

    get age() {
        return this.#age;
    }

    get hobby() {
        return this.#hobby;
    }
}

