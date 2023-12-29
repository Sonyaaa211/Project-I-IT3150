/*
Given a sequence of integer a1, a2, ..., an. Count the number of odd elements and even elements of the sequence.
*/
solution = function(arr){
    const even = arr.filter(x =>{ return x%2 === 0});
    console.log(even.length.toString() + " " + (arr.length-even.length).toString());
}
solution([1, 2, 3, 4, 5, 6, 7, 8]);