// conditional statement

if(5<3)
{
    console.log("conditiona is true")
}
else
{
    console.log("conditiona is false")
}

var value1 = 31;
var value2 = 20;
var value3 = 30;

if(value1 > value2)
{
    console.log("value 1 is bigger than value 2")
}
else if(value1 > value3)
{
    console.log("value 1 is bigger than value 3")
}
else
{
    console.log("value 1 is lesser than value 2 and value 3")
}

// RTO 

// 1. Age limit > 18   L
// 2. Age limit < 80  no L
// 3. Age  == 18 , LL
// 4. Age limit < 18 , no L

var age = 91;

if(age == 18)
{
    console.log("Your are eligible for LL only")
}
else if(age > 18 && age <90)
{
    console.log("Your are eligible for DL")
}
else
{
    console.log("your are not eligible for LL and DL")
}

var a = 10;
var b = 20;
var c = 3;
var d = 1;

console.log(a < b && a > c && a < d)
console.log(a < b || a > c || a < d)