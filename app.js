/*function saveLead(){
    console.log("lead saved");
}
*/
let myLeads =[];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

//using addEventListener
inputBtn.addEventListener("click",function(){
    console.log("invoking function using addEventListener");
    let inputValue = inputEl.value;
    myLeads.push(inputValue);
    console.log(myLeads);
    renderLead();
    //clearing the input field
    inputEl.value = "";

});

function renderLead(){
    let listItems = "";
    //using innerHTML instead of textContent to render the saved leads using li tags
       for(let i=0;i<myLeads.length;i++){
    //using template strings   
     listItems += `<li>
                        <a target = '_blank' href='${myLeads[i]}'>" + ${myLeads[i]} + "</a>
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