alert("Привіт! Давай познайомимося 😊");

const userName = prompt("Як тебе звати?");

const likesProgramming = confirm(
  `Приємно познайомитися, ${userName}! Тобі подобається програмування?`,
);

if (likesProgramming) {
  alert(`Чудово, ${userName}! Тоді почнімо вивчати JavaScript 🚀`);
} else {
  alert(
    `Нічого страшного, ${userName}! Можливо, JavaScript тобі сподобається після першого уроку 😊`,
  );
}
