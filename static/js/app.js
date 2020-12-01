//Create the damn table!

// from data.js
var ufoData = data;

// table body reference
var tbody = d3.select("tbody");

//prove it 
//console.log(data)

//create table using forEach function
ufoData.forEach(function(ufoTable) {
    var row = tbody.append("tr");
    Object.entries(ufoTable).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });