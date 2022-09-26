let isPalindrome = (word) => {
    if (word) {
        word = word.toLowerCase();
        
        // Array reverse method
        //return word === word.split('').reverse().join("");

        // Array reduce example
        const reverseWord = word.split('').reduce((prev,curr) => curr + prev);
        
        return word === reverseWord;
    } else {
        return false;
    }
}

const btnPalindrome = document.getElementById("btnPalindrome");
const inputPalindrome = document.getElementById("inputPalindrome");
const message = document.getElementById("resultPalindrome");

if (btnPalindrome && inputPalindrome && resultPalindrome) {
    btnPalindrome.addEventListener("click", () => {
        const result = isPalindrome(inputPalindrome.value);

        if (result) {
            message.innerText = "C'est un palindrome!";
        } else {
            message.innerText = "Ce n'est pas un palindrome!";
        }
    });
}