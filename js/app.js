
/*
Section 1 terms:

Interpolation - feature that allows you to inject variables directly into a string.
ex:
const name = 'Snickers';
const age = 2;
const sentence = `My dog ${name} is ${age * 7} years old.'`;
console.log(sentence);


Concatenation - bining together - but a more 'frankenstein' kind of effect and can lead to
harder to read code.
ex:
var name = 'Snickers';
var age = 2;
var sentence = 'My dog ' + name + ' is ' + age * 7 + ' years old.';

DRY: "Don't Repeat Yourself"
we don't want to write code that isn't reusable.

*/

/*
# Section 2
## Boolean expressions
**... and variable assignment**

- Using the provided variable definitions, replace the blanks with mathematical or boolean operators that make the expression evaluate to `true`.
- Test your answers by using `console.log` in front of each expression in your answer file.

```
*/

  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

console.log(a != b);
console.log(c != d);
console.log('Name' === 'Name');
console.log(a != b != c);
console.log(a * a === d);
console.log(e === 'Kevin');
console.log(48 == '48');

/*
# Section 3
## While loops

is this an infinite loop? Why or why not?
```
while (true) {
	console.log('Do not run this loop');
}
```

YES THIS IS AN INFINTE LOOP
*/
console.log('Yes, this is an infinte loop');
/*
///////////////////////////////////

## Infinite loop II

* is this loop an infinite loop? Why or why not?

```
const runProgram = true;

while (runProgram) {
	console.log('Do not run this loop');
	runProgram = false;
}
```
*/
console.log('No, this is not an infinite loop because within the code block it will throw an error when the const variable is changed');


let letters = "A";
let i = 0;

while (i < 20) {
	letters += "A";
	i++;
}

console.log(letters);

console.log('The result should be 21 A s in a row because it starts at 0 and not 1');


/*
Section 4 - For loops
A for loop performs the same operation as a while loop.
 But what are the key differences, if any? What are the similarities?
*/
console.log('for loops through the properties of an object. while - loops through a block of code while a specified condition is true. do/while - loops through a block of code once, and then repeats the loop while a specified condition is true.')

// ## For loop I

// Write a for loop that will console.log the numbers 0 to 999.

for (var ii = 0; ii <= 999; ii++) {
  console.log(ii);
}

// ## For loop control statement
// Here is an example for loop that prints a message 100 times:
// ```
// for (let i=0; i < 100; i++) {
//   console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
// }
// ```
// What are the three components of the **control statement**? Each component is separated by a semicolon `;`.

// Write your answers as comments in the file.

// * The first part of the control statement is:
// * The second part of the control statement is:
// * The third part of the control statement is:

// ## For loop in reverse
// Using a postfix operator `i--` instead of `i++`, write a *for* loop that iterates in *reverse*. Console.log a countdown from 999 to 0.
for (var iii = 999; iii >= 0; iii--) {
  console.log(iii);
}

// ## More counting
// Write a *for* loop that uses **interpolation** to send a message to the console as well as the current value of `i`.
// The loop should run from 1 to 10.

for (let iiii = 1; iiii <= 10; iiii++) {
  console.log(`The value of iii is: ${iiii} of 10`);
}


///////////////////////////////////////////////
// Part 1 - Set the scene

// mkdir homework_part_2
// cd homework_part_2/
// mkdir death_star
// touch death_star/darth_vader.txt
// touch death_star/princess_leia.txt
// touch death_star/storm_trooper.txt
// mkdir galaxy_far_far_away
// mkdir galaxy_far_far_away/tatooine
// cd galaxy_far_far_away/tatooine/
// touch luke.txt ben_kenobi.txt
// cd tatooine
// mkdir millenium_falcon
// touch han_solo.txt
// touch chewbaca.txt

/////////////////////////////////////////////
// part 2 - mv - rename

// cd tatooine
// mv ben_kenobi.txt obi_wan.txt

////////////////////////////////////////////

// ## Part II (2) : cp - copy
// Copy "**storm_trooper.txt**" from "**death_star**" to "**tatooine**".

// cd death_star
// cp storm_trooper.txt galaxy_far_far_away/tatooine

///////////////////////////////////////////
// ## Part IV (4): mv - move

// 3. Move "**luke.txt**" and "**obi_wan.txt**" to the "**millenium_falcon**".

// mv obi_wan.txt millenium_falcon/
//mv luke.txt millenium_falcon/

// 4. Move "**millenium_falcon**" out of "**tatooine**" and into "**galaxy_far_far_away**".
// mv galaxy_far_far_away/tatooine/millenium_falcon/ galaxy_far_far_away/

// 5. Move "**millenium_falcon**" into "**death_star**".
//mv galaxy_far_far_away/millenium_falcon/ death_star/

// 6. Move "**princess_leia.txt**" into the "**millenium_falcon**".
//mv death_star/princess_leia.txt death_star/millenium_falcon/

///////////////////////////////
// ## Part V (5): rm - remove

// 7. Delete "**obi_wan.txt**".
//rm death_star/millenium_falcon/obi_wan.txt 


 // Part VI: all together

8. In "**galaxy_far_far_away**", make a directory called "**yavin_4**".
// mkdir yavin_4

// 9. Move the "**millenium_falcon**" out of the "**death_star**" and into "**yavin_4**".
//  mv death_star/millenium_falcon/ galaxy_far_far_away/yavin_4/

// 10. Make a directory in "**yavin_4**" called "**x_wing**".
// mkdir x_wing

//11. Move "**princess_leia.txt**" to "**yavin_4**" and "**luke.txt**" to "**x_wing**".
// mv princess_leia.txt yavin_4
// mv yavin_4/millenium_falcon/luke.txt yavin_4/x_wing/


// 1. Move the "**millenium_falcon**" and "**x_wing**" out of "**yavin_4**" and into "**galaxy_far_far_away**".
// mv yavin_4/millenium_falcon/ ../galaxy_far_far_away/
// mv yavin_4/x_wing/ ../galaxy_far_far_away/

//2. In "**death_star**", create directories for "**tie_fighter_1**", "**tie_fighter_2**" and "**tie_fighter_3**".
//mkdir tie_fighter_1
//mkdir tie_fighter_2
//mkdir tie_fighter_3

//3. Move "**darth_vader.txt**" into "**tie_fighter_1**".
// mv darth_vader.txt tie_fighter_1

//4. Make a copy of "**storm_trooper.txt**" in both "**tie_fighter_2**" and "**tie_fighter_3**".
// cp storm_trooper.txt tie_fighter_2 tie_fighter_3

//5. Move all of the "**tie_fighters**" out of the "**death_star**" and into "**galaxy_far_far_away**".
// mv tie_fighter_1 ../galaxy_far_far_away/
// mv tie_fighter_2 ../galaxy_far_far_away/
// mv tie_fighter_3 ../galaxy_far_far_away/




/////////////////////////////////////////////////////////
// ## Part VII: rm -r - remove directories
// 6. Remove "**tie_fighters**" 2 and 3.

// rm -r galaxy_far_far_away/tie_fighter_2 galaxy_far_far_away/tie_fighter_3


////////////////////////////////////////////////////////

// ## Part VIII:

// 7. Touch a file in "**x_wing**" called "**the_force.txt**".
// touch the_force.txt

// 8. Destroy the "**death_star**" and anyone inside of it.
// rm -r death_star/

// 9. Return "**x_wing**" and the "**millenium_falcon**" to "**yavin_4**".
// mv galaxy_far_far_away/millenium_falcon/ galaxy_far_far_away/yavin_4/
// mv galaxy_far_far_away/x_wing/ galaxy_far_far_away/yavin_4/









