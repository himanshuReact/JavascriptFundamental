// find average experience of employee in one line snippet


const developers = [
  {
    name: "Eliza",
    experience: 7,
    role: "manager"
  },
  {
    name: "Manuel",
    experience: 2,
    role: "developer"
  },
  {
    name: "Kim",
    experience: 5,
    role: "developer"
  }
];
developers.map(emp=>emp.experience).reduce((a,b)=>a+b)/developers.length
