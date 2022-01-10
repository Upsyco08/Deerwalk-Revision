// JS revision
// Task 1
// function largest(a, b) {
//     if (a > b) return a;
//     else return b;
//     // return a>b ? a:b;
// }
// const largestNo = largest(100, 50);
// console.log(largestNo);

// Task 2
// function sorting(arr) {
//     ascendingArr = arr.sort();
//     descendingArr = arr.reverse();
//     return descendingArr;
//     // return either postivie or negative number
//     // return a > b ? -1 : 1 ;
// }
// const answer = sorting([-1, 4, 0, 8, 2]);
// console.log(answer);

// Task 3
// for (let i = 0; i < 16; i++) {
//     if ((i % 2) == 0)
//         console.log(i + " is even");
//     else
//         console.log(i + " is odd");
// }

// Task 4
// let students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
// const len = students.length;
// let sum = 0;
// for (let i = 0; i < len; i++) {
//     sum += students[i][1];
// }
// // let sum =  student.reduce((acc,val)=>{
// //          return acc+val[1];    
// //}, 0);
// avg = sum / len;
// console.log('Grade:')
// if (avg < 60) console.log('F');
// else if (avg < 70) console.log('D');
// else if (avg < 80) console.log('C');
// else if (avg < 90) console.log('B');
// else if (avg < 100) console.log('A');
// else console.log('Error occured');

// Task 5
// let library = [
//     { author: "Bill Gates", title: "The Road Ahead", libraryID: 1234 },
//     { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 5678 },
//     { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245 },
// ];
// function aSorting(a, b) {
//     titleA = a.title.toLowerCase();
//     titleB = b.title.toLowerCase();
//     return titleA > titleB ? -1 : 1;
// }
// function dSorting(a, b) {
//     titleA = a.title.toLowerCase();
//     titleB = b.title.toLowerCase();
//     return titleA > titleB ? 1 : -1;
// }
// let ascendingSortByTitle = library.sort(aSorting);
// let descendingSortByTitle = library.sort(dSorting);
// console.log(ascendingSortByTitle);
// console.log(descendingSortByTitle);

// Task 6
// myColor = ['Red', 'Green', 'White', 'Black'];
// console.log(myColor.join(','));
// console.log(myColor.join('.'));
// console.log(myColor.join('+'));

// Task 7
// let library = [
//     { author: "Bill Gates", title: "The Road Ahead", libraryID: 1234, readingStatus: true },
//     { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264, readingStatus: true },
//     { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245, readingStatus: false },
// ];
// let mappedOutput = library.map((val) => {
//     if (val.readingStatus == true)
//         console.log(`Already read ${val.title} by ${val.author}`);
//     else
//         console.log(`You still need to read ${val.title} by ${val.author}`)
// })
// for (let i = 0; i < library.length; i++) {
//     if (library[i].readingStatus == true)
//         console.log(`Already read ${library[i].title} by ${library[i].author}`);
//     else
//         console.log(`You still need to read ${library[i].title} by ${library[i].author}`)
// }

// Task 8
// let library = [
//     { author: "Bill Gates", title: "The Road Ahead", libraryID: 1234, readingStatus: true },
//     { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264, readingStatus: true },
//     { author: "Suzanne Collins", title: "Mockingjay: The Final Book of The Hunger Games", libraryID: 3245, readingStatus: false },
// ];
// let filteredOutput = library.filter((val) => val.readingStatus == true );
// console.log(filteredOutput);