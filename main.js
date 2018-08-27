document.addEventListener("DOMContentLoaded",function(){

    console.log("Content loaded");
    var numberdivs=document.getElementsByClassName("number");

    var __ = document.getElementsByClassName("button");
    for (var i=0; i<__.length; i++){
        __[i].addEventListener("click", function(e){
            updateScreen(e.target.getAttribute("id"));
        });
    }

});

 var upperText="";
 var lowerText="";
 var num1;
 var num2;
 var lastOp="";
 var equalsFlag=false;






function updateScreen(id){

    var upperScreen= document.getElementById("upper");
    var lowerScreen= document.getElementById("lower");
    var doc = document.getElementById(id);

    if(id=="C"){
      upperText="";
      lowerText="";
      num1=null;
      num2=null;
      upperScreen.innerText="";
      lowerScreen.innerText="";
      lastOp="";
      equalsFlag=false;
    }else if (id=="CE") {
      lowerText=0;
      lowerScreen.innerText=lowerText;
    }else if (id=="del") {

       lowerText=lowerText.slice(0,lowerText.length-1);
       lowerScreen.innerText=lowerText;

    }else if(id=="equals"){


      if(upperText!="" &&  (num1!=undefined && num2!=undefined) || (num1!=undefined && lowerText!=undefined)  ){

        if(num2==null){
          num2=parseInt(lowerText);
        }
        if(lastOp=="+"){
            lowerText=num1+num2;
            lowerScreen.innerText=lowerText;
            upperScreen.innerText="";
            upperText="";
            num1=lowerText;
            num2=undefined;
        }else if(lastOp=="-"){
            lowerText=num1-num2;
            lowerScreen.innerText=lowerText;
            upperScreen.innerText="";
            upperText="";
            num1=lowerText;
            num2=undefined;
        }else if(lastOp=="*"){
            lowerText=num1*num2;
            lowerScreen.innerText=lowerText;
            upperScreen.innerText="";
            upperText="";
            num1=lowerText;
            num2=undefined;
        }else if(lastOp=="/"){
            lowerText=num1/num2;
            lowerScreen.innerText=lowerText;
            upperScreen.innerText="";
            upperText="";
            num1=lowerText;
            num2=undefined;
        }
      }else{
        lowerScreen.innerText=lowerText;
        upperScreen.innerText="";
        upperText="";
        num1=lowerText;
        num2=undefined;
      }
      lowerText="";
      equalsFlag=true;
    }else{

      console.log(id+" clicked ");

      if(doc.className.includes("number")){

          if(lowerText!=""){
            lowerText=lowerText+id;
          }else {
            lowerText=id;
          }
          lowerScreen.innerText=lowerText;

          console.log("num1::"+num1+" num2::"+num2);


      }else{
          console.log("Operation clicked  upperText:: " +upperText+" lowerText::"+lowerText+" num1 ::"+num1+" num2:: "+num2);
          if(equalsFlag && num1!=null){
            lowerText=num1;
          }else{

            if(lowerText!=""){

              if(num1==null){
                num1=parseInt(lowerText);
              }else{
                num2=parseInt(lowerText);
              }
            }
          }
            //Add operation
          if(id=="+"){

            if(upperText!=""){
              upperText=upperText+lowerText+"+" ;
              upperScreen.innerText=upperText;
            }else{
              upperText=lowerText+"+" ;
              upperScreen.innerText=upperText;

            }

          }

           //Subtract 
           if(id=="-"){

                if(upperText!=""){
                upperText=upperText+lowerText+"-" ;
                upperScreen.innerText=upperText;
                }else{
                upperText=lowerText+"-" ;
                upperScreen.innerText=upperText;

                }

          }

          //Multiply
            if(id=="*"){

                    if(upperText!=""){
                    upperText=upperText+lowerText+"X" ;
                    upperScreen.innerText=upperText;
                    }else{
                    upperText=lowerText+"X" ;
                    upperScreen.innerText=upperText;

                    }

            }

          //Divide
            if(id=="/"){

                    if(upperText!=""){
                    upperText=upperText+lowerText+"/" ;
                    upperScreen.innerText=upperText;
                    }else{
                    upperText=lowerText+"/" ;
                    upperScreen.innerText=upperText;

                    }

            }
          if(upperText!="" && num1!=undefined && num2!=undefined && !equalsFlag) {

            if(lastOp=="+"){
              lowerText=num1+num2;
              lowerScreen.innerText=lowerText;
              num1=lowerText;
              num2=undefined;
            }

            if(lastOp=="-"){
              lowerText=num1-num2;
              lowerScreen.innerText=lowerText;
              num1=lowerText;
              num2=undefined;
            }

            if(lastOp=="*"){
              lowerText=num1*num2;
              lowerScreen.innerText=lowerText;
              num1=lowerText;
              num2=undefined;
            }

            if(lastOp=="/"){
              lowerText=num1/num2;
              lowerScreen.innerText=lowerText;
              num1=lowerText;
              num2=undefined;
            }
          }
          lowerText="";
          console.log(" aFTER OPERATION num1::"+num1+" num2::"+num2);
          lastOp=id;
      }

  }

}
