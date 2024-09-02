document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-view');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const propertyId = button.getAttribute('data-property');
            const detailsDiv = document.getElementById(`details-${propertyId}`);

            // Esconde todos os detalhes
            document.querySelectorAll('.property-details').forEach(div => {
                if (div !== detailsDiv) {
                    div.style.display = 'none';
                }
            });

            // Alterna a visibilidade do detalhe específico
            if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
                detailsDiv.style.display = 'block';
            } else {
                detailsDiv.style.display = 'none';
            }
        });
    });
});

function calcularValor() {
    // Obtém os valores dos campos
    const precoOriginal = parseFloat(document.getElementById('precoOriginal').value);
    const precoVenda = parseFloat(document.getElementById('precoVenda').value);
    const valorPropriedade = parseFloat(document.getElementById('valorPropriedade').value);

    // Verifica se os valores são números válidos
    if (isNaN(precoOriginal) || isNaN(precoVenda) || isNaN(valorPropriedade)) {
        document.getElementById('resultado').textContent = 'Por favor, preencha todos os campos com valores válidos.';
        return;
    }

    // Calcula o valor da propriedade usando a regra de três
    const valorCalculado = (valorPropriedade * precoVenda) / precoOriginal;

    // Exibe o resultado
    document.getElementById('resultado').textContent = `Valor Calculado: ${valorCalculado.toFixed(2)}`;
}
// Certifique-se de que o JavaScript é executado após o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.getElementById('toggleButton');
    var phoneNumber = document.getElementById('phoneNumber');

    toggleButton.addEventListener('click', function() {
        if (phoneNumber.style.display === 'none') {
            phoneNumber.style.display = 'block';
            toggleButton.textContent = 'Ver telefone';
        } else {
            phoneNumber.style.display = 'none';
            toggleButton.textContent = 'Ver telefone';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Máscara para o telefone
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value;

        // Remove todos os caracteres que não sejam números
        value = value.replace(/\D/g, '');

        // Adiciona a máscara (XX) XXXXX-XXXX
        if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d+)/, '($1) $2');
        } else {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }

        e.target.value = value;
    });

    // Máscara para o CPF
    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', function(e) {
        let value = e.target.value;

        // Remove todos os caracteres que não sejam números
        value = value.replace(/\D/g, '');

        // Adiciona a máscara (XXX.XXX.XXX-XX)
        if (value.length <= 11) {
            value = value.replace(/(\d{3})(\d{1,2})/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})/, '$1.$2');
            value = value.replace(/(\d{3})(\d{1,2})/, '$1-$2');
        }

        e.target.value = value;
    });
});
document.getElementById('submitButton').addEventListener('click', function() {
    // Limpar todos os campos do formulário
    document.getElementById('contactForm').reset();

    // Exibir a mensagem de sucesso
    document.getElementById('successMessage').innerText = 'Mensagem encaminhada';
});
// JavaScript para abrir e fechar o modal
var modal = document.getElementById("imageModal");
var btns = document.getElementsByClassName("btn-view-image");
var modalImg = document.getElementById("modalImage");
var span = document.getElementsByClassName("close")[0];

Array.from(btns).forEach(btn => {
    btn.onclick = function() {
        var imageSrc = this.getAttribute("data-image");
        modal.style.display = "block";
        modalImg.src = imageSrc;
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}