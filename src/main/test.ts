let myVariable: string | number | any[] = "asdas";

myVariable = 1;

myVariable = [1, 2, 3];

myVariable = [1, 2, "asd", [[[""]]]];

let array: string[][][] = [[[""]]];

let someBoolean = true;

if (someBoolean) {
    let onlyVisibleInThisBlock = "hello";

    console.log("hello world");
    console.log(onlyVisibleInThisBlock);
}

// This variable is not visible outside of IF block
// console.log(onlyVisibleInThisBlock);

let a = 0;
let b = a++;
let c = ++a;

console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);

for (let i = 0; i < 10; i++) {
    console.log(`i = ${i}`);
    // is equivalent to:
    console.log("i = " + i);
}
let i = 0;

while (true) {
    if (i == 5) {
        i++;
        continue;
    }

    console.log(`i = ${i}`);

    i++;

    if (i > 10) {
        break;
    }

}

let integerArray: number[] = [];

integerArray.push(20);
integerArray.push(30);
// integerArray.push("213");

console.log(integerArray);

integerArray.splice(0, 1);

console.log(integerArray);

integerArray.push(3);

console.log(integerArray);
console.log(integerArray.slice(0, 1));
console.log(integerArray);

let dictionary = {
  "foo": "bar"
};

let weather = {
    "temperature": 20,
    "temperatureUnit": "K",
    "moisture": "75%"
};

dictionary["bar"] = "asd";
dictionary["someKey"] = "zxczxc";

let keys: string[] = Object.keys(dictionary);

for (let j = 0; j < keys.length; j++) {
    console.log(`${keys[j]} : ${dictionary[keys[j]]}`);
}

console.log(dictionary);

let human: { name: string; age: number } = {
    "name": "Ivan",
    "age": 20
}

// human.age = "asd";

function addAndPrint(argumentToPrint: number): string {
    let newValue = `${argumentToPrint + 1}`;

    console.log(newValue);

    return newValue;
}

function voidSomeFunction(arg1, arg2, arg3) {
    console.log("Doing something...");
}

let functionResult = addAndPrint(10);

console.log(`Function result = ${functionResult}`);

let someUndefVariable = null;

console.log(someUndefVariable);

voidSomeFunction(null, null, null);

function functionThrowingError(): never {
    throw new Error("Some error message");
}

try {
    functionThrowingError();
} catch (error) {
    console.log(error);
}

console.log("I'm here");

class SomeClass {

    someVariable = 1;

    constructor(constructorArgument?: number) {
        // this == self in python
        if (constructorArgument) {
            this.someVariable = constructorArgument;
        }
    }

    someMethod(argument: string): number {
        function someFun() {
            console.log("asdasd");
        }
        return 1;
    }

    // currying
    fnMethod(argument: string): (argument2: string) => string {
        return function (argument2: string) {
            return argument + argument2;
        }
    }

}

let obj: SomeClass = new SomeClass();

obj.someMethod("1");

// obj.someFun();
// someFun();

let fnMethodRes = obj.fnMethod("hello");
let res = fnMethodRes(" world");
let res1 = fnMethodRes(" ivan");

console.log(res);
console.log(res1);

class Patient {

    name: string;

    ssn: number;

    history: Order[] = [];

    constructor(name: string, ssn: number) {
        this.name = name;
        this.ssn = ssn;
    }

    createOrder(text: string) {
        let order = new Order(this, new Date(), text);
        this.history.push(order);
    }

}

class Order {

    patient: Patient;

    date: Date;

    text: string;

    constructor(patient: Patient, date: Date, text: string) {
        this.patient = patient;
        this.date = date;
        this.text = text;
    }

}

let patient = new Patient("Ivan Ivanov", 123123);

patient.createOrder("Headache");

console.log(patient.history);


