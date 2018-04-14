// Two types of for loops
// for and for-in

for(var i=0;i<5;i++)
    console.log(i);

// For Loop on Object Properties
var companyObj = {'name': 'Being Zero', 'yearOfEstablishment': 2014};

for(var propName in companyObj)
    console.log(propName, companyObj[propName]);