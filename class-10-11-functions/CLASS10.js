const addTwoAndSeven = () => { 
    return 2 + 7
};
console.log(addTwoAndSeven());     //what is the difference between calling and adding console

const addThreeAndFour = () =>{
    return 3 + 4
};
console.log(addThreeAndFour());

const calculateSum = (num1,num2) => {
    return num1 + num2
};
console.log(calculateSum(2,5));
console.log(calculateSum(10,10));
console.log(calculateSum(5,5));

const calculateDifference = (num1,num2) => {
    return num1 - num2
};
console.log (calculateDifference(12,5));
console.log (calculateDifference(9,2));
console.log (calculateDifference(10,1));

const calculateProduct = (num1,num2) => {
    return num1 * num2
};
console.log (calculateProduct(12,5));
console.log (calculateProduct(9,2));
console.log (calculateProduct(10,1));

const calculateQuotient = (num1,num2) => {
    return num1 / num2
};
console.log (calculateQuotient(12,5));
console.log (calculateQuotient(9,2));
console.log (calculateQuotient(3,0));

const calculateSquare = (num1,num2) => {
    return num1 ** num2
};
console.log (calculateSquare(12,5));
console.log (calculateSquare(9,2));
console.log (calculateSquare(10,1));      //we are asked to call differently,why.

const calculateSquareRoot = (num1) => {
    return Math.sqrt(num1);
};
console.log(Math.sqrt(81));
console.log (Math.sqrt(9));
console.log (Math.sqrt(10));     
