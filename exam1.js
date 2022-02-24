//function to check palindrom string
function checkPalindrome(str){
    const arrvalue= str.split('');
    const reverseArr=arrvalue.reverse()
    const reverseStr=reverseArr.join('')
    if(str==reverseStr){
        console.log('It is a palindrome');
    }
    else{
        console.log('It is not a palindrome')
    }
}
//input from user
const input=prompt("Enter a string")
checkPalindrome(input)