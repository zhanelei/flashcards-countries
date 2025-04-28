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
const shuffleBtn = document.getElementById('shuffle-btn');
const counter = document.getElementById('counter');

function createFlashcards(data) {
    flashcardsContainer.innerHTML = '';
    data.forEach(item => {
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
            updateCounter();
        });
        flashcardsContainer.appendChild(card);
    });
}

function shuffleFlashcards() {
    flashcardsData.sort(() => Math.random() - 0.5);
    createFlashcards(flashcardsData);
    resetCounter();
}

function resetCounter() {
    counter.textContent = `Выучено: 0 из ${flashcardsData.length}`;
}

function updateCounter() {
    const flipped = document.querySelectorAll('.flashcard.flipped').length;
    counter.textContent = `Выучено: ${flipped} из ${flashcardsData.length}`;
}

// Инициализация при загрузке
createFlashcards(flashcardsData);
resetCounter();

// Событие на кнопку перемешивания
shuffleBtn.addEventListener('click', shuffleFlashcards);
