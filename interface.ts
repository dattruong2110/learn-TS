// Interface
interface Person {
    name: string
    age: number
    speak(language: string): void
    spend(amnout: number): number
}

const dat: Person = {
    name: 'Dat',
    age: 22,
    speak(lang: string): void {
        console.log(lang);
    },
    spend(amt: number): number {
        return amt;
    }
}

console.log(dat);

const helloPerson = (onePerson: Person) => console.log(`Hello ${onePerson.name}`);
helloPerson(dat);