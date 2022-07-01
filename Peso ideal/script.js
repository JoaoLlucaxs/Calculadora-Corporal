const nomedPessoa = document.querySelector('.name');
const altura = document.querySelector('.altura');
const btn = document.querySelector('.js_calculo');
const btnLimpa = document.querySelector('.js_limpa');
const masculino = (document.querySelector('.masculino').checked = true);
const modal = document.querySelector('.campo_resultado');
const campoResposta = document.querySelector('.resultado h2');
const fecharModal = document.querySelector('.fechar');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  const nome = nomedPessoa.value;
  const alturaPessoa = +altura.value;

  let peso;
  if (masculino) {
    modal.style.display = 'flex';
    peso = 22 * Math.pow(alturaPessoa, 2);
    campoResposta.innerHTML = `Olá ${nome} seu peso ideal é de ${peso.toFixed(
      2,
    )}`;
  } else {
    modal.style.display = 'flex';
    peso = 21 * Math.pow(alturaPessoa, 2);
    campoResposta.innerHTML = `Olá ${nome} seu peso ideal é de ${peso.toFixed(
      2,
    )}`;
  }
});

btnLimpa.addEventListener('reset', btn);

fecharModal.addEventListener('click', () => {
  modal.style.display = 'none';
});
