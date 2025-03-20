// Função para calcular o tempo desde 14 de agosto de 2023
function updateTimer() {
    const startDate = new Date('2024-08-14T00:00:00'); // Data inicial
    const currentDate = new Date(); // Data atual
    const timeDifference = currentDate - startDate; // Diferença em milissegundos

    // Calcula dias, horas, minutos e segundos
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Atualiza o temporizador na página
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Função para carregar uma imagem aleatória
function loadRandomImage() {
    fetch('data/photos.json')
        .then(response => response.json())
        .then(data => {
            const images = data.images;
            const randomIndex = Math.floor(Math.random() * images.length);
            const randomImage = images[randomIndex];
            document.getElementById('dynamic-image').src = randomImage;
        })
        .catch(error => console.error('Erro ao carregar imagens:', error));
}

// Atualiza o temporizador a cada segundo
setInterval(updateTimer, 1000);

// Carrega uma imagem aleatória ao carregar a página
loadRandomImage();