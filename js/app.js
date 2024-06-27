"use strict";
// create tsconfig.json file:
// tsc --init
// let userName: string = 'Alyssa';
// let thisMode: string = 'Training';
// const user = {
//     firstName: 'Alyssa',
//     lastName: 'Glasco',
//     mode: "Training",
// }
// let test: string = `Hello ${user.firstName}! You're in ${user.mode} Mode!`;
// console.log(test);
// let movieTitle: string = 'A New Hope';
// movieTitle = 'The Empire Strikes Back';
// console.log(`Movie Type: ${movieTitle}`);
//  ======================================================= *
//      Module 3: Understanding Basic Syntax and Data Types
//  ======================================================= *
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//      ~:: Union Types & Null/Undefined Values ::~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let stringIntUnion: number | string; //union of number and strint type
// stringIntUnion = 42;
// stringIntUnion = 'String Value';
// // stringIntUnion = true; <- Can't do this
// let nullableString: string | null;
// nullableString = null;
// let undefinableString: string | undefined;
// undefinableString = undefined;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                   ~:: Arrays ::~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let strArray: string[] = ['here', 'are', 'strings'];
// let strArray2: Array<string> = ['more', 'strings', 'here'];
// let boolArray: boolean[] = [true, false, true, true];
// let numArray: number[] = [10, 12, 13, 99];
// [ NOTE: declaring the type as 'any' will allow any type within the array -- this is not the way! ]
// let anyArray: any[] = [42, 'life', 'universe', 8, 'everything'];
// [ NOTE: you can do a union on arrays! ]
// let unionArray: (string | number)[] = [42, 'life', 10, 'universe'];
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//          ~:: Controlling Program Flow ::~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// [ FOR LOOPS: ]
// for (let i=1; i<=10; i++)
// {
//     if (i % 2 == 0){ //if is a denominator of 0; modulo operator!
//         console.log(`${i} - even`);
//     } else {
//         console.log(`${i} - odd`);
//     }
// }
// [ WHILE LOOPS: ]
// let i: number = 1;
// while(i <= 10){
//     if(i = 10) console.log(`This loop has run ${i} times`);
//     i++;
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//              Switch Statement (case)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let fruit: string = 'orange';
// switch(fruit) {
//     case 'orange':
//         console.log('Orange you glad to see me?');
//         break;
//     case 'apple':
//         console.log('An apple a day keeps the doctor away!');
//         break;
//     default:
//         console.log('We weren\'t prepared for this outlier');
// }
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//          ~:: Control Flow Type Analysis ::~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function GetReview(title: string): string | number {
//     if (title === 'A New Hope') {
//         return 'An instant classic!';
//     } else {
//         return Math.floor(Math.random() * 10);
//     }
// }
// const movieTitle: string = 'A New Hope';
// let movieReview: string | number = GetReview(movieTitle);
// console.log(`Movie Title: ${movieTitle}`);
// if (typeof (movieReview) == 'string') {
//     console.log(`Review: ${movieReview}`);
// } else if (typeof (movieReview) == 'number') {
//     console.log(`Rating: ${movieReview}/10`);
// } else {
//     console.log(`Something strange occurred!`)
// }
//  ======================================================= *
//      Module 4: Creating and Calling Functions
//  ======================================================= *
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     ~:: Optional, Default, & Rest Parameters ::~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function writeMessage(score: number, message: string, name?: string): string {
//     // optional parameters denoted with "?" after parameter name
//     // must appear after all required parameters
//     let response = `${message}: You have a score of ${score}!`;
//     return response;
// }
// function defaultTitle(title: string = 'System Message') {
//     // default parameters may be set to a literal value or an expression
//     return title;
// }
// function funFunc(response: string = writeMessage(10, defaultTitle())) {
//     // you may call a function to populate an input with its default value
//     console.log(response);
// }
// funFunc(); //default parameters
// funFunc('test'); // override test
// [ REST PARAMETERS / SPREAD OPERATOR]
// give you a mechanism for passing a variable number of optional paramters; rest of the parameters the function expects
// function GetBooksReadForCust(name: string, ...bookIDs: number[]){
//     // gives a variable amount of book Ids in the number array
//     // utilizes the rest paramter [...]
//     console.log(`User: ${name} Checked Out Titles: ${bookIDs}`)
// }
// GetBooksReadForCust('Talim', 112, 426, 178);
// function GetReview(title: string): string | number {
//     if (title == 'A New Hope') {
//         return 'An instant classic!'
//     } else {
//         return Math.floor(Math.random() * 10);
//     }
// }
// function PrintMovieInfo(title: string, yearReleased?: number, ...cast: string[]){
//     console.log(`Title: ${title}`);
//     if(yearReleased){
//         console.log(`Year Released: ${yearReleased}`);
//     }
//     for(const name of cast){
//         console.log(`   ${name}`)
//     }
// }
// PrintMovieInfo('A New Hope', 1977, 'Carrie', 'Mark', 'Harrison');
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     ~:: Anatomy of Arrow Function ::~
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function square(input) {
    let squareIt = (input) => input * input;
    let result = squareIt(2);
    console.log(`Square Result: ${result}`);
}
function adder(a, b) {
    let adder = (a, b) => a + b;
    let result = adder(a, b);
    console.log(`Adder Result: ${result}`);
}
let greeting = () => console.log('Arrow Functions Are Fun!');
greeting();
square(4);
adder(2, 5);
// interface Movie {
//     title: string;
//     score: number;
// }
// function partitionMoviesByScore(movies: Movie[]): { highScores: Movie[]; lowScores: Movie[] } {
//     const highScoreMovies = movies.filter(movie => movie.score >= 7);
//     const lowScoreMovies = movies.filter(movie => movie.score < 7);
//     console.log('HighScores: ', highScoreMovies);
//     highScoreMovies.forEach(movie => console.log(movie));
//     console.log('LowScores: ', lowScoreMovies);
//     lowScoreMovies.forEach(movie => console.log(movie));
//     return { highScores: highScoreMovies, lowScores: lowScoreMovies };
// }
// partitionMoviesByScore([{title: 'Titanic', score: 10}, {title: 'Night at the Roxbury', score: 3}]);
