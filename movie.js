const movies = document.getElementById('movies')
const ul = document.getElementById('list');


async function getData(perPage, page, options, allData = []) {

    // fetch data
    
    let base = 'https://jsonmock.hackerrank.com/api/movies';
    let url = `${base}?perPage=${perPage}&page=${page}`;
    let response = await fetch(url, options);
    let data = await response.json();
  
    
    allData.push(data); 
    if (page ==2) {
        // consolidated results
        return allData;
      } else {
        // get the next page and repeat
        page++;
        return getData(perPage, page, options, allData);
      }
  

  }
  
  
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  
  
  
  for(let i=1;i<=2;i++){
  let perPage = 100;
  let page = i;
  let arr=[]
  if(i==1){
     getData(perPage, page, options).then((data) => {
        console.log("hello",data)
        arr = data;
        
        console.log(arr[0].data);
        arr[0].data.sort((a, b) => a.Title.localeCompare(
            b.Title,
            undefined,
            { numeric: true, sensitivity: 'base' }
            
        ));

        for(i=0;i<=2;i++){
        arr[i].data.sort((a, b) => a.Title.localeCompare(
            b.Title,
            undefined,
            { numeric: true, sensitivity: 'base' }
            
        )).map((movie)=>{
        
            let li = document.createElement('li');
            let title = document.createElement('h4');
            let year = document.createElement('span');
    
            title.innerHTML = `${movie.Title}`;
            year.innerHTML = `${movie.Year}`;
    
            li.appendChild(title);
            li.appendChild(year);
            list.appendChild(li);
            
        })
        }
        

   



      }).catch((error) => {
        console.log(error)
      })



   

    

    

  } 
  if (i==2){
     getData(perPage, page, options).then((data) => {
        console.log(data)
        arr2 = data.data;
      }).catch((error) => {
        console.log(error)
      }) 
  }


  }