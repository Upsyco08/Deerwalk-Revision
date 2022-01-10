// Task 1
// let students=
// {
//     name:"David Rayy",
//     scalss: "VI",
//     rollno:12
// };
// let newData=[]
// for (let key in students )
// {
//     newData.push(students[key]);
// }
// //1
// console.log(newData.join(","));
// //2
// delete students.rollno;
// console.log(students);
// //3
// let studentsArr= Object.keys(students);
// console.log(studentsArr.length);

// Task 2
getCurrentTime=()=>{
    const currentDate= new Date();
    const dateHours= currentDate.getHours();
    const dateMinutes=currentDate.getMinutes();
    const dateSeconds=currentDate.getSeconds();
    const formatDate=`${dateHours}:${dateMinutes}:${dateSeconds}`
    return formatDate
}
setInterval(()=>{console.log(getCurrentTime())},1000);
