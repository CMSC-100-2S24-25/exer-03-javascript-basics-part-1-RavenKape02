function numUpperLowerChecker(password){
    let hasNumber = false;
    let hasUpperCase = false;
    let hasLowerCase = false;

    for(let i = 0; i<password.length; i++){
        let current_char = password[i];
        if(!isNaN(current_char) && (current_char !== ' ')){
            hasNumber = true;
        }

        if((current_char === current_char.toUpperCase()) && (current_char !== current_char.toLowerCase())){
            hasUpperCase = true;
        }

        if( (current_char === current_char.toLowerCase()) && (current_char !== current_char.toUpperCase()) ){
            hasLowerCase = true;
        }
    }
    
    if(hasNumber && hasUpperCase && hasLowerCase){
        return true;
    }
    return false;
}
function validatePassword(password1, password2){
    if(password1 === password2){
        if((password1.length >= 8) && (password2.length >= 8)){
            if(numUpperLowerChecker(password1) && numUpperLowerChecker(password2)){
                return true;
            }
            return false;
        }
        return false
    }
    return false;
}

function reversePass(password){
    let reversedPass = '';
    for(let i = password.length-1; i >= 0; i--){
        let current_char = password[i];
        reversedPass = reversedPass + current_char;
    }
    return reversedPass;
}

function storePassword(username, password1, password2){
    let nameAndNewPass = {
        newUsername: '',
        newPassword: ''
    }

    nameAndNewPass.newUsername = username;

    if(validatePassword(password1, password2)){
        nameAndNewPass.newPassword = reversePass(password1);
    }
    else{
        nameAndNewPass.newPassword = password1;
    }

    return nameAndNewPass;
}

console.log("Comparing \"helloworld\" and \"hello\", result is: "+validatePassword("helloworld", "hello")); //returns false
console.log("Comparing \"hello\" and \"hello\", result is: "+validatePassword("hello", "hello")); //returns false
console.log("Comparing \"hello1234\" and \"hello1234\", result is: "+validatePassword("hello1234", "hello1234")); //returns false
console.log("Comparing \"Hello1234\" and \"Hello1234\", result is: "+validatePassword("Hello1234", "Hello1234")); //returns true
console.log("Comparing \"HELLO1234\" and \"HELLO1234\", result is: "+validatePassword("HELLO1234", "HELLO1234")); //returns false

console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));