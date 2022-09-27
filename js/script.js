let total = 100
console.log(total)
let newTotal = total
let expenses
let halfBudget = true
let lowBudget = true

while (newTotal > 0) {
    expenses = Math.round(Math.random() * 10)
    newTotal = newTotal - expenses
    console.log(newTotal)
    if (newTotal > 0) {
        document.getElementById("wallet").innerHTML += `<div class ="soldi-rimasti">Hai speso ${expenses}€, ti sono rimasti ${newTotal}€</div>`
    }
    console.log(newTotal)
   
    if (newTotal <= total * 0.2) {
        if (lowBudget == true) {
            document.getElementById("wallet").innerHTML += `<div class ="warning"> Stai per finire i tuoi soldi, spendili con attenzione!</div>`
            lowBudget = false
        }
    }
    else  if (newTotal <= total / 2) {
        if (halfBudget == true) {
            document.getElementById("wallet").innerHTML += `<div class ="warning"> Sei a metà del tuo budget!</div>`
            halfBudget = false
        }
    }
}
   document.getElementById("wallet").innerHTML += `<div class= "warning"> Sei rimasto a secco, soldi finiti!</div>`
 