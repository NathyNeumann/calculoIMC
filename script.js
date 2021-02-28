//pega o botão submit do formulario
let btnIncluir = document.querySelector("input[value='Incluir']");

//inclui evento de clic no botão submit
btnIncluir.addEventListener('click', function(event){

            //tira padrao de recarregar
        event.preventDefault();

        //pega todo o formulario
        let formulario = document.getElementById('IdFormulario');

        //chama a montagem de dados do usuario
        let usuario = getDadosUsuario(formulario);

        //chama montagem linha tabela
        let linha = montagemLinha(usuario)

        let bodyTable = document.getElementById('idtablebody')
        bodyTable.appendChild(linha);

        //limpa formulario
        formulario.reset();
});

//cria um objeto com os dados do usuário
function getDadosUsuario(formulario){
    
    let dadosUs ={
        nome: formulario.idNome.value,
        idade: formulario.idIdade.value,
        altura: formulario.idAltura.value,
        peso: formulario.idPeso.value,
        imc: formulario.idPeso.value /(formulario.idAltura.value**2)
    }
   
    return dadosUs
}

function montagemLinha(dadosUs, classes){
    let linha = document.createElement('tr');
    linha.classList.add('linhaDados');
    linha.appendChild(montagemdoCampo(dadosUs.nome, 'campoNome', 'text-center'));
    linha.appendChild(montagemdoCampo(dadosUs.idade, 'campoIdade', 'text-center'));
    linha.appendChild(montagemdoCampo(dadosUs.altura, 'campoAltura', 'text-center'));
    linha.appendChild(montagemdoCampo(dadosUs.peso, 'campoPeso','text-center' ));
    linha.appendChild(montagemdoCampo(dadosUs.imc, 'campoIMC','text-center' ));
    
    return linha
}

function montagemdoCampo(dadosUs, classe1, classe2){
    let campo = document.createElement('td');
    campo.textContent = dadosUs;
    campo.classList.add(classe1);
    campo.classList.add(classe2);
    return campo

}

let bodyTable = document.getElementById('idtablebody')

bodyTable.addEventListener('dblclick', function(event){
    event.target.parentNode.remove();
})