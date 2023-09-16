// Abre o modal quando o botão é clicado
document.getElementById('btnAvaliar').addEventListener('click', function() {
    document.getElementById('avaliacaoModal').style.display = 'block';
});

// Fecha o modal quando o botão de fechar é clicado
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('avaliacaoModal').style.display = 'none';
                  });
// Fecha o modal quando o botão "Cancelar" é clicado
document.getElementById('cancelarAvaliacao').addEventListener('click', function() {
    document.getElementById('avaliacaoModal').style.display = 'none';
});
