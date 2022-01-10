// JS revision
// TASK 1
// let str=54321;
// function reverse(s)
// {
//     let st=s.toString();
//     let reversedNum=st.split("").reverse().join("");
//     return +reversedNum;
// }
// reverseNum=reverse(str);
// console.log(reverseNum);

// TASK 2
// function checkPalindrome(string){
//     let real=string;
//     let reversed=string.split("").reverse().join("");
//     if (real==reversed) return "true";
//     else return "false";
// }
// const check = checkPalindrome("lefefeal");
// console.log(check);

// TASK 3
// function capWord(word){
//     const firstLetterCap=word.charAt(0).toUpperCase();
//     const remainingLetters= word.slice(1);
//     return firstLetterCap+remainingLetters;
// }

// function capSentence(sentence){
//     const sentenceArr=sentence.split(" ");
//     const finalArr=[];
//     sentenceArr.forEach((word)=>{
//         const capitalizedWord=capWord(word);
//         finalArr.push(capitalizedWord);
//     });
//     return finalArr.join(" ");
// }

// const Phrase="have a good day!";
// convertSentence=capSentence(Phrase);
// console.log(convertSentence);

// TASK 4
// function getLargestCountry(countries)
// {
//     let largest=[countries[0],countries[0].length];
//     countries.forEach(country=>{
//         if (country.length>largest[1]) 
//         { 
//             largest=[country,country.length];
//     }
// });
//     return largest[0];
// }
// largestCountry=getLargestCountry(["Nepal","Kuzbekistan","Bhutan","England"]);
// console.log(largestCountry);

