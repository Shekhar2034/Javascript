var myName = "123"

function palindrome(string){
    for(var i = 0; i<(string.length/2); i++)
    {
        console.log(string[i], string[string.length -1 -i])
        if(string[i] !== string[string.length -1 - i])
        {
            return "not a palindrome"
        }
    }
    return "its a palindrome"
}

console.log(palindrome(myName))