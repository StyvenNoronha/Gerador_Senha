//seleção de elementos
const generatePasswordButton = document.querySelector("#generate-password")
const generatePasswordElement = document.querySelector("#generated-password")
//Funções
const getLetterLoweCase = () => {
    return String.fromCharCode(Math.floor(Math.random()* 26)+97)
}
const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random()* 26)+65)
}
const getNumber = () =>{
    return Math.floor(Math.random()*10).toString()
}
const getSymbol = ()=>{
    const symbols = "!@#$%¨&*()_+}{`^?:><,.;"
    return symbols[Math.floor(Math.random() * symbols.length)]

}

const generatePassword = (getLetterLoweCase,getLetterUpperCase,getNumber,getSymbol)=>{
    let password = ""
    const passwordLength = 10
    const generators = [
        getLetterLoweCase,
        getLetterUpperCase,
        getNumber,
        getSymbol
    ];

    for(i=0;i<passwordLength;i=i+4){
        generators.forEach(()=>{
            const randomValue = 
            generators[Math.floor(Math.random() * generators.length)]()
            password += randomValue
        });
    }
    generatePasswordElement.computedStyleMap.display = "block";
    generatePasswordElement.querySelector("h4").innerText = password;
};
//letras, numeros e simbolos

//Eventos
generatePasswordButton.addEventListener("click",()=>{
   generatePassword(
    getLetterLoweCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
   )
})