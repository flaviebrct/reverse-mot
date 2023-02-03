let btn = document.querySelector('button')
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
    
        let resultContainer = document.querySelector('.result-paragraph')
        let resultParagraph = document.createElement('p')
        resultParagraph.classList.add('result')
        resultParagraph.innerHTML= str
        resultContainer.appendChild(resultParagraph)
        return(str)
    }
    reverseAString(str)
})
