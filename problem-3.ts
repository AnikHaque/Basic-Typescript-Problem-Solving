

  function reverseString<S>(...arrays: S[]): S[] {
    return arrays.reverse();
  }
  const reversedElementArray = reverseString("Ekramul", "Haque", "Anik");
  console.log(reversedElementArray); 
  