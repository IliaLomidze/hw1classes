// cosnt calculator = new Calculator(0)
// const res = calculator.add().multiply().divide().getResult()

// 1)
// class calc {
//     constructor(initialValue) {
//         this.result = initialValue;
//     }
//     add(value) {
//         this.result += value;
//         return this;
//     }
//     multiply(value) {
//         this.result *= value;
//         return this;
//     }
//     divide(value) {
//         this.result /= value;
//         return this;
//     }
//     getresult() {
//         return this.result;
//     }
// }

// const calculator = new calc(6);
// const result = calculator.add(5).multiply(2).divide(3).getresult()

// console.log(result);

// 2)
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height;
//     }

//     perimeter() {
//         return 2 * (this.width + this.height);
//     }

//     isSquare() {
//         return this.width === this.height;
//     }
// }

// let rectangle = new Rectangle(5, 10);
// let rectangle1 = new Rectangle(7, 7);

// console.log("Rectangle Area is:", rectangle.area());
// console.log("Rectangle Perimeter is:", rectangle.perimeter());
// console.log("Rectangle Square is:", rectangle.isSquare());

// console.log("Rectangle1 Area is:", rectangle1.area());
// console.log("Rectangle1 Perimeter is:", rectangle1.perimeter());
// console.log("Rectangle1 Square is:", rectangle1.isSquare());

// 3)
class University {
    constructor(name) {
        this.name = name;
        this.departments = [];
    }

    addDepartment(department) {
        this.departments.push(department);
    }

    removeDepartment(departmentName) {
        this.departments = this.departments.filter(department => department.name !== departmentName);
    }

    showDepartments() {
        if (this.departments.length === 0) {
            return "არ არის თავისუფალი დეპარტამენტი.";
        }

        let departmentList = this.departments.map(department => department.name);
        return departmentList.join(", ");
    }

    get departmentCount() {
        return this.departments.length;
    }
}

let university = new University("სულხან-კვერნაძის სახელობის უნივერსიტეტი");

let department1 = { name: "კომპიუტერული მეცნიერება" };
let department2 = { name: "ფსიქოლოგია" };

university.addDepartment(department1);
university.addDepartment(department2);

console.log("დეპარტამენტები:", university.showDepartments());
console.log("დეპარტამენტების რაოდენობა :", university.departmentCount);

university.removeDepartment("ფსიქოლოგია");
console.log("დეპარტამენტები წაშლის შემდეგ:", university.showDepartments());
console.log("დეპარტამენტების რაოდენობა წაშლის შემდეგ:", university.departmentCount);


// 4)
// class Animal {
//     constructor(species, sound) {
//         this.species = species;
//         this.sound = sound;
//     }

//     makeSound() {
//         console.log(this.sound);
//     }
// }

// class Dog extends Animal {
//     constructor() {
        
//         super("ძაღლი", "woof");
//     }

   
//     makeSound() {
//         console.log("ძაღლი იძახის: woof");
//     }
// }


// let genericAnimal = new Animal("ზოგადი სახეობა", "ზოგადი ხმა");
// genericAnimal.makeSound();  


// let myDog = new Dog();
// myDog.makeSound();  
