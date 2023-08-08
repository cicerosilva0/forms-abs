document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Coleta dos dados do formulário
        const segmento = document.querySelector('input[name="segmento"]:checked').value;
        const gestor = document.querySelector('select[name="gestor"]').value;
        const justificativa = document.querySelector('select[name="justificativa"]').value;
        const matricula = document.querySelector('input[name="matricula"]').value;

        // Objeto com os dados coletados
        const formData = {
            segmento: segmento,
            gestor: gestor,
            justificativa: justificativa,
            matricula: matricula
        };

        // Envio dos dados para o arquivo PHP usando Fetch API
        fetch("submit.php", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log("Resposta do servidor:", data);
            // Redirecionar para a página de confirmação
            window.location.href = "confirmation.html";
        })
        .catch(error => {
            console.error("Erro ao enviar dados:", error);
        });
    });
});
