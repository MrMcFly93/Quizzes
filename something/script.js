let button = document.getElementById("btn");





button.addEventListener("click",checkClick);


function checkClick(){
    let result = 0;
    let a1 = document.getElementById("q1").value;
    if (a1 === "Mercedes"){
        result++;

    }
    
    let a2 = document.getElementById("q2").value;
    if (a2 === "MU"){
        result++;
      }
    let a3 = document.getElementById("q3").value;
      if (a3 === "Blonde"){
          result++;
        }  
    let a4 = document.getElementById("q4").value;
        if (a4 === "Longboard"){
            result++;
          }    

    // alert(result)  
    if (result >= 3){
        alert("Your result is" + result + " !" + "We have the same interests")
    }else if(result <= 2){
       alert("Your result is " + result +"! Hmmm its could be better but we can try find some interesting conversation")
        }
}



    // if (result > 3){
    //     alert("Your result is" + result + " !" + "We have the same interests")
    // }else if(result < 2){
       
    //         alert("Your result is " + result +"! Hmmm its could be better but we can try")
    //     }

