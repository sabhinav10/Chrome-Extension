/*function saveLead(){
    console.log("lead saved");
}
*/
let myLeads =[];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

//creating the local storage
//localStorage.setItem("myLeads","www.amazon.com");
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear();
//converting to string
//myLeads = `["www.amazon.com"]`;
//converting to array
//myLeads = JSON.parse(myLeads);
//push new value to the array
//myLeads.push("wwe.com");
//coverting it back to string
//myLeads = JSON.stringify(myLeads);
//verifying type of myLeads
//console.log(typeof myLeads);
//delete button
let deleteBtn = document.getElementById("delete-btn");
//listening to deleteBtn
deleteBtn.addEventListener("dblclick" , function(){
    localStorage.clear();
    myLeads=[];
    renderLead();
});
//rendering stored leads 
let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadFromLocalStorage);
if(leadFromLocalStorage){
    myLeads = leadFromLocalStorage ;
    renderLead();
}
//using addEventListener
inputBtn.addEventListener("click",function(){
    console.log("invoking function using addEventListener");
    let inputValue = inputEl.value;
    myLeads.push(inputValue);
    //clearing the input field
     inputEl.value = "";
    //storing the leads in local storage
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    console.log(localStorage.getItem("myLeads"));
    console.log(myLeads);
    renderLead();
    
   

});

function renderLead(){
    let listItems = "";
    //using innerHTML instead of textContent to render the saved leads using li tags
       for(let i=0;i<myLeads.length;i++){
    //using template strings   
     listItems += `<li>
                        <a target = '_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
                    </li>`;
    //using createElement function
    //creating li element
   // const li = document.createElement("li");
    //setting text content
    //li.textContent = myLeads[i] ;
    //appending li to ulEl
    //ulEl.append(li);
}
    ulEl.innerHTML = listItems;
}