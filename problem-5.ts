function checkProblem(data: unknown): void {
    if (typeof data === "string") {
      console.log(data);
    } else {
      console.error("Sorry!! Your given data is invalid because it is not String....");
    }
  }

  checkProblem("Ekramul Haque Anik"); 
 
  