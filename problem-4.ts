class Person {
    constructor(private name: string, private age: number) {}
  
    getDetails(): string {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  class Student extends Person {
    constructor(name: string, age: number, private grade: string) {
      super(name, age);
    }
  
    getGrade(): string {
      return `Grade: ${this.grade}`;
    }
  }
  const person = new Person("Ekramul Haque", 26);
  console.log(person.getDetails());
  
  const student = new Student("Anik Haque", 25, "B+");
  console.log(student.getDetails()); 
  console.log(student.getGrade()); 
  