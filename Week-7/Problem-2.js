/*Analysis sales Order of an e-commerce company*/

class Order{
    constructor(){
        this.CustomerID = "";
        this.ProductID = "";
        this.Price = {};
        this.ShopID = "";
        this.Time = "";
    }
}

let orders = [];

function TotalRevenue(){
    let res = 0;
    for(let i = 0; i < orders.length; i++){
        res += orders[i].Price;
    }
    return res;
}

function ShopRevenue(shopID){
    let res = 0;
    for(let i = 0; i < orders.length; i++){
        if(orders[i].ShopID == shopID)
        res += orders[i].Price;
    }
    return res;
}

function TotalConsumeOfCustomerShop(customerID,shopID){
    let res = 0;
    for(let i = 0; i < orders.length; i++){
        if(orders[i].ShopID == shopID && orders[i].CustomerID == customerID)
        res += orders[i].Price;
    }
    return res;
}

function IsEarlier(timeA, timeB){
    if(parseInt(timeA[0]) < parseInt(timeB[0])){
        return true;
    }
    else if(parseInt(timeA[0]) > parseInt(timeB[0])){
        return false;
    }
    else{
        if(parseInt(timeA[1]) < parseInt(timeB[1])){
            return true;
        }
        else if(parseInt(timeA[1]) > parseInt(timeB[1])){
            return false;
        }
        else{
            if(parseInt(timeA[2]) <= parseInt(timeB[2])){
                return true;
            }
            else{
                return false;
            }
        }
    }
}

function RevenueInPeriod(begin, end){
    startTime = begin.split(":");
    endTime = end.split(":");
    let res = 0;
    for(let i = 0; i < orders.length; i++){
        let time = orders[i].Time.split(":");
        if(IsEarlier(startTime, time) && IsEarlier(time, endTime)){
            res += orders[i].Price;
        }
    }
    return res;
}

function AnalyzeSalesOrder(input){
    const lines = input.split('\n');
    
    for(let i = 0; i < lines.length; i++) {
        let query = lines[i].split(" ");
        switch (query[0]){
            case "?total_number_orders":
                console.log(orders.length);
                break;
            case "?total_revenue":
                console.log(TotalRevenue());
                break;
            case "?revenue_of_shop":
                console.log(ShopRevenue(query[1]));
                break;
            case "?total_consume_of_customer_shop":
                console.log(TotalConsumeOfCustomerShop(query[1], query[2]));
                break;
            case "?total_revenue_in_period":
                console.log(RevenueInPeriod(query[1], query[2]));
                break;
            case "#":

                break;
            default:
                let order = new Order();
                order.CustomerID = query[0];
                order.ProductID = query[1];
                order.Price = parseInt(query[2]);
                order.ShopID = query[3];
                order.Time = query[4];
                orders.push(order);
                break;
        }
    }
}

var input = 'C001 P001 10 SHOP001 10:30:10\nC001 P002 30 SHOP001 12:30:10\nC003 P001 40 SHOP002 10:15:20\nC001 P001 80 SHOP002 08:40:10\nC002 P001 130 SHOP001 10:30:10\nC002 P001 160 SHOP003 11:30:20\n#\n?total_number_orders\n?total_revenue\n?revenue_of_shop SHOP001\n?total_consume_of_customer_shop C001 SHOP001 \n?total_revenue_in_period 10:00:00 18:40:45\n#'
AnalyzeSalesOrder(input);