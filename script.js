let btn = document.querySelector('button')
let resultContainer = document.querySelector('.result-paragraph')
let resultParagraph = document.createElement('p')
resultParagraph.classList.add('result')

btn.addEventListener('click', () => {
    let str = document.getElementById('string').value    

    function reverseAString(str) {
        // write your solution here
    
        let splitStr = str.split(' ')
        let newArray = splitStr.map(element => {
            let word = element.split('')
            let reversedWord = word.reverse()
            let newWord = reversedWord.join('')
            return(newWord)
        });
        let reversedArray = newArray.reverse()
        let newStr = reversedArray.join(' ')
        str = newStr.toString('')    
        return(str)
    }
    resultParagraph.innerHTML= `${reverseAString(str)}`
    resultContainer.appendChild(resultParagraph)
    reverseAString(str)
})
