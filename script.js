/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  
  arr.map((value) => {
    if(value.profession == 'developer'){
      console.log(value);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  
  arr.forEach((value) => {
    if(value.profession == 'developer'){
      console.log(value);
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newIntern = {
    id:4,
    name:"susan",
    age:"20",
    profession:"intern"
  }

  arr.push(newIntern);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let removeAdminEmployee = arr.filter(value => value.profession!='admin');
  console.log(removeAdminEmployee);
  arr = removeAdminEmployee;
}

function concatenateArray() {
  //Write your code here, just console.log
  let copy = [
    {
      id:1,name:"Sam",
      age:"33",
      profession:"developer"
    },
    {
      id:2, name:"Ajit",
      age:"27", 
      profession:"developer"
    },
    {
      id:3, 
      name:"Bipin", 
      age:"12",
      profession:"Admin"
    }
  ]

  let finalArr = arr.concat(copy);
  console.log(finalArr);
}
