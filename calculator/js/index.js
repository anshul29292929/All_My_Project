
(function() {
    let inputString = "";
    let buttons = document.querySelectorAll(".calculator-button");
    let display = document.querySelector(".input");

    Array.from(buttons).forEach((item) => {
        item.addEventListener('click', (e) => {
            let k=e.target.innerHTML;
            try{
                if (k=="="){
                    inputString=eval(inputString);
                }
                else if (k=="×"){
                    inputString += '*';
                }
                else if (k=="%"){
                    inputString += '%';
                }
                else if (k=="+"){
                    inputString +='+';
                }
                else if(k=="÷"){
                    inputString += '/';
                }
                else if(k=="-"){
                    inputString += '-';
                }
                else if(k=="C"){
                    inputString ="";
                }
                else if(k=="."){
                    inputString +=".";
                }
                else{
                inputString += e.target.innerHTML;
                inputString =eval(inputString);
                }
                display.value = inputString;
            } catch(error){
                display.value="error";
            }
        });
    });
})();
