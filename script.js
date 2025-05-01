function generate() {
    const min = 1;
    const max = 1000;
  
    const riggedNumber = 528; // ← змінюй сюди потрібне число
    const rigChance = 0.85;   // ← ймовірність підкрутки
  
    const random = Math.random();
    let result;
  
    if (random < rigChance) {
      result = riggedNumber;
    } else {
      let n;
      do {
        n = Math.floor(Math.random() * (max - min + 1)) + min;
      } while (n === riggedNumber); // щоб не двічі поспіль
      result = n;
    }
  
    document.getElementById('result').textContent = result;
  }
  