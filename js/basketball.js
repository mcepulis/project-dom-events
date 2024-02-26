const team1points1DOM = document.querySelector('.team:nth-child(1) .btn:nth-child(1)');
const team1points2DOM = document.querySelector('.team:nth-child(1) .btn:nth-child(2)');
const team1points3DOM = document.querySelector('.team:nth-child(1) .btn:nth-child(3)');

const team2points1DOM = document.querySelector('.team:nth-child(3) .btn:nth-child(1)');
const team2points2DOM = document.querySelector('.team:nth-child(3) .btn:nth-child(2)');
const team2points3DOM = document.querySelector('.team:nth-child(3) .btn:nth-child(3)');

const screen = document.querySelector('.screen');
const history = document.querySelector('.history');

let team1Score = 0;
let team2Score = 0;

function updateInfo(teamId, points) {
    if (teamId === 1) {
        team1Score += points;
    }

    if (teamId === 2) {
        team2Score += points;
    }

    const text = team1Score + ':' + team2Score;
    screen.innerText = text;

    history.innerHTML = `<li>Komanda ${teamId} imete ${points} task${points === 1 ? 'a' : 'us'} (${text})</li>` + history.innerHTML;
}

team1points1DOM.addEventListener('click', () => updateInfo(1, 1));
team1points2DOM.addEventListener('click', () => updateInfo(1, 2));
team1points3DOM.addEventListener('click', () => updateInfo(1, 3));

team2points1DOM.addEventListener('click', () => updateInfo(2, 1));
team2points2DOM.addEventListener('click', () => updateInfo(2, 2));
team2points3DOM.addEventListener('click', () => updateInfo(2, 3));