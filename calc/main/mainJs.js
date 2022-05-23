function insert(num) {
    document.querySelector('.result').textContent = document.querySelector('.result').textContent + num
}

function cleanAll() {
    document.querySelector('.result').textContent = ''
}

function equal() {
    let result = document.querySelector('.result').textContent

    if (result) {
        document.querySelector('.result').textContent = eval(result)
    }
} 
