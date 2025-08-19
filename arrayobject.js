// var number=[1,2,3,4,5];
// var players=[{},{},{}];
// array of object key value pair is same key=name value=ashik
var employees=[
    {name:'Ashik',designation:'Content_writer',salary:2500},
    {name:'Rofik',designation:'Developer',salary:29000},
    {name:'Khalid',designation:'Web-developer',salary:2100},
]
employees[0].name='rifat';
console.log(employees);
console.log(employees[0]);
// console.log(employees);
// for acessing first element we use array
// console.log(employees[0]);
// console.log(employees[1].name);
// to short method
// for(var i=0;i<employees.length;i++)
// {
//     console.log(employees);
// }
// using loop:
for(const emp of employees)
{
    //in this we take key name value is ashik,rofik,khalid
    // and also we take key designation value is content_writer,Developer,Web_developer 
    // key salary we take value is 2500,29000,2100
     console.log([emp.name]+[':']+[emp.designation]+[':']+[emp.salary]);
}
// for(const emps of employees)
// {
//     const person=emps;
//     const person_info=person.name+ ":"+person.designation+ ":"+person.salary;
//     console.log(person_info);
// }