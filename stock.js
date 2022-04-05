
const stock = document.getElementById('stock-results')
const ul = document.getElementById('stock-list');


function getStock(){
var input = document.getElementById('field1').value;

var arr = input.split('-');

var year = arr[0]
var month = arr[1];

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Function to get the name of the month
 function dateFormat(input){
  var t = new Date(input);
  t.setDate(t.getDate());
  return monthNames[t.getMonth()];
}

var month_value = dateFormat(input)

var day = arr[2];

// Removing the trailing zeros from the date
var mydate = (day + '-' + month_value + '-' + year);
const query = mydate.replace(/(^|-)0+/g, "$1");
console.log(mydate.replace(/(^|-)0+/g, "$1"))


// Fetch and display the data
fetch(`https://jsonmock.hackerrank.com/api/stocks?date=${query}`)
.then(response => response.json())
.then(data =>{
   
    let stock = data.data;
    console.log(stock[0].close)
    
    let li = document.createElement('li');
    let open = document.createElement('h4');
    let high = document.createElement('h4');
    let low = document.createElement('h4');
    let close = document.createElement('h4');
    

    open.innerHTML = `Open: ${stock[0].open}`
    high.innerHTML = `High: ${stock[0].high}`
    low.innerHTML = `Low: ${stock[0].low}`
    close.innerHTML = `Close: ${stock[0].close}`

    li.appendChild(open);
    li.appendChild(high);
    li.appendChild(low);
    li.appendChild(close);
    ul.appendChild(li);
})

}


