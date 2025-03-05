const BASE_URL="https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json"

const dropdowns=document.querySelectorAll(".dropdown select");

for (let select of dropdowns){
    for (currCode in countryList){
        let newOp=document.createElement("option");
        newOp.innerText=currCode;
        newOp.value=currCode;
        if(select.name==="from" && currCode==="USD"){
            newOp.selected="selected";
        }
        if(select.name==="to" && currCode==="INR"){
            newOp.selected="selected";
        }
        select.append(newOp);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}

const updateFlag=(el)=>{
    let currCode=el.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=el.parentElement.querySelector("img");
    img.src=newSrc;
}
