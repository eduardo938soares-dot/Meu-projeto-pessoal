
//---Lista de equipamentos basicos para 5km na sua cidade---
const tenis = true;
const agua = true;
const caixaDeSom = false;
const celular = true;
const documento = true;
const dinheiro = false;
const alimento = false;

// Verificar se os itens básicos estão disponíveis
if (tenis && agua) {
  console.log("Você já tem os itens básicos para a corrida!");
} else {
  console.log("Está faltando tênis ou água.");
}

// Verificar itens opcionais
if ( caixaDeSom || celular || documento ) {
  console.log("esta presente pelo menos 1 item opicional");
} else {
  console.log("Você não tem nenhum item extra.");
}

// verificando itens que não precisa
if (caixaDeSom){
  console.log("item é necessario")
} else {
  console.log("item não necessario")
}

// Verificar se pode participar da corrida
if (tenis &&  documento || (celular)) {
  console.log("Você está quase pronto!");
} else {
  console.log("Leve seu tênis e documento ou celular antes de sair.");
}

if (documento) {
  console.log("não esqueça documento")
} else{
  console.log("está tudo ok com os documentos")
}
if (tenis) {
  console.log("tenis está ok")
} else{
  console.log("não esqueça do tenis")
}
if(celular) {
  console.log("celular está ok")
} else{
  console.log("Não esqueça do celular")
} 

// verificar alimentação
if (dinheiro || alimento) {
  console.log("você tem algum dinheiro ou alimento")
} else{
  console.log("leve dinheiro ou alimento")
}

//resumo de tudo
const resumo = `
tenis: ${tenis}
agua: ${agua}
caixaDeSom: ${caixaDeSom}
celular: ${celular}
documento: ${documento}
dinheiro: ${dinheiro}
alimento: ${alimento}
`;

console.log(resumo);
