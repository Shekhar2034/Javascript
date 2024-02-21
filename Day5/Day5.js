function login(){
    console.log("hi from function")
}

login();

// Q Find addition of odd numbers from given Range. 

function addition(value1, value2){
    var count = 0;
    for( var i = value1; i <= value2; i++)
    {
        if(i % 2 ==1)
        {
            count +=i
        }
    }
    return count;
}

const ans = addition(34,38);
console.log(ans)

function Fact(value){
    if(value <= 0)
    {
        return 1;
    }
    var ans
    for(var i = 1; i <= value; i++)
    {
        if (ans == undefined) {
            ans = i           
        }
        else{
            ans *=1
        }
    }
    return ans;
}

var result = Fact(1)
console.log(result)

var students = ["shekhar", "Santosh", "Mahesh", 12, true]

console.log(students)

var studentss = ["virar", "rohit" ,"rahul"]
console.log(studentss.length)
console.log(studentss[2])
console.log(studentss[studentss.length-1])
console.log(studentss)
studentss.push("Mchi")
console.log(studentss)

for(var i = 0; i < studentss.length; i++)
{
    if (studentss[i] == "rohit") {
        console.log(i + 1)     
    }
}

var myName;

if(myName == undefined){
    myName = "awdiz"
    console.log(myName)
}
else{
    console.log("myname is defined")
}

console.log(myname, typeof(myname))