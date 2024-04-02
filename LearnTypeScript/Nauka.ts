// ABY ODPALIĆ TRZEBA WPISAĆ ts-node Nauka.ts

//NOTE - W tym pliku znajdują się wszelkie niedogodne zagadnienia z typescript w celu nauki podanego języka
let obj: {name:string} & {age:number} ={
    name:"Daniel",
    age:18
}
let unionObj: null | {name:string} = null;
unionObj = {name:"TEST"}
console.log(unionObj.name)
console.log(obj);

//NOTE - Typy Literałowe
let literal: "Tomek" | "Linda" | "Jarek" | "Sylwia" = "Linda";

literal = "Sylwia";
console.log(literal)

//NOTE - Nazwy zastępcze typów (aliasy)

type Points = 20 | 30 | 40 | 50;
let score:Points = 20;

type ComplexPreson = {
    name:string,
    age:number,
    birthday:Date,
    married:boolean,
    address:string
}
let person: ComplexPreson ={
    name:"test",
    age:52,
    birthday:new Date(),
    married:true,
    address:"TEST"
}
console.log(person)

//NOTE - Typy wyników funkcji
const runMore = (distance:number) :number =>{
return distance + 10;
}
const eat = (calories:number) =>{
    console.log(`Zjadłem ${calories} kalorii`)
}
const sleepIn = (hours:number) =>{
    console.log(`Spałem ${hours} godzin`)
}
let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
//NOTE - Funkcje jako typy
type Run = (miles:number) => boolean;
let runner: Run = (miles:number):boolean =>{
    if(miles > 10){
        return true;
    }
    return false;
}
console.log(runner(9))
//NOTE - Typ never
const oldEnough = (age:number) : never | boolean =>{
    if(age > 59){
        throw new Error("Jesteś za stary")
    }else if(age <= 18){
        return false;
    }
    return true;
}
console.log(oldEnough(19))

//SECTION - Klasy i Interfejsy

//NOTE - Klasy
/*
class Person{
    constructor(){}
    msg:string;
    speak(){
        console.log(this.msg);
    }
}
const tom = new Person()
tom.msg = "cześć";
tom.speak()
*/
//NOTE - Modyfikatory dostępu
/*class Person2{
    constructor(private readonly msg:string){}
    speak(){
        //this.msg = `mówię: ${this.msg};
        console.log(this.msg);
    }
}*/

//NOTE - Akcesory get i set
/*class Speaker{
    private message:string;
    constructor(private name:string){}
    get Message(){
        if(!this.message.includes(this.name)){
            throw new Error("W komunikacie brakuje imienia mówcy");
        }
        return this.message;
    }
    set Message(val:string){
        let tmpMessage = val;
        if(!val.includes(this.name)){
            tmpMessage = `${this.name} ${val}`
        }
        this.message = tmpMessage;
    }
}
const speaker = new Speaker("Janek");
speaker.Message = "Cześć"
console.log(speaker.Message);
*/


//!SECTION - Klasy i Interfejsy
//SECTION Dziedziczenie
namespace AbsctractNamespace{
    abstract class Vehicle{
        constructor(protected wheelCount:Number){}
        abstract updateWheelCOunt(newWheelCount:number) : void;
        showNumberOfWheels(){
            console.log(`Liczba kół w pojeździe: ${this.wheelCount}`)
        }
    }
class Motorcycle extends Vehicle{
    constructor(){
        super(2)
    }
    updateWheelCOunt(newWheelCount: number): void {
        this.wheelCount = newWheelCount;
        console.log(`Motocykl ma ${this.wheelCount} koła`)
    }
}
class Automobile extends Vehicle{
    constructor(){
        super(4)
    }
    updateWheelCOunt(newWheelCount: number): void {
        this.wheelCount = newWheelCount;
        console.log(`Motocykl ma ${this.wheelCount} koła`)
    }
    showNumberOfWheels(){
        console.log(`Liczba kół w pojeździe: ${this.wheelCount}`)
    }
}
const motorCycle = new Motorcycle()
motorCycle.showNumberOfWheels();
const automobile = new Automobile()
automobile.showNumberOfWheels()
}


//!SECTION Dziedziczenie

//SECTION - Interfejsy
/*
namespace InterfaceNamespace{
    interface Thing{
        name:string;
        getFullName: () => string;
    }
    interface Vehicle extends Thing{
        wheelCount:number;
        updateWheelCount: (newWheelCount:number) => void
        showNumberOfWheels: () => void
    }
class Motorcycle implements Vehicle{
    name: string;
    wheelCount: number;
    constructor(name:string){
        this.name = name;
    }
    updateWheelCount(newWheelCount:number){
        this.wheelCount = newWheelCount;
        console.log(`Pojazd ma ${this.wheelCount} kół`) 
    }
    showNumberOfWheels(){
        console.log(`Liczba kół w pojeździe ${this.wheelCount}`);
    }
    getFullName(){
        return "MC-" + this.name 
    }
}
const moto = new Motorcycle("moto-dla-początkujących")
console.log(moto.getFullName())
}
*/
//!SECTION - Interfejsy

//SECTION - Typy generyczne
// function getLength<T>(arg:T) : number{
//     if(arg.hasOwnProperty("length")){
//         return arg["length"]
//     }
//     return 0;
// }
interface HasLength{
    length:number;
}
function getLength<T extends HasLength>(arg:T):number{
    return arg.length;
}
//console.log(getLength<number>(22)); musi posiadać właściwośc length
console.log(getLength("Witaj w świecie"))
namespace GenericNamespace{
    interface Wheels{
        count:number;
        diameter:number;
    }
    interface  Vehicle<T>{
        getName():string;
        getWheelCount: () => T;
    }
    class Automobile implements Vehicle<Wheels> {
        constructor(private name :string, private wheels: Wheels){}
        getName(): string {
            return this.name;
        }
        getWheelCount():Wheels {
            return this.wheels;
        };
    }
    class Cheavy extends Automobile{
        constructor(){
            super("Cheavy",{count:4,diameter:18})
        }
    }
    const chevy = new Cheavy()
    console.log(`Nazwa auta: ${chevy.getName()}`)
    console.log(`Informacje okołach: ${chevy.getWheelCount()}`)
}
//!SECTION - Typy Generyczne