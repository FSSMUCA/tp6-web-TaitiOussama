const form = document.getElementById('calcForm');
const inputA = document.getElementById('a');
const inputB = document.getElementById('b');
const selectOp = document.getElementById('op');
const errorsEl = document.getElementById('errors');
const historyList = document.getElementById('historyList');
const clearBtn = document.getElementById('clearBtn');

const operations = []; // historique local

function showError(msg){
  errorsEl.textContent = msg;
}

function clearError(){
  errorsEl.textContent = '';
}

function calculate(a, b, op){
  // effectue l'opération et renvoie un objet {ok, result, message}
  if (isNaN(a) || isNaN(b)) return {ok:false, message:'Les valeurs doivent être des nombres.'};
  if (op === '/' && b === 0) return {ok:false, message:'Division par zéro interdite.'};

  let res;
  switch(op){
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case '*': res = a * b; break;
    case '/': res = a / b; break;
    default: return {ok:false, message:'Opération inconnue.'};
  }
  return {ok:true, result:res};
}

function addOperation(a, b, op, result){
  const item = {a, b, op, result, at: new Date().toISOString()};
  operations.unshift(item); // ajoute en tête
  renderHistory();
}

function renderHistory(){
  historyList.innerHTML = '';
  if (operations.length === 0){
    const li = document.createElement('li');
    li.textContent = 'Aucune opération pour l\'instant.';
    historyList.appendChild(li);
    return;
  }
  operations.forEach(op => {
    const li = document.createElement('li');
    li.textContent = `${op.a} ${op.op} ${op.b} = ${op.result}`;
    historyList.appendChild(li);
  });
}

// handlers
form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearError();

  const aVal = inputA.value.trim();
  const bVal = inputB.value.trim();
  if (aVal === '' || bVal === ''){
    showError('Les deux champs doivent être remplis.');
    return;
  }

  const a = parseFloat(aVal);
  const b = parseFloat(bVal);
  const op = selectOp.value;

  const out = calculate(a, b, op);
  if (!out.ok) {
    showError(out.message);
    return;
  }

  addOperation(a, b, op, out.result);
  // afficher le dernier résultat brièvement
  showError(`Résultat: ${out.result}`);
  setTimeout(() => clearError(), 2500);
});

clearBtn.addEventListener('click', () => {
  form.reset();
  clearError();
});

// initial render
renderHistory();