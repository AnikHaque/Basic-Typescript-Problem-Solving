interface Human {
    name: string;
    age: number;
  }
  
  function getPersons(humans: Human[]): Human[] {
    return humans.filter((human) => human.age >= 18);
  }
  
  const men: Human[] = [
    { name: "Ekramul", age: 26 },
    { name: "Haque", age: 22 },
    { name: "Anik", age: 10 },
  ];
  
  const persons: Human[] = getPersons(men);
  console.log(persons);