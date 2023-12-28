/*
Hiện tại giá điện đang được tính theo bậc thang gồm 6 mức (mức điều chỉnh từ 04/05/2023), 
với giá thấp nhất (bậc 1) là 1.728VND và giá bậc cao nhất là 3.015 VND. 
Tuy nhiên EVN đang đề xuất một cách tính giá điện bậc thang mới chỉ gồm 5 mức như hinh dưới, 
giá thấp nhất (bậc 1) khoảng 1.728 đồng một kWh và cao nhất (bậc 5) là 3.457 đồng một kWh. 

Bậc	Biểu giá hiện hành	Phương án 5 bậc
  	Mức sử dụng	Giá (*)	Mức sử dụng	Giá
1	0-50 kWh	1.728	0-100 kWh	1.728
2	51-100 kWh	1.786	101-200 kWh	2.074
3	101-200 kWh	2.074	201-400 kWh	2.612
4	201-300 kWh	2.612	401-700 kWh	3.111
5	301-400 kWh	2.919	701 kWh trở lên	3.457
6  	401 kWh trở lên	3.015		
(*) Giá chưa bao gồm thuế VAT
*/

solution = function(n = 1){
    let sum = 0;
    let temp = max(n-700, 0); n-700 > 0 ? n -700 : 0;
    sum += temp*442;
    temp = n>400?min(n-400, 300):0;
    sum += temp*96;
    temp = n>300?min(n-300, 100):0;
    sum += temp*-307;
    temp = n>50?min(n-50, 50):0;
    sum += temp*-58;
    return sum * 1.1;
}

min = function(a, b){
    return a<b?a:b;
}

max = function(a, b){
    return a>b?a:b;
}

console.log(solution(540));