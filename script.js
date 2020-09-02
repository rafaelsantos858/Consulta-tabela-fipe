async function loadMarcas(veiculo) {

    var response = await fetch("https://parallelum.com.br/fipe/api/v1/" + veiculo + "/marcas");
    var marcas = await response.json();
    var select = document.getElementById('marcas')

    for (let i = 0; i < marcas.length; i++) {

        select.innerHTML += "<option value=" + marcas[i].codigo + ">" + marcas[i].nome + "</option>"
    }
    
}


async function loadModelos(marca) {

    var veiculo = document.getElementById('veiculo').value
    var response = await fetch("https://parallelum.com.br/fipe/api/v1/"+veiculo+"/marcas/"+marca+"/modelos");
    var modelos = await response.json();
    var select = document.getElementById('modelo')

    for (let i = 0; i < modelos.modelos.length; i++) {

        select.innerHTML += "<option value=" + modelos.modelos[i].codigo + ">" + modelos.modelos[i].nome + "</option>"
    }

    
}

async function loadAno(modelo) {

    var veiculo = document.getElementById('veiculo').value
    var marca = document.getElementById('marcas').value
    var response = await fetch("https://parallelum.com.br/fipe/api/v1/"+veiculo+"/marcas/"+marca+"/modelos/"+modelo+"/anos");
    var anos = await response.json();
    var select = document.getElementById('ano')


    // console.log(anos);
    // console.log(anos[0].nome);  //ano veiculo 
    // console.log(anos[0].codigo); // codigo veiculo  

    for (let i = 0; i < anos.length; i++) {

        select.innerHTML += "<option value=" + anos[i].codigo + ">" + anos[i].nome + "</option>"
    }

}

async function loadValor(ano) {

    console.log(veiculo);

    var veiculo = document.getElementById('veiculo').value
    var marca = document.getElementById('marcas').value
    var modelo = document.getElementById('modelo').value
    var response = await fetch("https://parallelum.com.br/fipe/api/v1/"+veiculo+"/marcas/"+marca+"/modelos/"+modelo+"/anos/"+ano);                       
    var valor = await response.json();
    var section = document.getElementById('sec1')   

    var nomecarro = valor.Modelo
    var valorcarro = valor.Valor
    var combustivelcarro = valor.Combustivel
    var anocarro = valor.AnoModelo
    var codiofipe = valor.CodigoFipe

    console.log(valorcarro);
    
   
    section.innerHTML = "<div id='cardfipe'><p>"+nomecarro+"</p> <br> <p>"+anocarro+"</p> <br> <p>"+valorcarro+"</p> <br> <p>"+combustivelcarro+"</p> <br><p>"+codiofipe+"</p> </div>"

}











