// const inputCep = document.querySelector("#cep");
// const BASE_URL = "https://brasilapi.com.br/api";

// inputCep.onkeyup = (evento) => {
//     //verificando o cep cumpriu os 8 digitos
//     if (inputCep.value.length < 8) {
//     return;
// }
// //fazendo uma requisição a api BRASILAPI para buscar as informações com o cep digitado
//     const resposta = await fetch(`$[BASE_URL}/cep/v1/${inputCep.value}`, {
//         method: "GET",
//     });

//     console.log(resposta);
//     alert("Cep completo: " + inputCep.value);
// };



const inputCep = document.querySelector("#cep");
const BASE_URL = "https://brasilapi.com.br/api";
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");


inputCep.onkeyup = async (evento) => {
  //verificando se o cep cumpriu os 8 digitos
  if (inputCep.value.length < 8) {
    return;
  }
  //fazendo uma requisição a api BRASILAPI para buscar as informações com o cep digitado
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
    method: "GET",
  });
    // extraindo json da resposta
    const conteudoResposta = await resposta.json();
  //atribuindo os dados da resposta nos inputs html
  inputRua.value =  conteudoResposta.street;
  inputBairro.value =  conteudoResposta.neighborhood;
  inputUF.value =  conteudoResposta.UF;
  inputComplemento.value =  conteudoResposta.city;
    
  console.log(conteudoResposta);
    //  alert("Cep completo: " + inputCep.value);
};
