let totalValue = 0;
let carrinho = [];

function formatar(valor) {
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function filtrar(tipo) {
  let produtos = document.querySelectorAll('.card');

  produtos.forEach(p => {
    if (tipo === 'todos') {
      p.style.display = 'block';
    } else {
      p.style.display = p.classList.contains(tipo) ? 'block' : 'none';
    }
  });
}

function addToCart(nome, preco) {
  carrinho.push({ nome, preco });
  totalValue += preco;

  document.getElementById('cart-total').innerText =
    formatar(totalValue).replace('R$', '').trim();

  atualizarCarrinho();
}

function atualizarCarrinho() {
  let lista = document.getElementById('lista-carrinho');
  lista.innerHTML = '';

  carrinho.forEach((item, index) => {
    let li = document.createElement('li');

    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.borderBottom = '1px solid #eee';
    li.style.padding = '10px 0';

    li.innerHTML = `
      <span>${item.nome}</span>
      <span>${formatar(item.preco)}</span>
      <button onclick="removerItem(${index})" style="
        background:none;
        color:red;
        font-weight:bold;
        font-size:16px;
        cursor:pointer;
        border:none;
      ">
        ✕
      </button>
    `;

    lista.appendChild(li);
  });

  document.getElementById('total-final').innerText =
    formatar(totalValue).replace('R$', '').trim();
}

function removerItem(index) {
  totalValue -= carrinho[index].preco;
  carrinho.splice(index, 1);

  document.getElementById('cart-total').innerText =
    formatar(totalValue).replace('R$', '').trim();

  atualizarCarrinho();
}

function abrirCarrinho() {
  document.getElementById('carrinho').classList.toggle('hidden');
}

function finalizarCompra() {
  alert('Compra finalizada com sucesso!');
  carrinho = [];
  totalValue = 0;
  atualizarCarrinho();
  document.getElementById('cart-total').innerText = '0,00';
}

console.log("Conflito resolvido com sucesso!");