class Person { 
    constructor(name) {
        this.name = name;
    }

    walk() {
      console.log("walk");
    }   
}

const person = new Person('Bea')
person. //demonstrates what methods are availe for the new object of class person

 class Teacher extends Person {
     constructor(name, degree){
         super(name);
         this.degree = degree
     }
     teach() {
         console.log("teach");
     }
 }

 const teacher = new Teacher('Bea', "AA")