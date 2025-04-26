// 1. Change text content dynamically
document.getElementById('changeTextBtn').onclick = function() {
    document.getElementById('text').textContent = "You clicked the button! 🚀";
  };

  // 2. Modify CSS styles via JavaScript
  document.getElementById('changeStyleBtn').onclick = function() {
    const textDiv = document.getElementById('text');
    textDiv.classList.toggle('highlight'); // Adds or removes 'highlight' CSS class
  };

  // 3. Add a new element
  document.getElementById('addElementBtn').onclick = function() {
    const container = document.getElementById('newElementContainer');
    if (!document.getElementById('newPara')) { // Prevents adding multiple
      const newPara = document.createElement('p');
      newPara.id = 'newPara';
      newPara.textContent = "I'm a brand new paragraph! 🎉";
      container.appendChild(newPara);
    }
  };

  // 4. Remove the new element
  document.getElementById('removeElementBtn').onclick = function() {
    const newPara = document.getElementById('newPara');
    if (newPara) {
      newPara.remove();
    }
  };