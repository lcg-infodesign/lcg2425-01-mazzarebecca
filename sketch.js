function setup() {
  createCanvas(400, 500);  // Altezza ridotta per adattare le 14 righe
  noStroke();

  let gridSize = 25;  // Dimensione di ciascun quadrato
  let spacing = 5;    // Spazio tra i quadrati
  let cols = 11;      // Numero di colonne
  let rows = 14;      // Numero di righe ridotto a 14
  let offsetX = 50;   // Offset orizzontale
  let offsetY = 50;   // Offset verticale
  let alphaValue = 150;     // Opacità dei quadrati (0 = completamente trasparente, 255 = opaco)
  let columnShift = 3;      // Sfasamento verticale ridotto per mantenere l'allineamento
  let overlapVariation = 8; // Sovrapposizione orizzontale ridotta

  // Definisco i colori con opacità
  let colorBlue = color(58, 102, 191, alphaValue);  // Blu con opacità
  let colorGreen = color(67, 212, 180, alphaValue); // Verde acqua con opacità

  // Loop per disegnare i quadrati blu e verdi con sovrapposizione irregolare, mantenendo le dimensioni equilibrate
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // Sovrapposizione orizzontale ridotta
      let overlap = random(-overlapVariation, overlapVariation);
      let x = j * (gridSize + spacing) + offsetX + overlap;

      // Sfasamento verticale molto ridotto
      let yShift = random(-columnShift, columnShift);
      let y = i * (gridSize + spacing) + offsetY + yShift;

      // Assicuriamoci che nessun quadrato venga tagliato
      if (x + gridSize > width || y + gridSize > height) {
        continue; // Salta la creazione del quadrato se supererebbe i limiti del canvas
      }

      // A sinistra, colori blu con opacità
      if (j < 3) {
        fill(colorBlue);
      } 
      // Transizione tra blu e verde
      else if (j < 5) {
        fill(lerpColor(colorBlue, colorGreen, 0.5)); // Transizione tra blu e verde con opacità
      }
      // A destra, colori verdi con opacità
      else {
        fill(colorGreen);
      }

      // Disegno i quadrati equilibrati
      rect(x, y, gridSize, gridSize);
    }
  }
}
