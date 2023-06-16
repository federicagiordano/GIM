function setup() {
	createCanvas(windowWidth, windowHeight);
  }
  
  function draw() {
	background(0);
	//translate(windowWidth/2, windowHeight/2);
  
	let h = hour();
	let m = minute();
	let s = second();
  
	//secondi
	let end1 = map(s, 0, 60, 0, windowHeight);
  
	// Definisci i colori del gradiente per i secondi
	let color1s = color(112, 169, 161); // Colore iniziale dei secondi (rosso)
	let color2s = color(64, 121, 140); // Colore finale dei secondi (giallo)
  
	// Calcola il colore intermedio dei secondi
	let gradientColorS = lerpColor(color1s, color2s, s/60);
  
	// Applica il colore intermedio come riempimento al rettangolo dei secondi
	fill(gradientColorS);
	rect(windowWidth / 3 + windowWidth / 3, 0, windowWidth / 3, end1);
  
	//minuti
	let end2 = map(m, 0, 60, 0, windowHeight);
  
	// Definisci i colori del gradiente per i minuti
	let color1m = color(64, 121, 140); // Colore iniziale dei minuti (verde)
	let color2m = color(31, 54, 61); // Colore finale dei minuti (blu)
  
	// Calcola il colore intermedio dei minuti
	let gradientColorM = lerpColor(color1m, color2m, m/60);
  
	// Applica il colore intermedio come riempimento al rettangolo dei minuti
	fill(gradientColorM);
	rect(windowWidth / 3, 0, windowWidth / 3, end2);
  
	//ore
	let end3 = map(h % 12, 0, 12, 0, windowHeight);
  
	// Definisci i colori del gradiente per le ore
	let color1h = color(31, 54, 61); // Colore iniziale delle ore (magenta)
	let color2h = color(112, 169, 161); // Colore finale delle ore (ciano)
  
	// Calcola il colore intermedio delle ore
	let gradientColorH = lerpColor(color1h, color2h, h % 12 / 12);
  
	// Applica il colore intermedio come riempimento al rettangolo delle ore
	fill(gradientColorH);
	rect(windowWidth / -3 + windowWidth / 3, 0, windowWidth / 3, end3);
  }
  