function addNewWEField(){
   
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefeild");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here")

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weaddbutton");

    weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfeild");
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder","Enter here")

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqaddbutton");

    aqOb.insertBefore(newNode,aqaddbutton);
}
function generateCV(){
    let namefield=document.getElementById("namefield").value ;
    let namet1=document.getElementById("nameT1");
    namet1.innerHTML= namefield;

    document.getElementById("nameT2").innerHTML=namefield;

    document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;
    document.getElementById("emailT").innerHTML=document.getElementById("emailfield").value;
    document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;
    document.getElementById("lkT").innerHTML=document.getElementById("ldfield").value;
    document.getElementById("ghT").innerHTML=document.getElementById("gitfield").value;

    document.getElementById("psummaryT").innerHTML=document.getElementById("psfield").value;
     let wes=document.getElementsByClassName("wefeild");
     let str="";
     for(let e of wes){
        str=str+'<li> ${e.value} </li>';

     }
     document.getElementById("weT").innerHTML=str;

     let aqs=document.getElementsByClassName("aqfeild");
     let str1="";
     for(let e of aqs){
        str1=str1 +'<li> ${e.value} </li>';

     }
     document.getElementById("aqT").innerHTML=str1;
document.getElementById("cv-form").style.display='none';
document.getElementById("cv-template").style.display='block';
    
}
function printCV(){
    window.print();
}