// from data.js
var tableData = data;

console.log(data);

var tbody = d3.select("tbody");
// YOUR CODE HERE!

data.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");

button.on("click", runEnter);

function runEnter(){
    d3.event.preventDefault();
  
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputElement)
    console.log(inputValue)

    var filteredData = tableData.filter(x => x.datetime === inputValue)
    console.log(filteredData)
    
    tbody.html("")

    filteredData.forEach((alienReport) => {
        var row = tbody.append("tr");
        Object.entries(alienReport).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
}


