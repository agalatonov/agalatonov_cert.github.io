// Переключение между страницами
function switchPage(pageId) {
  // Скрываем все страницы
  document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
  });

  // Показываем выбранную страницу
  document.getElementById(pageId).classList.add('active');

  // Убираем активный класс у всех кнопок
  document.querySelectorAll('.tab-button').forEach(button => {
      button.classList.remove('active');
  });

  // Добавляем активный класс к выбранной кнопке
  document.querySelector(`[onclick="switchPage('${pageId}')"]`).classList.add('active');
}

// Открытие новой страницы
function openPage(pageId) {
  // Скрываем все страницы
  document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
  });

  // Показываем выбранную страницу
  document.getElementById(pageId).classList.add('active');
}

// Возврат на главную страницу
function goBack() {
  switchPage('home');
}
