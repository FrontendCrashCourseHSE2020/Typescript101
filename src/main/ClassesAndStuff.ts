
interface SomeInterface {
    title: string;
    id: number;
    createSomething: (someArgument: number) => void;
}

interface OtherInterface {
    key: string;
    foobar: () => number;
}

let obj: SomeInterface = {
    title: "",
    id: 1,
    createSomething: function (someArgument: number) {

    }
};

class InterfaceImplementor implements SomeInterface, OtherInterface {

    id: number;
    title: string;

    key: string;

    createSomething(someArgument: number): void {
    }

    foobar(): number {
        return 10;
    }

}

let interfaceImplementor: OtherInterface = new InterfaceImplementor();

interface Walker {
    walk: () => void;
}

interface Talker {
    talk: () => void;
}

class Human implements Walker, Talker {

    talk(): void {
    }

    walk(): void {
    }

}

class Dog implements Walker {

    walk(): void {
    }

}

let creatures: Walker[] = [];
creatures.push(new Human());
creatures.push(new Dog());

for (let i = 0; i < creatures.length; i++) {
    let creature = creatures[i];
    creature.walk();
}

interface Textual {
    text: string;
}

class Button implements Textual {
    click() {

    }

    text: string;
}

class Div implements Textual {
    text: string;

}

class Input implements Textual {
    text: string;

    enterText(text: string) {
        this.text = text;
    }
}
