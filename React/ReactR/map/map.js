const persons = [
  {
    firstname : "Malcom", 
  lastname: "Reynolds"
    },
  {
    firstname : "Kaylee", 
    lastname: "Frye"
  },
  {
    firstname : "Jayne", 
    lastname: "Cobb"
    
   }
];

d=persons.map(getFullName);
console.log(d)
function getFullName(item) {
  return [item.firstname,item.lastname].join(" ");
}
