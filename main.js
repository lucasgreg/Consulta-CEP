const cep = document.querySelector("#cep")

const showData = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}

cep.addEventListener("blur", (e)=>{
    let cod = cep.value
    const options = {
        method: 'GET',
        mode: 'cors',
        cach: 'default'
    }

    fetch(`https://viacep.com.br/ws/${cod}/json/`, options)
    .then(response => {response.json()
        .then( data => showData(data))
    })
    .catch(e => console.log('Deu erro:'+ e,message))

})