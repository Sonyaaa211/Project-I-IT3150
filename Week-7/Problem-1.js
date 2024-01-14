project.problemInfo[40] = "Bank Transaction"

class Transaction{
    constructor(){
        this.numberTransaction = 0;
        this.totalMoney = 0;
        this.accountInfo = {};
        this.accountName = [];
        this.trans = [];
    }

    import(accountFrom, accountTo, money){
        if(this.accountInfo.hasOwnProperty(accountFrom)){
            this.accountInfo[accountFrom] += money;
        }
        else{
            this.accountInfo[accountFrom] = money;
            this.accountName.push(accountFrom);
        }
        if(!this.accountInfo.hasOwnProperty(accountTo)){
            this.accountInfo[accountTo] = 0;
            this.accountName.push(accountTo);
        }
        this.totalMoney += money;
        this.numberTransaction++;
        var tmp = [accountFrom, accountTo];
        if(accountFrom != accountTo);
        this.trans.push(tmp);
    }

    sortedList() {
        return this.accountName.sort();
    }
    
    moneyFrom(accountFrom){
        return this.accountInfo[accountFrom];
    }
    
    checkCycle(accountFrom, length) {
        k = length;
        startAccount = accountFrom;
        count = 0;
        visited[0]=startAccount;
        project.backtracking71(1);
        return count;
    }
      
}

let visited = new Array(90);
let transaction = new Transaction();


project.check71 = function(account, c){
    if(c!==k && account === startAccount) return false;
    for(let i = 1; i < c; i++){
        if(visited[i] == account){ 
            return false;
        }
    }
    return true;
}

project.backtracking71 = function(c){
    for(let i = 0; i < transaction.trans.length; i++){
        if(count != 1)
        if(transaction.trans[i][0] == visited[c-1] && project.check71(transaction.trans[i][1], c)){
            visited[c] = transaction.trans[i][1];
            if(c == k){
                if(visited[k] == startAccount){
                    count=1;
                }
            }
            else{
                Try(c+1);
            }
        }
    }
}

project.solution_7_1 = function(input){
    project.visited = new Array(90);
    transaction = new Transaction();
    const lines = input.split('\n');
    for(let i = 0; i < lines.length; i++) {
        let query = lines[i].split(" ");
        switch(query[0]){
            case "#":
                break;
            case "?number_transactions":
                project.res += transaction.numberTransaction + "\n";
                break;
            case "?total_money_transaction":
                project.res += transaction.totalMoney + "\n";
                break;
            case "?list_sorted_accounts":
                project.res += transaction.sortedList() + "\n";
                break;
            case "?total_money_transaction_from":
                project.res += transaction.moneyFrom(query[1]) + "\n";
                break;
            case "?inspect_cycle":
                project.res += transaction.checkCycle(query[1], parseInt(query[2])) + "\n";
                break;
            default:
                transaction.import(query[0], query[1], parseInt(query[2]));
                break;
        }
    };
    return project.res;
}