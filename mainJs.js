function insert(num) {
    document.querySelector('.result').textContent += num;
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

function del() {
    let string = document.querySelector('.result').textContent;

    string = string.split('').slice(0, string.length - 1).join('');

    document.querySelector('.result').textContent = string;
}
