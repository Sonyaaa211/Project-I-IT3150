project.problemInfo[41] = "Analysis sales Order of an e-commerce company"

class Order{
    constructor(){
        this.CustomerID = "";
        this.ProductID = "";
        this.Price = {};
        this.ShopID = "";
        this.Time = "";
    }
}

project.orders = [];

project.TotalRevenue = function(){
    let res = 0;
    for(let i = 0; i < project.orders.length; i++){
        res += project.orders[i].Price;
    }
    return res;
}

project.ShopRevenue = function(shopID){
    let res = 0;
    for(let i = 0; i < project.orders.length; i++){
        if(project.orders[i].ShopID == shopID)
        res += project.orders[i].Price;
    }
    return res;
}

project.TotalConsumeOfCustomerShop = function(customerID,shopID){
    let res = 0;
    for(let i = 0; i < project.orders.length; i++){
        if(project.orders[i].ShopID == shopID && project.orders[i].CustomerID == customerID)
        res += project.orders[i].Price;
    }
    return res;
}

project.IsEarlier = function(timeA, timeB){
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

project.RevenueInPeriod = function(begin, end){
    let startTime = begin.split(":");
    let endTime = end.split(":");
    let res = 0;
    for(let i = 0; i < project.orders.length; i++){
        let time = project.orders[i].Time.split(":");
        if(project.IsEarlier(startTime, time) && project.IsEarlier(time, endTime)){
            res += project.orders[i].Price;
        }
    }
    return res;
}

project.solution_7_2 = function(input){
    const lines = input.split('\n');
    
    for(let i = 0; i < lines.length; i++) {
        let query = lines[i].split(" ");
        switch (query[0]){
            case "?total_number_orders":
                project.res += project.orders.length + "\n";
                break;
            case "?total_revenue":
                project.res += project.TotalRevenue() + "\n";
                break;
            case "?revenue_of_shop":
                project.res += project.ShopRevenue(query[1]) + "\n";
                break;
            case "?total_consume_of_customer_shop":
                project.res += project.TotalConsumeOfCustomerShop(query[1], query[2]) + "\n";
                break;
            case "?total_revenue_in_period":
                project.res += project.RevenueInPeriod(query[1], query[2]) + "\n";
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
                project.orders.push(order);
                break;
        }
    }
    return project.res;
}

var input = 'C001 P001 10 SHOP001 10:30:10\nC001 P002 30 SHOP001 12:30:10\nC003 P001 40 SHOP002 10:15:20\nC001 P001 80 SHOP002 08:40:10\nC002 P001 130 SHOP001 10:30:10\nC002 P001 160 SHOP003 11:30:20\n#\n?total_number_orders\n?total_revenue\n?revenue_of_shop SHOP001\n?total_consume_of_customer_shop C001 SHOP001 \n?total_revenue_in_period 10:00:00 18:40:45\n#'