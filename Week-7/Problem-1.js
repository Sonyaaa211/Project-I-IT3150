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
        Try(1);
        return count;
    }
      
}

let visited = new Array(90);
let transaction = new Transaction();
let k = 0;
let startAccount = "";
let count = 0;

function Check(account, c){
    if(c!==k && account === startAccount) return false;
    for(let i = 1; i < c; i++){
        if(visited[i] == account){ 
            return false;
        }
    }
    return true;
}

function Try(c){
    for(let i = 0; i < transaction.trans.length; i++){
        if(count != 1)
        if(transaction.trans[i][0] == visited[c-1] && Check(transaction.trans[i][1], c)){
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

function BankTransaction(input){
    
    const lines = input.split('\n');
    for(let i = 0; i < lines.length; i++) {
        let query = lines[i].split(" ");
        switch(query[0]){
            case "#":
                break;
            case "?number_transactions":
                console.log(transaction.numberTransaction);
                break;
            case "?total_money_transaction":
                console.log(transaction.totalMoney);
                break;
            case "?list_sorted_accounts":
                console.log(transaction.sortedList());
                break;
            case "?total_money_transaction_from":
                console.log(transaction.moneyFrom(query[1]));
                break;
            case "?inspect_cycle":
                console.log(transaction.checkCycle(query[1], parseInt(query[2])));
                break;
            default:
                transaction.import(query[0], query[1], parseInt(query[2]));
                break;
        }
    };
}

var input1 = 'T000010010 T000010020 1000 10:20:30 ATM1\nT000010010 T000010030 2000 10:02:30 ATM2\nT000010010 T000010040 1500 09:23:30 ATM1\nT000010020 T000010030 3000 08:20:31 ATM1\nT000010030 T000010010 4000 12:40:00 ATM2\nT000010040 T000010010 2000 10:30:00 ATM1\nT000010020 T000010040 3000 08:20:31 ATM1\nT000010040 T000010030 2000 11:30:00 ATM1\nT000010040 T000010030 1000 18:30:00 ATM1\n#\n?number_transactions\n?total_money_transaction\n?list_sorted_accounts\n?total_money_transaction_from T000010010\n?inspect_cycle T000010010 3\n#';
var input2 = 'T000000011 T000000009 2602 21:02:45 atm2\nT000000014 T000000009 3148 05:51:23 atm6\nT000000001 T000000014 9466 22:47:26 atm3\nT000000008 T000000012 3005 22:54:48 atm1\nT000000005 T000000013 4974 18:37:21 atm3\nT000000012 T000000005 5482 15:30:33 atm6\nT000000008 T000000006 7586 10:40:48 atm3\nT000000009 T000000011 3086 13:32:30 atm5\nT000000009 T000000002 10364 07:16:11 atm3\nT000000007 T000000011 3083 13:52:56 atm3\nT000000010 T000000010 8858 22:22:09 atm4\nT000000006 T000000002 1587 11:49:47 atm3\nT000000009 T000000003 4044 08:45:21 atm2\nT000000008 T000000003 3255 18:39:23 atm2\nT000000010 T000000008 7732 22:30:38 atm6\nT000000007 T000000004 5727 20:44:47 atm3\nT000000009 T000000005 2410 18:39:03 atm6\nT000000005 T000000003 4827 12:45:58 atm4\nT000000014 T000000005 9572 16:12:34 atm3\nT000000007 T000000013 1528 09:06:13 atm6\nT000000015 T000000010 6949 14:14:07 atm3\nT000000007 T000000009 8679 14:44:21 atm2\nT000000007 T000000011 2549 17:10:08 atm4\nT000000013 T000000015 3738 16:38:01 atm2\nT000000015 T000000012 10834 18:37:31 atm2\nT000000011 T000000002 8128 23:54:18 atm4\nT000000015 T000000013 1252 09:45:10 atm3\nT000000012 T000000007 4531 15:05:02 atm4\nT000000011 T000000013 1078 16:03:54 atm1\nT000000012 T000000003 9343 17:02:55 atm2\nT000000012 T000000013 2308 18:38:35 atm1\nT000000001 T000000011 3317 13:19:30 atm4\nT000000010 T000000004 8864 13:31:35 atm5\nT000000011 T000000015 2688 10:13:58 atm6\nT000000005 T000000009 1721 22:26:26 atm6\nT000000014 T000000009 3639 01:41:33 atm3\nT000000009 T000000014 4349 11:09:04 atm2\nT000000011 T000000008 3028 23:17:32 atm3\nT000000007 T000000006 9309 14:18:48 atm5\nT000000011 T000000003 9476 17:00:41 atm5\n#\n?inspect_cycle T000000009 6\n?inspect_cycle T000000012 3\n?inspect_cycle T000000010 5\n?inspect_cycle T000000005 3\n?inspect_cycle T000000015 4\n?inspect_cycle T000000007 3\n?inspect_cycle T000000008 4\n?inspect_cycle T000000005 5\n?inspect_cycle T000000010 6\n?inspect_cycle T000000010 4\n?inspect_cycle T000000012 2\n?inspect_cycle T000000010 6\n?inspect_cycle T000000007 3\n?inspect_cycle T000000004 4\n?inspect_cycle T000000009 3\n#'
var input3 = 'T000000005 T000000001 6679 22:01:46 atm6\nT000000001 T000000005 1117 19:29:31 atm4\nT000000003 T000000001 9217 15:34:19 atm2\nT000000004 T000000005 8427 11:48:30 atm3\nT000000002 T000000005 10140 08:19:42 atm2\nT000000003 T000000003 8156 01:57:36 atm3\nT000000001 T000000004 3125 15:38:39 atm2\nT000000002 T000000003 3177 07:27:44 atm3\nT000000002 T000000002 8462 15:18:13 atm6\nT000000004 T000000002 10586 10:34:04 atm5\n#\n?inspect_cycle T000000002 2\n?inspect_cycle T000000001 2\n?inspect_cycle T000000004 2\n?inspect_cycle T000000005 4\n?inspect_cycle T000000002 2\n#\n'
BankTransaction(input2);