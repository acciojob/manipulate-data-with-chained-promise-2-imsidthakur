//your JS code here. If required.

const output = document.getElementById("output");


const promise = new Promise((res,rej)=> {
		res([1, 2, 3, 4]);
})

promise.then((res) =>{
  const filtered = res.filter((num) => num%2 == 0);
  let str = "";
  for(let i = 0;i<filtered.length;i++)
  {
    if(i != 0) str += ", "
    str+= filtered[i];
  }
  setTimeout(function() {
    output.textContent = str;
    
  }, 1000);
	return filtered; 
}).then((res)=> {
  let str = "";
  for(let i = 0;i<res.length;i++)
  {
    if(i != 0) str += ", "
    str+= res[i]*2;
  }
  setTimeout(function() {
    output.textContent = str;
    
  }, 2000);

})
