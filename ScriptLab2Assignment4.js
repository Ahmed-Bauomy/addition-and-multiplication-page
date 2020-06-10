window.addEventListener("load",function(){

let addInputs=this.document.querySelectorAll(".add input");
let multiInputs=this.document.querySelectorAll(".multi input");
let addresult=this.document.querySelectorAll(".add span")[2];
let multiresult=this.document.querySelectorAll(".multi span")[2];

//handle the addition inputs
for(let i=0;i<addInputs.length;i++){
      addInputs[i].onchange=function(){
          let result=0;
          if(i==0){
             result =parseInt( this.value) + parseInt(addInputs[1].value);
          }else{
             result =parseInt( this.value) + parseInt(addInputs[0].value);
          } 
         addresult.innerText=result;
       }
}//end of addition

//handle the multiplication inputs
for(let i=0;i<multiInputs.length;i++){
    multiInputs[i].onchange=function(){
      let result=0;
      if(i==0){
          result=parseInt(this.value) * parseInt(multiInputs[1].value);
      }else{
        result=parseInt(this.value) * parseInt(multiInputs[0].value);
      }
      multiresult.innerText=result;
    }
}//end of multiplication




});//end of load