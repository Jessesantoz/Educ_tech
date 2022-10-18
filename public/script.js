async function requestHTTP(url, method, body) {
    const myHeaders = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }

const options = {
    method,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify(body),
    headers: myHeaders
}

const res = await fetch(url, options);
const error = !res.ok;
const result = await res.json();

return { error, result};
}

async function save() {

const body = { 
    nome: document.getElementById('nome').value,
    participacao: document.getElementById('participacao').value
}


console.log(body)

const {error, result} = await requestHTTP('/participe', 'POST', body);

if (error) {
    const errorLabel = document.getElementById('errorAviso')
    if (errorLabel) {
        let message = ''

        for (let i = 0; i < result.msgs.length; i++) {
            message = message + ', ' + result.msgs[i]
        }
        errorLabel.textContent = message.slice(2, message.length)
    } else {
        console.error('Falha ao selecionar elemento!')
    }
    return
}}