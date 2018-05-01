const account = {
    name : 'Dolly',
    expenses : [],
    addExpenses :  function (description, cost){
        this.expenses.push({
            description : description,
            cost : cost
        })
    }
}

addExpenses('Rent', 150);
addExpenses('Coffee', 2);
console.log(account);
