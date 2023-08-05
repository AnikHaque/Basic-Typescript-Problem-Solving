# Basic-Typescript-Problem-Solving
<h1>Question and Answers </h1>

<h2>
1. What is TypeScript, and how is it different from JavaScript?
</h2>
<p>
 Typescript basically develops javascript programming language. It simplifies and make clean and clear to a javascript code. Working on a large javascript project or application typescript can be a good choice and it can bring more robust and easily deployable comparing to javascript.
It is basically a superset of javascript. The main amazing thing in typescript is, we can specify the types of variables, function parametres, and return the values.
It is different from javascript from many sides. 

Firstly we need to compile a typescript code while in javascript it not not neccessary to compile a javascript code.

Secondly, There are some features which typescript basically supports but in javascript it is not supported. If i give an example, it is prototyping. typescript supports this feature but javascript doesn't.

Thirdly, Typescript has a very strong and poweful type system thats why it is a good choice for a large kind of application while, javascript can be a better choice for the small projects.

Fourthly,In TypeScript, you can annotate variables, function parameters, and return types with type information.It has a lot of benefits such as code readability, finding errors easily and etc while javascript doesn't have these kinds of features.
</p>

<h2>3. Can you give an example of how to use generics in TypeScript?</h2>
</h2>
<p>
 Basically Generics permit us to create reusable code so that it can work with different types in typescript. I am explaining the whole thing with an example of code. 
Here i am explaining with the third problem which was given to solve that is to reverse an array of strings. i am writing the solution of that code here: 

<br />
<br />
<img src="https://i.ibb.co/LdyHf5L/Capture.png" />
<br />
<br />
  
Here in this example i have declared a generic function which is named reverseString. Here it takes an array which type is S and it basically returns an array of the same type. Here S is a generic type parameter. So here, By using generics, we can create a single function that works with different types of arrays without explicitly specifying the type each time. This is benefitted in code reusability and type safety.
</p>

<h2>4. What is the difference between an "unknown" and "any" type in TypeScript?</h2>
<p>
There are a lot of differences between an unknown and any type in typescript. Some of them are given below:</p>
<ul>
<li> The any type basically doesn't allow the checking type of a variable. For this reason there is a heavy issue in type safety. But in unknown type, it basically provides stricter type checking. So that, we can assign this type to any other variables without any restriction and problem. </li>
<li> We can assign anything to any type but in unknown type,we have to do a type check or type assertion </li>
<li> TypeScript forces us to determine the type of the unknown value before we can work with it, but it doesn’t with the any value. </li>
<li> any ype is a good choice to find out the previous or past error but in case of unknown type, it is awsome when we don't know the type of the data that is being typed. </li>

</ul>

<h2>5. Can you give an example of how to use enums in TypeScript?</h2>

<p> Basically enums in TypeScript are a way to define a set of named constants. Here i am writing a code and trying to explain how to use enums step by step. </p>

<div>
enum Love {
  Father,
  Mother,
  Brother,
}
<br />

let myLove: Love = Love.Mother;
<br />
console.log(myLove);
<br />
if (myLove === Love.Mother) {
  console.log("I love my mother very much"); 
}

</div>

<p>
Here in the code, i assumed  an enum which is named Love. It basically represents three possible persons: Father, Mother, Brother. 
</p>
<p>
After that, i have declared a variable myLove of type Love and assign it the value Love.Mother. Now i can use this variable like other variables and do the neccessary things , steps, operations and etc on it..
</p>

<h2>6. What is the "as" keyword used for in TypeScript?</h2>
<p>
Basically in typescript, we use "as" keyword for type casting. basically "as" keyword allows us to specify the type of a value and override the default type inference. Here i am explaining with a code:
</p>
<div>
let name: unknown = "Ekramul Haque Anik";
<br />
let age: number = (name as string).age;
<br />
console.log(age);
</div>
<p>
Here in this code, i have a variable name of type unknown. This basically represents unknown type value. Here the type is unknown thats why we cannot access the age property at a time. Thats why, i have used the "as" keyword to assert that value is a string type
</p>