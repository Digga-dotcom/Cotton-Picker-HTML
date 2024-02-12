let score = 0;
let xp = 0;
let level = 1;
let autoclickerCount = 0;
let autoclickerCost = 10;
let doubleClickCount = 0;
let doubleClickCost = 20;
let tripleClickCount = 0;
let tripleClickCost = 30;
let superClickCount = 0;
let superClickCost = 50;
let timeWarpCount = 0;
let timeWarpCost = 100;
let quantumLeapCount = 0;
let quantumLeapCost = 200;

let achievements = {
    '500_clicks': false,
    'level_5': false
};

document.getElementById('clicker-btn').addEventListener('click', function() {
    score++;
    xp++;
    checkLevelUp();
    updateScore();
    updateExperience();
    checkAchievements();
});

function updateScore() {
    document.getElementById('count').innerText = score;
}

function updateExperience() {
    document.getElementById('xp').innerText = xp;
}

function checkLevelUp() {
    if (xp >= level * 300) {
        level++;
        xp = 0;
        document.getElementById('current-level').innerText = level;
        alert(`Congratulations! You've reached Level ${level}!`);
    }
}

function buyAutoclicker() {
    if (score >= autoclickerCost) {
        autoclickerCount++;
        score -= autoclickerCost;
        autoclickerCost += 5;
        updateScore();
        updateAutoclickerInfo();
        startAutoclicker();
    } else {
        alert("Not enough score to buy a Worker!");
    }
}

function startAutoclicker() {
    setInterval(function() {
        score += autoclickerCount;
        updateScore();
    }, 1000);
}

function updateAutoclickerInfo() {
    document.getElementById('autoclicker-btn').innerText = `Buy Worker (Cost: ${autoclickerCost}, Count: ${autoclickerCount})`;
}

function buyDoubleClick() {
    if (score >= doubleClickCost) {
        doubleClickCount++;
        score -= doubleClickCost;
        doubleClickCost += 10;
        updateScore();
        updateDoubleClickInfo();
    } else {
        alert("Not enough score to buy a Fresh Field!");
    }
}

function updateDoubleClickInfo() {
    document.getElementById('double-click-btn').innerText = `Buy Fresh Field (Cost: ${doubleClickCost}, Count: ${doubleClickCount})`;
}

function buyTripleClick() {
    if (score >= tripleClickCost) {
        tripleClickCount++;
        score -= tripleClickCost;
        tripleClickCost += 15;
        updateScore();
        updateTripleClickInfo();
    } else {
        alert("Not enough score to buy a Loan!");
    }
}

function updateTripleClickInfo() {
    document.getElementById('triple-click-btn').innerText = `Buy Loan (Cost: ${tripleClickCost}, Count: ${tripleClickCount})`;
}

function buySuperClick() {
    if (score >= superClickCost) {
        superClickCount++;
        score -= superClickCost;
        superClickCost += 25;
        updateScore();
        updateSuperClickInfo();
    } else {
        alert("Not enough score to buy a Rifle!");
    }
}

function updateSuperClickInfo() {
    document.getElementById('super-click-btn').innerText = `Buy Rifle (Cost: ${superClickCost}, Count: ${superClickCount})`;
}

function buyTimeWarp() {
    if (score >= timeWarpCost) {
        timeWarpCount++;
        score -= timeWarpCost;
        timeWarpCost += 50;
        updateScore();
        updateTimeWarpInfo();
    } else {
        alert("Not enough score to buy a Baby Worker!");
    }
}

function updateTimeWarpInfo() {
    document.getElementById('time-warp-btn').innerText = `Buy Baby Worker (Cost: ${timeWarpCost}, Count: ${timeWarpCount})`;
}

function buyQuantumLeap() {
    if (score >= quantumLeapCost) {
        quantumLeapCount++;
        score -= quantumLeapCost;
        quantumLeapCost += 100;
        updateScore();
        updateQuantumLeapInfo();
    } else {
        alert("Not enough score to buy a Giga N*gga!");
    }
}

function updateQuantumLeapInfo() {
    document.getElementById('quantum-leap-btn').innerText = `Buy Giga N*gga (Cost: ${quantumLeapCost}, Count: ${quantumLeapCount})`;
}

function checkAchievements() {
    if (score >= 500 && !achievements['500_clicks']) {
        achievements['500_clicks'] = true;
        alert("Achievement Unlocked: 500 Clicks!");
    }

    if (level >= 5 && !achievements['level_5']) {
        achievements['level_5'] = true;
        alert("Achievement Unlocked: Level 5!");
    }

    // Add more achievement conditions as needed
}
