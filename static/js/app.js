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

//button
var button = d3.select("#filter-btn");

//event handler on button click
button.on("click", buttonClick);

  //create function for event
function buttonClick() {
        
  //prevent refresh and clear table per requirements
  d3.event.preventDefault();
  tbody.html("");

  //select input and get HTML node
  var dateInput = d3.select("#datetime");

  //get data value from input
  var dateData = dateInput.property("value");

  //print it
  console.log(dateData);

  //filter the data
  var filteredufoData = ufoData.filter(
    sighted => sighted.datetime === dateData); 
  console.log (filteredufoData);

  filteredufoData.forEach(function(ufoSearch) {
    var row = tbody.append("tr");
    Object.entries(ufoSearch).forEach(function([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
}