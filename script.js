let row=1
let button=document.getElementById("borty")
function coperate(){
    let name= document.getElementById("name").value
    let surety= document.getElementById("surety").value
    let amount= parseFloat(document.getElementById("amount").value)
    let date= document.getElementById("date").value
    let interest= parseFloat(document.getElementById("interest").value)
    let duration= parseFloat(document.getElementById("duration").value)
   
    let tabli= document.getElementById("tabuli")

    if(!name || !surety || !amount || !date || !interest || !duration){
        alert("PLEASE YOU MUST NOT LEAVE ANY OF THE FIELD UNFILLED. THANKS FOR YOUR COMPLIANCE")
        return;
    }

    let newRow= tabli.insertRow(row);
    let cell1= newRow.insertCell(0)
    let cell2= newRow.insertCell(1) 
    let cell3= newRow.insertCell(2)
    let cell4= newRow.insertCell(3)
    let cell5= newRow.insertCell(4)
    let cell6= newRow.insertCell(5)
    let cell7= newRow.insertCell(6)
    let cell8= newRow.insertCell(7)
    let cell9= newRow.insertCell(8)
    let cell10=newRow.insertCell(9)
    row++

    let totalInterest=Math.floor(amount*interest)
    let totalRepayment=Math.floor(amount+totalInterest)
    let monthlyRepayment=Math.floor(totalRepayment/duration)
    let mont=Math.floor(totalRepayment/duration)


    

    cell1.innerHTML=name
    cell2.innerHTML=surety
    cell3.innerHTML=amount
    cell4.innerHTML=date
    cell5.innerHTML=interest
    cell6.innerHTML=duration
    cell7.innerHTML=totalInterest
    cell8.innerHTML=totalRepayment
    cell9.innerHTML=monthlyRepayment
    cell10.innerHTML=monthlyRepayment

    function perio(){
        let y= totalRepayment-monthlyRepayment
        cell8.innerHTML=y
        totalRepayment-=monthlyRepayment
        let x= monthlyRepayment+mont
        cell10.innerHTML=x
        mont+=monthlyRepayment
        if(y<=0){
            clearInterval(clar)
        }
   
        
    }
    let clar= setInterval(perio,5000)
  
}

button.addEventListener("click",coperate)


