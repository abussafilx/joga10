const answers = [
  "Roberto Dinamite", "Romário", "Zico", "Pelé", 
  "Fred", "Edmundo", "Luis Fabiano", 
  "Diego Souza", "Ricardo Oliveira", "Túlio Maravilha"
];

const slots = document.querySelectorAll("#slots li");
const input = document.getElementById("guess");
const button = document.getElementById("submit");
const feedback = document.getElementById("feedback");

// Array para controlar respostas corretas
let correctAnswers = Array(10).fill(false);

button.addEventListener("click", () => {
  const guess = input.value.trim();
  if (guess === "") {
    feedback.textContent = "Digite uma resposta!";
    feedback.style.color = "red";
    return;
  }

  const index = answers.findIndex(answer => 
    answer.toLowerCase() === guess.toLowerCase()
  );

  if (index !== -1 && !correctAnswers[index]) {
    slots[index].textContent = `${index + 1}. ${answers[index]}`;
    correctAnswers[index] = true;
    feedback.textContent = "Resposta correta!";
feedback.className = "success";
feedback.style.opacity = 1;
    feedback.style.color = "green";
    // Adicionar um efeito de fade-out após 2 segundos
setTimeout(() => {
  feedback.style.opacity = 0;
}, 2000);
  } else if (index !== -1) {
    feedback.textContent = "Você já acertou essa!";
    feedback.style.color = "orange";
  } else {
    feedback.textContent = "Resposta errada!";
    feedback.style.color = "red";
  }

  input.value = ""; // Limpa o campo de entrada
});

// Opcional: Desativa botão se todas respostas estiverem corretas
button.addEventListener("click", () => {
  if (correctAnswers.every(answer => answer)) {
    feedback.textContent = "Você completou o Top 10! Parabéns!";
    button.disabled = true;
    input.disabled = true;
  }
});
