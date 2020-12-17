let input = document.getElementById("input-box");


input.addEventListener("keypress", function(e) {
    e.stopPropagation()
    if (e.key === 'Enter') {
       
        let inputValue = document.getElementById("input-box").value;
     bp1(inputValue)

    }
    
});


function bp1(inputValue){
  
   let  x = document.getElementById("b1").rows.length;
      
   
   console.log(x)
   
    
    for(i=0;i<x;i++){
        let tr1 = document.getElementsByTagName("tr")[i];
        let tdl1 = tr1.getElementsByTagName("td").length;
        
       
        
        for(j=0;j<tdl1;j++){
            let td1 = tr1.getElementsByTagName("td")[j];

            td1.addEventListener("click", function(e) {
                e.target.className -= " yes";
            });

            console.log(td1.innerHTML+'=='+inputValue)
            if(td1.innerHTML===inputValue){
             
              td1.className += " yes";
           
            }else{
                console.log("nope")
            }
        
        }
    }

    
    
    }
