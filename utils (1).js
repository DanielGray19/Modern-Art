//this imputs the data set. 
function getColumn(url, columnNumber){
  var column = [];
  var table = [];
  var request = new XMLHttpRequest();  
  request.open("GET", url, false);   
  request.send(null);  
  var csvData = new Array();
  var jsonObject = request.responseText.split(/\r?\n|\r/);
  for (var i = 0; i < jsonObject.length; i++) {
    csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
  }
  table = csvData;
  column = getCol(table, columnNumber);
  return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
       var column = [];
       for(var i=1; i<matrix.length-1; i++){
          column.push(matrix[i][col]);
       }
       return column;
    }
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Art/International%20Exhibition%20of%20Modern%20Art%201913.csv";
var titles = getColumn(url, 1);
var artists = getColumn(url, 2);
var sexes = getColumn(url,3);
var mediums = getColumn(url,4);
var locations = getColumn(url, 5);
var numOfLocation = getColumn(url, 6);
//var prices = getColumn(url,7);
var includedBecause = getColumn(url,8);
//The function displays the name of the painting based on the location they are in
// location list- The parameter finds the location of the painting
// return list- Returns the multiple paintings in a list that were in the location displayed in the console.

function getTitlesInLocation(location){
  var list=[];
  if(!locations.includes(location)){
    return ("Error: Please input valid a valid location.");
  }
  for(var i=0; i< locations.length;i++){
    if(locations[i]==location){
      list.push(titles[i]);
  

  }

}
    return list;
}
console.log(getTitlesInLocation("New York"));
// The function gives you the name of the artist based on the painting they created
// title string- The parameter title, finds the title of the desired painting.
// return string- return artists[i]; is what connects the name of the painting to the artist who created it.
// return string-  return "You did not match an artist to the painting."; is used when the title does not match an artist and there is not a correct answer.

function getArtist(title){

for (var i = 0; i < titles.length; i ++){
  if (titles[i] == title){
    return artists[i];
}
}
  return "Error: You did not match an artist to the painting.";
}
console.log(getArtist("the desert"));

//This function gives you the price of the painting
// the parameter string- the parameter title finds the title of the desired painting 
// return string-  return "$" + price[i] + "0"; is what connects the title of the painting to its price.
// return string- return "Please imput valid art piece." is signifying you did not put in the right parameters to recieve the price of the painting.
function getPrice(title){
  for (var i = 0; i < titles.length; i ++){
  if (titles[i] == title){
        return "$" + price[i] + "0";
  }

}
return "Error: Please imput valid art piece."
}
console.log(getPrice("the orchard"));
// The function is to give what the paintings were made out of.
// The parameter string- the parameter title  finds the title of the desired painting.
// return string-  return mediums[i]; finds the mediums of the title of the painting.
// return string- return "Please imput valid art piece."is given when the console is not projecting the correct painting that has its mediums stored in the dataset.
function getMedium(title){
  var painting =  mediums[i];
  for (var i = 0; i < titles.length; i ++){
  if (titles[i] == title)
    if (mediums[i] == "oil " || "watercolor " || "pastel "){
      return mediums[i] +" Painting"
    }
}
return "Error: Please imput valid art piece."
}


  console.log(getMedium("the desert"));
// The function is getting the average price of evry painting in the dataset
// The variables 'getAvgPrice' and 'titlePriceAvgList' are used throughout the function to calculate the average.
// the return priceAverage is what had the average price.

var prices = [4, 8, 8, 1];
  function getAvgPrice(){
  var priceAvgList =[];
  var priceAverage = 0;
  
  for (var i = 0; i < prices.length; i ++){
    priceAvgList.push(prices[i]);
  
  } 
 for(var i = 0; i < priceAvgList.length; i++){
    priceAverage = priceAverage + parseInt(priceAvgList[i]);
}
    priceAverage = priceAverage/ priceAvgList.length
    return priceAverage;
  }
console.log(getAvgPrice());