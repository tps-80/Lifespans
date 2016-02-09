var dataset = [ 
  [ 1911, 2004, 'Ronald Reagan' ],
  [ 1889, 1945, 'Adolf Hitler' ],
  [ 1707, 1778, 'Carl Linnaeus' ],
  [ 1917, 1963, 'John F. Kennedy' ],
  [ 1809, 1865, 'Abraham Lincoln' ],
  [ 1882, 1945, 'Franklin D. Roosevelt' ],
  [ 1874, 1965, 'Winston Churchill' ],
  [ 1920, 2005, 'Pope John Paul II' ],
  [ 1819, 1901, 'Queen Victoria' ],
  [ 1913, 1994, 'Richard Nixon' ],
  [ 1732, 1799, 'George Washington' ],
  [ 1915, 1998, 'Frank Sinatra' ],
  [ 1769, 1821, 'Napoleon ' ],
  [ 1859, 1926, 'Sidney Lee' ],
  [ 1878, 1953, 'Joseph Stalin' ],
  [ 1858, 1919, 'Theodore Roosevelt' ],
  [ 1924, 2016, 'Jimmy Carter' ],
  [ 1890, 1969, 'Dwight D. Eisenhower' ],
  [ 1743, 1826, 'Thomas Jefferson' ],
  [ 1902, 1983, 'Nikolaus Pevsner' ],
  [ 1924, 2016, 'George H. W. Bush' ],
  [ 1908, 1973, 'Lyndon B. Johnson' ],
  [ 1856, 1924, 'Woodrow Wilson' ],
  [ 1756, 1791, 'Wolfgang Amadeus Mozart' ],
  [ 1869, 1948, 'Mahatma Gandhi' ] ];

var w = 900;
var h = 400;
var barPadding = 1;

var svg = d3.select("body")
    .append("svg")
    .attr("padding", 10)
    .attr("width", w)
    .attr("height", h);

svg.selectAll("rect")
   .data(dataset)
   .enter()
   .append("rect")
   .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
   .attr("x", function(d, i) {
        return i * (w / dataset.length) + 20;
   })
   .attr("y", function(d) {
        return h - ((d[1] - d[0]) * 4);
   })
   .attr("padding", 10)
   .attr("width", 20 - barPadding)
   .attr("height", function(d) {
        return (d[1] - d[0]) * 4;
   })
   .attr("fill", "burlywood");

svg.selectAll("text")
   .data(dataset)
   .enter()
   .append("text")
   .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
   .text(function(d) {
        return d[2];
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 20;
   })
   .attr("y", function(d, i) {
        return h - (i * 10 + (d[1] - d[0]));
   })
   .attr("padding", 20)
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "blue");

svg.selectAll("p")
   .data(dataset)
   .enter()
   .append("text")
   .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
   .text(function(d) {
        return d[1] - d[0];
   })
   .attr("text-anchor", "middle")
   .attr("x", function(d, i) {
        return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 10;
   })
   .attr("y", function(d) {
        return h - 14;
   })
   .attr("padding", 20)
   .attr("font-family", "sans-serif")
   .attr("font-size", "11px")
   .attr("fill", "blue");

var filterYear = function(){
    var userInput = document.getElementById('year').value;
    console.log("renderPage is working")
    console.log("userInput =", userInput)

    svg.selectAll("text")
        .remove()

    svg.selectAll("rect")
        .remove()

  
    svg.selectAll("rect") 
        .data(dataset)
       .enter()
       .append("rect")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[0] <= userInput && d[1] >= userInput  })
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + 20;
       })
       .attr("y", function(d) {
            return h - ((d[1] - d[0]) * 4);
       })
       .attr("padding", 10)
       .attr("width", 20 - barPadding)
       .attr("height", function(d) {
            return (d[1] - d[0]) * 4;
       })
       .attr("fill", "burlywood");

    svg.selectAll("text")
        .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[0] <= userInput && d[1] >= userInput  })
       .text(function(d) {
          return d[2];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 20;
       })
       .attr("y", function(d, i) {
            return h - (i * 10 + (d[1] - d[0]));
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "blue");

    svg.selectAll("p")
       .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[0] <= userInput && d[1] >= userInput  })
       .text(function(d) {
            return d[1] - d[0];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 10;
       })
       .attr("y", function(d) {
            return h - 14;
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "blue");
   document.getElementById('year').value = "";
   console.log("made it through function =  ")
}

var filterAge = function(){
    var userInput = document.getElementById('age').value;
    console.log("renderPage is working")
    console.log("userInput =", userInput)

    svg.selectAll("text")
        .remove()

    svg.selectAll("rect")
        .remove()

  
    svg.selectAll("rect") 
        .data(dataset)
       .enter()
       .append("rect")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[1] - d[0] >= userInput  })
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + 20;
       })
       .attr("y", function(d) {
            return h - ((d[1] - d[0]) * 4);
       })
       .attr("padding", 10)
       .attr("width", 20 - barPadding)
       .attr("height", function(d) {
            return (d[1] - d[0]) * 4;
       })
       .attr("fill", "burlywood");

    svg.selectAll("text")
        .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[1] - d[0] >= userInput  })
       .text(function(d) {
          return d[2];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 20;
       })
       .attr("y", function(d, i) {
            return h - (i * 10 + (d[1] - d[0]));
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "blue");

    svg.selectAll("p")
       .data(dataset)
       .enter()
       .append("text")
       .sort(function(a,b) { return d3.ascending(a[1] - a[0], b[1] - b[0]); })
       .filter(function(d) { return d[1] - d[0] >= userInput  })
       .text(function(d) {
            return d[1] - d[0];
       })
       .attr("text-anchor", "middle")
       .attr("x", function(d, i) {
            return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2 + 10;
       })
       .attr("y", function(d) {
            return h - 14;
       })
       .attr("padding", 20)
       .attr("font-family", "sans-serif")
       .attr("font-size", "11px")
       .attr("fill", "blue");
   document.getElementById('age').value = "";
   console.log("made it through function =  ")
}