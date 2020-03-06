const companies = [
  { name: "bl", catagory: "finance", start: "2000", end: "2050" },
  { name: "tw", catagory: "production", start: "2001", end: "2080" },
  { name: "wipro", catagory: "finance", start: "2005", end: "2008" },
  { name: "ibm", catagory: "production", start: "1996", end: "2005" },
  { name: "accenture", catagory: "retail", start: "2200", end: "2050" },
  { name: "tata", catagory: "finance", start: "1990", end: "2020" },
  { name: "niyo", catagory: "retail", start: "1994", end: "2010" },
]

const ages = [33, 25, 12, 32, 56, 41, 20, 22]

/******************** FOR EACH  ********************************************/

companies.forEach(function (company) {
  console.log(company.name);  
})

/******************** FILTER ********************************************/
let canDrive = [];
for (let i = 0; i < ages.length; i++){
  if (ages[i] > 18) {
    canDrive.push(ages[i]);
  }
}
console.log(canDrive);

const canDriveNew = ages.filter(function (age) {
  if (age > 18) {
    return true;
  }
});
console.log(canDriveNew);

//retail companies only

const retailCompanies = companies.filter(function (company) {
  if (company.catagory === "retail") {
    return true;
  }
});
console.log(retailCompanies);


const retailCompaniesNew = companies.filter(company => company.catagory === "retail");
console.log(retailCompaniesNew);

//90's company
const ninetisCompany = companies.filter(company => (company.start >= 1990 && company.start < 2000));
console.log(ninetisCompany);

//10 years
const tenYearsCompany = companies.filter(company => (company.end-company.start >=10));
console.log(tenYearsCompany);

/******************** MAP (no change in original array) ********************************************/

const companyNames = companies.map(function (company) {
  return company.name;
});
console.log(companyNames);


const testMap=companies.map(function(company) {
  return `${company.name}, [${ company.start } - ${ company.end }]`;
})
console.log(testMap);


/******************* SORT (change in original array ) ********************************************/
const sortedCompanies = companies.sort(function (c1,c2) {
  if (c1.start > c2.start) {
    return 1;
  }
  else {
    return -1;
  }
})
console.log(sortedCompanies);

const sortedCompaniesNew = companies.sort((a, b) => (a.sort > b.sort ? 1 : -1));
console.log(sortedCompaniesNew);

const sortedAges = ages.sort();
const sortedAges1 = ages.sort((a, b) => a - b);
const sortedAges2= ages.sort((a,b)=>b-a);
console.log(sortedAges);
console.log(sortedAges1);
console.log(sortedAges2);


/******************* REDUCE ********************************************/

const totalYear = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYear);


/******************* COMBINATION OF REDUCE,SORT,FILTER ********************************************/

const combined =ages.map(age => age * 2).filter(age=>age >= 40).sort((a,b)=>a-b).reduce((a,b)=>a+b,0);
console.log(combined);
