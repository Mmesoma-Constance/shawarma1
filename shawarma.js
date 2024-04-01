
let a = 1000;
let b = 20000 
let c = a * b;
let d = b.toLocaleString();
let e = `${d * a}`
console.log(d)

let hiddenText = document.querySelector(".hiddenText");
hiddenText.style.display === 'none';
let hiddenBtn = document.getElementById('hiddenBtn');
hiddenBtn.innerText === "Read More";

function showText() {
  if (hiddenText.style.display === 'none' && hiddenBtn.innerText === "Read More") {
    hiddenText.style.display = "block";
  hiddenBtn.innerText = "Show Less";
  }
  else {
    hiddenText.style.display = "none";
    hiddenBtn.innerText = "Read More";
  }
}
console.log(showText());



let numberValue = 1;


let spinner = document.getElementById('spinner');
let processMsg = document.getElementById("process");
let checkMsg = document.getElementById("checkMsg");
let available = document.getElementById("available");

let spinner2 = document.getElementById('spinner2');
let processMsg2 = document.getElementById("process2");
let checkMsg2 = document.getElementById("checkMsg2");
let available2 = document.getElementById("available2");


let spinner3 = document.getElementById('spinner3');
let processMsg3 = document.getElementById("process3");
let checkMsg3 = document.getElementById("checkMsg3");
let available3 = document.getElementById("available3");


let added = document.querySelector(".addValue");
let subtracted = document.querySelector(".minusValue");
let valueNumber = document.querySelector(".numberValue");
let optionPrice = document.getElementById("optionPrice");


let nairaSign = "\u20A6";
let orderPrice = 5500;
let orderNum = orderPrice.toLocaleString();
optionPrice.innerText = nairaSign + orderNum;


function valueMinus(value){
    if (value === "-") {
     // const check = numberValue <= 1 ? alert("Not less than 1 order!") :  valueNumber.innerText =  numberValue -= 1;
       if (numberValue <= 1 ) {
        alert("Not less than 1 order!")
       } else {
        valueNumber.innerText =  numberValue -= 1;
        let orderAmount = orderPrice * `${numberValue}`;
        let ordercommas = orderAmount.toLocaleString();
        optionPrice.innerText = nairaSign + ordercommas;
        console.log(optionPrice.innerText);

       }
    } 
else if (value === "+") {
 if( numberValue >= 5) {
   alert("Not more than 5 order at a time!")
 }
else {
  valueNumber.innerText =  numberValue += 1;
  let orderAmount = orderPrice * `${numberValue}`;
  let ordercommas = orderAmount.toLocaleString();
  optionPrice.innerText = nairaSign + ordercommas;
  console.log(optionPrice.innerText);
}

}
  
} 


function updateNumber() {

  numberValue = 2;
 
 
 document.querySelector(".numberValue").innerText = numberValue;
 
 }
 
const buttonType = document.getElementById("chickenBtn").textContent;


function chickenOrder(shawarmaType) {
  
  let shawarmaSelect = document.getElementById("selectValue");
 shawarmaSelect.value = shawarmaType;
console.log(shawarmaType);

}

function scrollSmooth() {
  const section = document.getElementById("order");
    section.scrollIntoView({
        behavior: "smooth"
        
        
    });
}
 


 const currentDate = new Date();
 const currentDay = currentDate.getDay();
 const currentHour = currentDate.getHours();
 const currentMinute = currentDate.getMinutes();
 const currentSecond = currentDate.getSeconds();

 

 let shawarmaSelect = document.getElementById("selectValue");
let shawarmaType = shawarmaSelect.value;

 let icon = document.getElementById("icon");

function chickenPromo(shawarmaType) {

  // this is for weekend

let checkButton = document.getElementById('mixedBtn');

if ((currentDay === 0 || currentDay === 6) && (currentHour >= 17 && currentHour < 18)) {
      
  checkMsg2.style.display = "none";
   
    spinner2.style.display = "inline-block";
    processMsg2.style.display = "inline-block";


    setTimeout(function() {

    spinner2.style.display = "none";

available2.textContent = "Offer available!"
    processMsg2.style.display = "none";
   
    }, 2000); 
  
   shawarmaType = shawarmaSelect.value;
  
        setTimeout(function() {
      const section = document.getElementById("order");
      section.scrollIntoView({
          behavior: "smooth"
          
          
      });
  }, 2700)

  setTimeout(function() {
    spinner2.style.display = "none";
    processMsg2.style.display = "none";
    checkMsg2.style.display = "inline-block";
    available2.textContent = ""
  }, 2800);
  
      } 

   else if ((currentDay !== 0 &&  currentDay !== 6)) {

       
    checkMsg2.style.display = "none";
   
    spinner2.style.display = "inline-block";
    processMsg2.style.display = "inline-block";


    setTimeout(function() {

    spinner2.style.display = "none";

available2.textContent = "Offer not available!"
    processMsg2.style.display = "none";
   
    }, 2500); 

setTimeout(function() {
  alert("This special offer is exclusively valid during the weekends from 5PM to 6PM.")
}, 2800);

setTimeout(function() {
  spinner2.style.display = "none";
  processMsg2.style.display = "none";
  checkMsg2.style.display = "inline-block";
  available2.textContent = ""
}, 2800);


    
    } 
    
    else if((currentDay === 0 || currentDay === 6) && (currentHour < 17)) {
      const remainingHour = 17 - currentHour - 1;
      const remainingMinutes = 59 - currentMinute - 1;
      const remainingSeconds = 60 - currentSecond - 1;

      checkMsg2.style.display = "none";
   
    spinner2.style.display = "inline-block";
    processMsg2.style.display = "inline-block";


    setTimeout(function() {

    spinner2.style.display = "none";

available2.textContent = "Offer not available!"
    processMsg2.style.display = "none";
   
    }, 2500); 


setTimeout(function() {
   alert(`Offer available in ${remainingHour}hours : ${remainingMinutes}minutes : ${remainingSeconds}seconds`)
}, 2800);

setTimeout(function() {
  spinner2.style.display = "none";
  processMsg2.style.display = "none";
  checkMsg2.style.display = "inline-block";
  available2.textContent = ""
}, 2800);


   
    }

  else if ((currentDay === 0 || currentDay === 6) && (currentHour >= 18)) {
    const remainingHour = 24 - currentHour + 17 - 1 ;
    const remainingMinutes = 59 - currentMinute;
    const remainingSeconds = 60 - currentSecond;

    checkMsg2.style.display = "none";
   
    spinner2.style.display = "inline-block";
    processMsg2.style.display = "inline-block";


    setTimeout(function() {

    spinner2.style.display = "none";

available2.textContent = "Offer not available!"
    processMsg2.style.display = "none";
   
    }, 2500); 
    
    setTimeout(function() {
       alert(`Offer available in ${remainingHour}hours : ${remainingMinutes}minutes : ${remainingSeconds}seconds`)
    }, 2800);
    
    
setTimeout(function() {
  spinner2.style.display = "none";
  processMsg2.style.display = "none";
  checkMsg2.style.display = "inline-block";
  available2.textContent = ""
}, 2800);

    
 

  }
    
     }




     function chickenPromo2(shawarmaType) {

  
      // this is for weekday
    
    let checkButton = document.getElementById('chickenBtn');

    if ((currentDay >= 1 || currentDay <= 5) && (currentHour >= 16 && currentHour < 18)) {

         
      checkMsg.style.display = "none";
      spinner.style.display = "inline-block";
      processMsg.style.display = "inline-block";

  
      setTimeout(function() {

      spinner.style.display = "none";
 available.textContent = "Offer available!"
      processMsg.style.display = "none";
     
      }, 2000);
    
      
    let shawarmaSelect = document.getElementById("selectValue");
    shawarmaType = shawarmaSelect.value ;
   
       console.log(shawarmaType);
    
            setTimeout(function() {
          const section = document.getElementById("order");
          section.scrollIntoView({
              behavior: "smooth"
              
              
          });
      }, 2700)
       
      setTimeout(function() {
        spinner.style.display = "none";
        processMsg.style.display = "none";
        checkMsg.style.display = "inline-block";
        available.textContent = "";
      }, 2800);
      
           }
        
    
     else   if ((currentDay === 0 || currentDay === 6)) {
    
      checkMsg.style.display = "none";
   
      spinner.style.display = "inline-block";
      processMsg.style.display = "inline-block";

  
      setTimeout(function() {

      spinner.style.display = "none";

 available.textContent = "Offer not available!"
      processMsg.style.display = "none";
     
      }, 2500);
      
    setTimeout(function() {
      alert("This special offer is exclusively valid during the weekdays from 4PM to 6PM.")
    }, 2800);
    
    setTimeout(function() {
      spinner.style.display = "none";
      processMsg.style.display = "none";
      checkMsg.style.display = "inline-block";
      available.textContent = ""
    }, 2800);
    
    
    
        
        } 

        else if ((currentDay >= 1 &&  currentDay <= 5) && (currentHour < 16)) {
          const remainingHour = 16 - currentHour - 1;
          const remainingMinutes = 59 - currentMinute - 1;
          const remainingSeconds = 60 - currentSecond - 1;
    
          checkMsg.style.display = "none";
   
          spinner.style.display = "inline-block";
          processMsg.style.display = "inline-block";
  
      
          setTimeout(function() {
  
          spinner.style.display = "none";
  
     available.textContent = "Offer not available!"
          processMsg.style.display = "none";
         
          }, 2500);
  
    
    setTimeout(function() {
       alert(`Offer available in ${remainingHour}hours : ${remainingMinutes}minutes : ${remainingSeconds}seconds`)
    }, 2800);
    
    setTimeout(function() {
      spinner.style.display = "none";
      processMsg.style.display = "none";
      checkMsg.style.display = "inline-block";
      available.textContent = ""
    }, 2800);
    
       
        } 

      else if ((currentDay >= 1 && currentDay <= 5) && (currentHour >= 18)) {
        const remainingHour = 24 - currentHour + 16 - 1 ;
        const remainingMinutes = 59 - currentMinute;
        const remainingSeconds = 60 - currentSecond;


       
        checkMsg.style.display = "none";
   
        spinner.style.display = "inline-block";
        processMsg.style.display = "inline-block";

    
        setTimeout(function() {

        spinner.style.display = "none";

   available.textContent = "Offer not available!"
        processMsg.style.display = "none";
       
        }, 2500);

        
        
        setTimeout(function() {
           alert(`Offer valid in ${remainingHour}hours : ${remainingMinutes}minutes : ${remainingSeconds}seconds`)
        }, 2800);
        
        setTimeout(function() {
          spinner.style.display = "none";
          processMsg.style.display = "none";
          checkMsg.style.display = "inline-block";
          available.textContent = ""
        }, 2800);
        
     
    
      }
     
      console.log(currentDate)
      console.log(currentHour)
      console.log(currentDay)
         }

    
   





    let button = document.getElementById('orderbtn');
   

   
function order() {
 let selectOption = document.getElementById('selectValue');
  let selected = selectOption.value;

let chickenPrice = 5500 * `${numberValue}`;
let beefPrice = 5000 * `${numberValue}`;
let fishPrice = 6500 * `${numberValue}`;
let veganPrice = 6000 * `${numberValue}`;
let mixedPrice = 9000 * `${numberValue}`;
let platePrice = 8000 * `${numberValue}`;


let chickenString = "";

if (selected === "Chicken Shawarma") {
  chickenString = chickenPrice.toLocaleString();
} else if (selected === "Beef Shawarma") {
  chickenString = beefPrice.toLocaleString();
} else if (selected === "Fish Shawarma") {
  chickenString = fishPrice.toLocaleString();
} else if(selected === "Vegan Shawarma") {
  chickenString = veganPrice.toLocaleString();
} else if(selected === "Mixed Shawarma") {
  chickenString = mixedPrice.toLocaleString();
} else if(selected === "Shawarma Plate") {
  chickenString = platePrice.toLocaleString();
} 

console.log(selected)
console.log(chickenString)

  let result = document.querySelector('.inputed');
    let cost = result.value;
 result.style.border = "";

    let result2 = document.querySelector('.inputed2');
    let cost2 = result2.value;
    result2.style.border = "";

    let result3 = document.querySelector('.inputed3');
    let cost3 = result3.value;
    result3.style.border = "";

    let result4 = document.querySelector('.inputed4');
    let cost4 = result4.value;
    result4.style.border = "";


     
if (cost === "") {
    const element = document.querySelector('.error');
    let result = document.querySelector('.inputed');
    result.style.border = "2px solid red";
        element.innerText =  "Please enter your name!";
        result.focus();
        
    setTimeout(function() {
        element.innerText = "";
           }, 1500);
} 

 else if (cost.length < 4 ) {
  const element = document.querySelector('.error');
  let result = document.querySelector('.inputed');
  result.style.border = "2px solid red";
      element.innerText =  "Name must be up to 4 letters!";
      result.focus();
      
  setTimeout(function() {
      element.innerText = "";
         }, 1500);
 }

 else if (cost2 === "") {
    const element2 = document.querySelector('.error2');
    let result2 = document.querySelector('.inputed2');
    result2.style.border = "2px solid red";
    element2.innerText =  "Please enter your email!";
    result2.focus();
    
setTimeout(function() {
    element2.innerText = "";
       }, 1500);

    } 

   else if (!cost2.includes("@") || !cost2.includes(".")) {
        const element2 = document.querySelector('.error2');
        let result2 = document.querySelector('.inputed2');
        result2.style.border = "2px solid red";
        element2.innerText =  "Please enter a valid email!";
        result2.focus();

          
    setTimeout(function() {
        element2.innerText = "";
           }, 1500);
    }

    


    else if (cost4 === "") {
        const element4 = document.querySelector('.error4');
        let result4 = document.querySelector('.inputed4');
        result4.style.border = "2px solid red";
        element4.innerText =  "Please enter your phone number!";
        result4.focus();
        
    setTimeout(function() {
        element4.innerText = "";
           }, 1500);
    } 

    else if (isNaN(cost4)) {
        const element4 = document.querySelector('.error4');
        let result4 = document.querySelector('.inputed4');
        result4.style.border = "2px solid red";
        element4.innerText =  "Please enter a valid phone number!";
        result4.focus();
        
    setTimeout(function() {
        element4.innerText = "";
           }, 1500);
    }
    else if (cost4.length < 11) {
      const element4 = document.querySelector('.error4');
      let result4 = document.querySelector('.inputed4');
      result4.style.border = "2px solid red";
      element4.innerText =  "Number must be up to 11 digits!";
      result4.focus();
      
  setTimeout(function() {
      element4.innerText = "";
         }, 1500);
  }

   else if (cost3 === "") {
        const element3 = document.querySelector('.error3');
        let result3 = document.querySelector('.inputed3');
        result3.style.border = "2px solid red";
        element3.innerText =  "Please enter your location!";
        result3.focus();
        
    setTimeout(function() {
        element3.innerText = "";
           }, 1500);
    } 

    
 else if (cost3.length < 4 ) {
  const element3 = document.querySelector('.error3');
  let result3 = document.querySelector('.inputed3');
  result3.style.border = "2px solid red";
      element3.innerText =  "Location must be more than 4 letters!";
      result3.focus();
      
  setTimeout(function() {
      element3.innerText = "";
         }, 1500);
 }

 
    

else {

  let greeting;

  if(currentHour >= 0 && currentHour < 12) {
    greeting = "Good Morning";
  }
  else if (currentHour >= 12 && currentHour < 16) {
    greeting = "Good Afternoon";
  } 
  else{
    greeting = "Good Evening";
  }
  
  console.log(greeting);
   
 

    result.style.border = "2px #09c372;";
    result2.style.border = "";
    result3.style.border = "";
    
    spinner3.style.display = "inline-block";
    
    checkMsg3.style.display = "none";
   
    spinner3.style.display = "inline-block";
    processMsg3.style.display = "inline-block";


    setTimeout(function() {

    spinner3.style.display = "none";

available3.textContent = "Order Successful!"
    processMsg3.style.display = "none";
   
    }, 5000); 

    
    setTimeout(function() {
      if ((currentDay !== 0 &&  currentDay !== 6) && (currentHour >= 16 && currentHour < 18)  && (selected === "Chicken Shawarma" && numberValue === 2) ) {
        alert(`${greeting} ${cost.charAt(0).toUpperCase() + cost.slice(1)} !
Your shawarma order [${numberValue} ${selected}] plus 1 shawarma FREE! for \u20A6${chickenString} is confirmed and in progress.
Please check your email (${cost2}) for payment instructions and delivery information.`);
    }

    else if ((currentDay === 0 || currentDay === 6) && (currentHour >= 17 && currentHour < 18)  && (selected === "Mixed Shawarma" && numberValue === 2) ) {

      let percentMixed = 18000 - 1800;
let percentPrice = percentMixed.toLocaleString();
   
      alert(`${greeting} ${cost.charAt(0).toUpperCase() + cost.slice(1)} !
Your shawarma order [${numberValue} ${selected}] at 20% OFF! for \u20A6${percentPrice} is confirmed and in progress.
Please check your email (${cost2}) for payment instructions and delivery information.`);
   }


    else {
      alert(`${greeting} ${cost.charAt(0).toUpperCase() + cost.slice(1)} !
Your shawarma order [${numberValue} ${selected}] for \u20A6${chickenString} is confirmed and in progress.
Please check your email (${cost2}) for payment instructions and delivery information.`);
    }
      }
        , 5500);
        
    setTimeout(function() {
      spinner3.style.display = "none";
      processMsg3.style.display = "none";
      checkMsg3.style.display = "inline-block";
      available3.textContent = "";
        result.value = '';
        result2.value = '';
        result3.value = '';
        result4.value = '';
    }, 6500);
 

}


/*
let result = document.querySelector('.inputed');
let cost = result.value;
const inputValue = document.querySelector(".nameValue");

inputValue.style.bottom = "12px"; 
inputValue.addEventListener('focus', function() {
if(!cost === "") {
   inputValue.style.bottom = "22px";
} 
})
*/
}



/*
  
HOW TO ADD COMMA TO A NUMBER!

let ans = 2
let chickenPrice3 = 5500 * `${ans}`;
let chickenPrice2 = chickenPrice3.toLocaleString();
console.log(chickenPrice2)
*/


document.getElementById("summaryBtn").addEventListener('click', function(){
  window.location.href = "ordersummary.html";

});

 

// adding and subtracting number 
const shawarmaList = document.querySelectorAll(".shawarma-options");
/*

shawarmaList.forEach(option => {

  
  // get the text display element
  let textDisplay = document.getElementById('textDisplay');
  let orderAmountComma;

 

  const checkbox = option.querySelector(".checkBox");
  const incrementButton = option.querySelector(".incrementButton");
  const decrementButton = option.querySelector(".decrementButton");
  const numberList = option.querySelector(".numberQuantity");
  let listedOption = option.querySelector(".listPrice");
  let listOption = listedOption.textContent;
 let optionValue = parseInt(listOption);
 let optionValueComma = optionValue.toLocaleString();
 listedOption.textContent = nairaSign + optionValueComma;
 
let numberQuantity = 1;

incrementButton.addEventListener('click', ()=> {
  if (numberQuantity >= 5) {
    console.log("not less than 1")
  } else {
 
     numberQuantity++;
   let orderAmount = listOption * numberQuantity;
  orderAmountComma = orderAmount.toLocaleString();
   listedOption.textContent = nairaSign + orderAmountComma;
 
    
  }
 
  numberList.textContent = numberQuantity;
 
});


  
decrementButton.addEventListener('click', ()=> {
  if (numberQuantity <= 1) {
    console.log("not more than 1")
  } else {
     numberQuantity--;
     let orderAmount = listOption * numberQuantity;
   let orderAmountComma = orderAmount.toLocaleString();
   listedOption.textContent = nairaSign + orderAmountComma;
 
  }
 
  numberList.textContent = numberQuantity;
  
 
});


checkbox.addEventListener('change', function(){
  //get the label associated with the checkbox
  let label = document.querySelector('label[for="' + checkbox.id + '"]');

  // get the text content of the label
  let checkboxText = label.textContent;

 
  //check if the box is checked
if(checkbox.checked) {
  
  // if checked append the text to the display elelment
  let orderAmount = listOption * numberQuantity;
  let orderAmountComma = orderAmount.toLocaleString();
  listedOption.textContent = nairaSign + orderAmountComma;
  console.log(orderAmountComma)
 textDisplay.textContent += checkboxText  + " - Quantity: " + numberQuantity + " - Subtotal: " + orderAmountComma + "\n";
  console.log(textDisplay.textContent);
}

else {
  //if unchecked remove the text from the display

  textDisplay.textContent = textDisplay.textContent.replace(checkboxText  + " - Quantity: " + numberQuantity + " - Subtotal: " + listedOption.textContent + "\n", '');
  
  console.log(textDisplay.textContent);
}

});

});
alert (textContent.textDisplay)



function summary() {
alert(
  
  textDisplay.textContent)
}
*/

 // alert (`${textDisplay.innerHTML}`)
 






const shawarmaOptions = [
  { name: "Chicken Shawarma", price: 5500 },
  { name: "Beef Shawarma", price: 5000 },
  { name: "Fish Shawarma", price: 6500 },
  { name: "Vegan Shawarma", price: 6000 },
  { name: "Mixed Shawarma", price: 9000 },
  { name: "Shawarma Plate", price: 8000 },
];

const deliveryFee = 500;
const deliveryFeeComma = deliveryFee.toLocaleString();

const shawarmaOptionContainer = document.getElementById("shawarmaOptions");

function showResult(){
  let totalPrice = 0;
  let result = "ORDER SUMMARY: \n";
  let anyChecked = false;
  let mixedTotal = "";
  let mixedTotalComma = "";
  let totalPriceComma = "";

  shawarmaOptions.forEach((option, index) => {
    const checkbox = document.getElementById("shawarmaOption_" + index);
    const quantityDisplay = document.getElementById("quantityDisplay_" + index);


    if (checkbox.checked) {
      anyChecked = true;
      
     
      const quantity = parseInt(quantityDisplay.textContent);
      let subtotal = quantity * option.price;
      const subtotalComma = subtotal.toLocaleString();
      
      totalPrice += subtotal;
      result += option.name + " - Quantity: " + quantity + " - Subtotal: " + `${nairaSign}` + subtotalComma + "\n";

      if ((option.name === "Chicken Shawarma" && quantity === 2) &&(currentDay >= 1 && currentDay <= 5) &&  (currentHour >= 16 && currentHour < 18) ) {
        result += "Weekdays discount: plus 1 sharwama FREE!" + "\n";
      }
      else if ((option.name === "Mixed Shawarma" && quantity === 2) && (currentHour >= 17 || currentHour < 18)) {
        let mixedSubtotal = 18000 - 1800;
        let mixedSubtotalComma = mixedSubtotal.toLocaleString();
         mixedTotal = totalPrice + deliveryFee - 1800 ;
        mixedTotalComma = mixedTotal.toLocaleString();
        console.log(mixedSubtotalComma)

       result = result.replace(subtotalComma, mixedSubtotalComma);

        result += "Weekdends discount: at 20% OFF" + "\n";

       
        result = result.replace(totalPriceComma, mixedTotalComma);

      
      }

    }

    
// &&(currentDay === 0 || currentDay === 6)
  });

  totalPrice += deliveryFee;
  totalPriceComma = totalPrice.toLocaleString();

  if (!anyChecked) {
    alert('Please enter an order!');
  } else {
   
    result += "Delivery fee: " + `${nairaSign}` + deliveryFeeComma + "\n";
    
            
 result += "Total price (including delivery fee): " + `${nairaSign}` + totalPriceComma + "";
  
      
  
      
       


          console.log(totalPriceComma)
   
    window.location.href = "ordersummary.html?result=" + encodeURIComponent(result);
  }

}

shawarmaOptions.forEach((option, index) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = "shawarmaOption_" + index;
  checkbox.name = option.name;
  checkbox.value = option.name;
 
  const quantityDisplay = document.createElement("span");
  quantityDisplay.id = "quantityDisplay_" + index;
  quantityDisplay.textContent = "1";

  const incrementBtn = document.createElement("button");
  incrementBtn.textContent = "+";
  incrementBtn.addEventListener("click", function(){
    const checkbox = document.getElementById("shawarmaOption_" + index);
    if (checkbox.checked) {
    
      let quantity = parseInt((quantityDisplay.textContent));
      if (quantity < 5) {
        quantity++;
        quantityDisplay.textContent = quantity;
      }

    }
  });

  const decrementBtn = document.createElement("button");
  decrementBtn.textContent = "-";
  decrementBtn.addEventListener("click", function(){
    const checkbox = document.getElementById("shawarmaOption_" + index);
    if (checkbox.checked) {
      let quantity = parseInt((quantityDisplay.textContent));
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
      }

    }
  });

  shawarmaOptionContainer.appendChild(checkbox);

  shawarmaOptionContainer.appendChild(document.createTextNode(option.name + " - Price: " + option.price + "naira"));
  shawarmaOptionContainer.appendChild(decrementBtn);
  shawarmaOptionContainer.appendChild(quantityDisplay)
  shawarmaOptionContainer.appendChild(incrementBtn)
  shawarmaOptionContainer.appendChild(document.createElement("br"))

});