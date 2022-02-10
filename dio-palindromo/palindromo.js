function verificaPalindromo(string){
    if(!string) return "Não existe Palindromo";

    return string.split("").reverse().join("") === string;
}