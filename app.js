function analyze() {
  let text = document.getElementById('inputText').value.toLowerCase();
  if (text.length < 3) { alert("Please type a sentence first!"); return; }

  let positiveWords = ['love', 'amazing', 'great', 'good', 'happy', 'excellent', 'awesome', 'best', 'beautiful', 'helpful', 'fantastic', 'wonderful', 'nice', 'enjoy', 'perfect'];
  let negativeWords = ['hate', 'bad', 'terrible', 'worst', 'boring', 'sad', 'angry', 'awful', 'horrible', 'disappoint', 'useless', 'annoying', 'stupid', 'difficult', 'fail'];

  let posFound = [];
  let negFound = [];
  positiveWords.forEach(w => { if (text.includes(w)) posFound.push(w); });
  negativeWords.forEach(w => { if (text.includes(w)) negFound.push(w); });

  let resultDiv = document.getElementById('result');
  resultDiv.style.display = 'block';

  document.getElementById('posCount').innerText = posFound.length;
  document.getElementById('negCount').innerText = negFound.length;
  document.getElementById('foundWords').innerText = 'Found: ' + [...posFound, ...negFound].join(', ');

  if (posFound.length > negFound.length) {
    document.getElementById('emojiText').innerText = '😊';
    document.getElementById('sentimentText').innerText = 'POSITIVE';
    document.getElementById('sentimentText').style.color = 'green';
    document.getElementById('detailText').innerText = 'This sentence has positive feelings. The person is happy / satisfied.';
  } else if (negFound.length > posFound.length) {
    document.getElementById('emojiText').innerText = '😡';
    document.getElementById('sentimentText').innerText = 'NEGATIVE';
    document.getElementById('sentimentText').style.color = 'red';
    document.getElementById('detailText').innerText = 'This sentence has negative feelings. The person is unhappy / angry.';
  } else {
    document.getElementById('emojiText').innerText = '😐';
    document.getElementById('sentimentText').innerText = 'NEUTRAL';
    document.getElementById('sentimentText').style.color = '#666';
    document.getElementById('detailText').innerText = 'This sentence is neutral. No strong positive or negative feeling.';
  }
}

function tryExample(txt) {
  document.getElementById('inputText').value = txt;
  analyze();
}
