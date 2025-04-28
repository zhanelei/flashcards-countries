const flashcardsData = [
    { country: "Франция", capital: "Париж" },
    { country: "Япония", capital: "Токио" },
    { country: "Бразилия", capital: "Бразилиа" },
    { country: "Австралия", capital: "Канберра" },
    { country: "Канада", capital: "Оттава" },
    { country: "Египет", capital: "Каир" },
    { country: "Италия", capital: "Рим" },
    { country: "Индия", capital: "Нью-Дели" },
    { country: "Китай", capital: "Пекин" },
    { country: "Россия", capital: "Москва" },
    { country: "Германия", capital: "Берлин" },
    { country: "Аргентина", capital: "Буэнос-Айрес" },
    { country: "Норвегия", capital: "Осло" },
    { country: "Швеция", capital: "Стокгольм" },
    { country: "Испания", capital: "Мадрид" }
];

const flashcardsContainer = document.getElementById('flashcards');

flashcardsData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'flashcard';
    card.innerHTML = `
        <div class="flashcard-inner">
            <div class="flashcard-front">${item.country}</div>
            <div class="flashcard-back">${item.capital}</div>
        </div>
    `;
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
    flashcardsContainer.appendChild(card);
});
