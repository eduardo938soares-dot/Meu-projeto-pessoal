const tenis = true;
const agua = true;
const suplemento= false;
const celular = true;
const documento = false;

// Verificar se os itens básicos estão disponíveis
if (tenis && agua) {
  console.log("Você já tem os itens básicos para a corrida!");
} else {
  console.log("Está faltando tênis ou água.");
}

// Verificar itens opcionais
if (suplemento || celular || documento) {
  console.log("Você também tem pelo menos um item extra.");
} else {
  console.log("Você não tem nenhum item extra.");
}

// Verificar se pode participar da corrida
if (tenis && (documento || celular)) {
  console.log("Você está pronto para participar da corrida!");
} else {
  console.log("Leve seu tênis e documento ou celular antes de sair.");
}
