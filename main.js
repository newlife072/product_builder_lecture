function generateNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const randomNum = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNum)) {
            numbers.push(randomNum);
        }
    }
    return numbers.sort((a, b) => a - b);
}

function createBall(num) {
    const ball = document.createElement('div');
    ball.classList.add('ball');
    ball.innerText = num;
    if (num <= 10) ball.classList.add('ball-1');
    else if (num <= 20) ball.classList.add('ball-11');
    else if (num <= 30) ball.classList.add('ball-21');
    else if (num <= 40) ball.classList.add('ball-31');
    else ball.classList.add('ball-41');
    return ball;
}

function generateFiveGames() {
    const display = document.getElementById('lotto-display');
    display.innerHTML = ''; // 화면 초기화

    for (let i = 1; i <= 5; i++) {
        const row = document.createElement('div');
        row.classList.add('lotto-row');

        // 게임 라벨 (A, B, C, D, E 느낌)
        const label = document.createElement('span');
        label.classList.add('game-label');
        label.innerText = 'Game ' + i;
        row.appendChild(label);

        // 번호 생성 및 공 추가
        const numbers = generateNumbers();
        numbers.forEach(num => {
            row.appendChild(createBall(num));
        });

        display.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    }

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });
});