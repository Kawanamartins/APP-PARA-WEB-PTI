window.onload = function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // Definir dimensões da bandeira
    const largura = 300;
    const altura = 200;
    const x = (canvas.width - largura) / 2;
    const y = (canvas.height - altura) / 2;

    // Desenhar fundo branco da bandeira
    ctx.fillStyle = "white";
    ctx.fillRect(x, y, largura, altura);
    
    // Desenhar borda preta ao redor da bandeira
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.strokeRect(x, y, largura, altura);

    // Desenhar círculo vermelho no centro
    const raio = 50;
    ctx.beginPath();
    ctx.arc(x + largura / 2, y + altura / 2, raio, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
};
