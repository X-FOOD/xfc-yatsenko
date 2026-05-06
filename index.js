// --- ДАННЫЕ СЕТИ ЯЦЕНКО ---
const dbData = {
    "monthly": {
        "Апрель 2026": {
            "СПб 13-1": {
                "averageScore": -191,
                "managers": [
                    { "name": "10:00-13:00", "score": -468 },
                    { "name": "13:00-15:00", "score": -93 },
                    { "name": "15:00-17:00", "score": -170 },
                    { "name": "17:00-19:00", "score": -38 },
                    { "name": "19:00-22:00", "score": -32 },
                    { "name": "22:00-00:00", "score": -232 }
                ],
                "c5": [
                    { "violation": "Использование бракованного продукта / не списан брак", "count": 10 },
                    { "violation": "1 половник вместо 1,5 на 35 см", "count": 9 },
                    { "violation": "5 и более нарушений по качеству продукта", "count": 7 }
                ],
                "c10": [
                    { "violation": "Предзаготовка продуктов не по стандарту", "count": 37 },
                    { "violation": "Безопасность при заготовке салатов и чикен роллов", "count": 25 },
                    { "violation": "Руки не помыли / без антисептика / без мыла", "count": 13 }
                ]
            },
            "СПб 13-2": {
                "averageScore": -101,
                "managers": [
                    { "name": "10:00-13:00", "score": -187 },
                    { "name": "13:00-15:00", "score": 50 },
                    { "name": "15:00-17:00", "score": -114 },
                    { "name": "17:00-19:00", "score": -36 },
                    { "name": "19:00-22:00", "score": -130 }
                ],
                "c5": [
                    { "violation": "Использование щепотки при работе с ингредиентами", "count": 15 },
                    { "violation": "5 и более нарушений по качеству продукта", "count": 4 },
                    { "violation": "Использование бракованного продукта / не списан брак", "count": 1 }
                ],
                "c10": [
                    { "violation": "Нарушения при работе с перчатками", "count": 7 },
                    { "violation": "Руки не помыли / без антисептика / без мыла", "count": 4 },
                    { "violation": "Пищевое / Непищевое - перекрестное загрязнение", "count": 2 }
                ]
            },
            "Гусев-1": {
                "averageScore": -97,
                "managers": [
                    { "name": "10:00-13:00", "score": -45 },
                    { "name": "13:00-15:00", "score": -222 },
                    { "name": "15:00-17:00", "score": -45 },
                    { "name": "17:00-19:00", "score": -83 },
                    { "name": "19:00-22:00", "score": -61 },
                    { "name": "22:00-00:00", "score": -125 }
                ],
                "c5": [
                    { "violation": "Использование бракованного продукта / не списан брак", "count": 6 },
                    { "violation": "Использование щепотки при работе с ингредиентами", "count": 5 },
                    { "violation": "5 и более нарушений по качеству продукта", "count": 4 }
                ],
                "c10": [
                    { "violation": "Нарушения пожарной безопасности", "count": 2 },
                    { "violation": "Используют посуду или стаканы от высокоаллергенного продукта", "count": 2 },
                    { "violation": "Вытерли соус с продукта", "count": 1 }
                ]
            },
            "Гурьевск-1": {
                "averageScore": -129,
                "managers": [
                    { "name": "10:00-13:00", "score": -44 },
                    { "name": "13:00-15:00", "score": -212 },
                    { "name": "15:00-17:00", "score": -36 },
                    { "name": "17:00-19:00", "score": -172 },
                    { "name": "19:00-22:00", "score": -132 },
                    { "name": "22:00-00:00", "score": -177 }
                ],
                "c5": [
                    { "violation": "5 и более нарушений по качеству продукта", "count": 3 },
                    { "violation": "Использование бракованного продукта / не списан брак", "count": 3 },
                    { "violation": "Использование щепотки при работе с ингредиентами", "count": 1 }
                ],
                "c10": [
                    { "violation": "Руки не помыли / без антисептика / без мыла", "count": 7 },
                    { "violation": "Уборка не по стандарту", "count": 7 },
                    { "violation": "Нарушения пожарной безопасности", "count": 6 }
                ]
            },
            "Приозерск-1": {
                "averageScore": -286,
                "managers": [
                    { "name": "10:00-13:00", "score": -192 },
                    { "name": "13:00-15:00", "score": -354 },
                    { "name": "15:00-17:00", "score": -590 },
                    { "name": "17:00-19:00", "score": -229 },
                    { "name": "22:00-00:00", "score": -161 }
                ],
                "c5": [
                    { "violation": "Использование щепотки при работе с ингредиентами", "count": 65 },
                    { "violation": "5 и более нарушений по качеству продукта", "count": 4 },
                    { "violation": "Использование бракованного продукта / не списан брак", "count": 1 }
                ],
                "c10": [
                    { "violation": "Безопасность при заготовке салатов и чикен роллов", "count": 15 },
                    { "violation": "Пищевое / Непищевое - перекрестное загрязнение", "count": 4 },
                    { "violation": "Руки не помыли / без антисептика / без мыла", "count": 2 }
                ]
            },
            "Коряжма-1": {
                "averageScore": -169,
                "managers": [
                    { "name": "10:00-13:00", "score": -90 },
                    { "name": "13:00-15:00", "score": -19 },
                    { "name": "15:00-17:00", "score": -112 },
                    { "name": "17:00-19:00", "score": -322 },
                    { "name": "19:00-22:00", "score": -383 }
                ],
                "c5": [
                    { "violation": "Использование щепотки при работе с ингредиентами", "count": 41 },
                    { "violation": "5 и более нарушений по качеству продукта", "count": 6 },
                    { "violation": "Использование бракованного продукта / не списан брак", "count": 2 }
                ],
                "c10": [
                    { "violation": "Пищевое / Непищевое - перекрестное загрязнение", "count": 5 },
                    { "violation": "Руки не помыли / без антисептика / без мыла", "count": 3 },
                    { "violation": "Заготовка в грязный лексан / смешали старое с новым / б/у упаковка", "count": 1 }
                ]
            }
        }
    },
    "weekly": {}
};

const iconC5 = `<div class="flex-shrink-0"><svg class="h-8 sm:h-10 w-8 sm:w-10 text-orange-400 drop-shadow-[0_2px_8px_rgba(251,146,60,0.4)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div>`;
const iconC10 = `<div class="flex-shrink-0"><svg class="h-8 sm:h-10 w-8 sm:w-10 text-red-400 drop-shadow-[0_2px_8px_rgba(248,113,113,0.4)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg></div>`;

const backgrounds = {
    "default": "https://i.postimg.cc/W1B0s3vc/cudesa2.png",
    "Гусев-1": "https://i.postimg.cc/GhzccsPq/XXXL.webp",
    "Гурьевск-1": "https://i.postimg.cc/9fwwSjR6/gur'evsk.webp",
    "СПб 13-1": "https://i.postimg.cc/RVqSGLnY/13-1.webp",
    "СПб 13-2": "https://i.postimg.cc/kgr08QN5/13-2.webp",
    "Приозерск-1": "https://i.postimg.cc/ydgqcvG8/priozersk.png",
    "Коряжма-1": "https://i.postimg.cc/52NR8sYN/korazma.png"
};
let currentActiveTab = 'summary';

function preloadBackgrounds() {
    Object.values(backgrounds).forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

const pizzeriaSelect = document.getElementById('pizzeria-select');
const periodSelect = document.getElementById('period-select');
const dynamicsPizzeriaSelect = document.getElementById('dynamics-pizzeria-select');
const dynamicsManagerSelect = document.getElementById('dynamics-manager-select');

const tabSummary = document.getElementById('tab-summary');
const tabPizzeria = document.getElementById('tab-pizzeria');
const tabDynamics = document.getElementById('tab-dynamics');

const pageSummary = document.getElementById('page-summary');
const pagePizzeria = document.getElementById('page-pizzeria');
const pageDynamics = document.getElementById('page-dynamics');

const networkC5Container = document.getElementById('network-c5-violations');
const networkC10Container = document.getElementById('network-c10-violations');
const networkAverageScoreEl = document.getElementById('network-average-score');
const periodSelectorContainer = document.getElementById('period-selector-container');

let charts = {};

function animateCountUp(el, to, duration = 1200) {
    const from = parseInt(el.textContent.replace(/%/, '')) || 0;
    if (from === to || isNaN(to)) {
        el.textContent = isNaN(to) ? '0%' : to + '%';
        return;
    };

    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(easedProgress * (to - from) + from) + '%';
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function getPluralForm(number) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) return 'раз';
    n %= 10;
    if (n === 1) return 'раз';
    if (n >= 2 && n <= 4) return 'раза';
    return 'раз';
}

const createViolationCard = (title, data, icon, colorClass, cardClass, container) => {
    const maxCount = data.length > 0 ? data[0].count : 0;
    const cardWrapper = document.createElement('div');
    cardWrapper.className = `fade-in glass-card ${cardClass} p-5 sm:p-6 lg:p-8 relative overflow-hidden`;

    const glowColor = colorClass.includes('red') ? 'rgba(239, 68, 68, 0.12)' : 'rgba(249, 115, 22, 0.12)';
    const bgGlow = `<div class="absolute -top-10 -right-10 w-32 sm:w-48 h-32 sm:h-48 rounded-full filter blur-3xl" style="background: ${glowColor}; pointer-events: none;"></div>`;

    let content = `${bgGlow}<div class="flex items-center mb-6 sm:mb-8 relative z-10">${icon}<h2 class="text-lg sm:text-xl font-bold tracking-tight ml-3 sm:ml-4 spatial-text" style="color: var(--text-main)">${title}</h2></div><div class="space-y-4 sm:space-y-6 relative z-10">`;

    if (data.length > 0) {
        data.forEach(({ violation, count }) => {
            const percentage = maxCount > 0 ? (count / maxCount) * 100 : 0;
            const countText = `${count} ${getPluralForm(count)}`;
            content += `
                         <div class="space-y-2 hover-list-item py-1 sm:py-2">
                             <div class="flex justify-between items-start text-xs sm:text-sm md:text-base gap-3 sm:gap-4">
                                 <span class="font-medium opacity-90 leading-snug" style="color: var(--text-main)">${violation}</span>
                                 <span class="font-bold flex-shrink-0 ${colorClass} spatial-text">${countText}</span>
                             </div>
                             <div class="w-full bg-black/30 rounded-full h-1.5 overflow-hidden border border-white/5" style="box-shadow: inset 0 1px 3px rgba(0,0,0,0.5)">
                                 <div class="progress-bar-animated ${colorClass.replace('text', 'bg').replace('-400', '-500')} h-1.5 rounded-full shadow-[0_0_10px_currentColor]" style="--target-width: ${percentage}%; width: 0%;"></div>
                             </div>
                         </div>`;
        });
    } else {
        content += `<p class="opacity-60 text-xs sm:text-sm italic" style="color: var(--text-muted)">Нарушения по данной категории не зафиксированы.</p>`;
    }

    content += `</div>`;
    cardWrapper.innerHTML = content;
    container.appendChild(cardWrapper);
};

const monthOrder = {
    "Январь": 1, "Февраль": 2, "Март": 3, "Апрель": 4, "Май": 5, "Июнь": 6,
    "Июль": 7, "Август": 8, "Сентябрь": 9, "Октябрь": 10, "Ноябрь": 11, "Декабрь": 12
};

function parseMonthYear(dateString) {
    const [month, year] = dateString.split(' ');
    return { monthName: month, year: parseInt(year), monthIndex: monthOrder[month] };
}

function getSortedPeriods() {
    return Object.keys(dbData.monthly).sort((a, b) => {
        const dateA = parseMonthYear(a);
        const dateB = parseMonthYear(b);
        if (dateA.year !== dateB.year) return dateA.year - dateB.year;
        return dateA.monthIndex - dateB.monthIndex;
    });
}

function getAllManagers() {
    const managersSet = new Set();
    Object.values(dbData.monthly).forEach(periodData => {
        Object.values(periodData).forEach(pizzeriaData => {
            if (pizzeriaData.managers) {
                pizzeriaData.managers.forEach(m => managersSet.add(m.name));
            }
        });
    });
    return Array.from(managersSet).sort();
}

function getChartConfig(labels, data, label, colorHex, bgColor) {
    const gridColor = 'rgba(255, 255, 255, 0.06)';
    const textColor = '#cbd5e1';

    return {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderColor: colorHex,
                backgroundColor: (context) => {
                    const ctx = context.chart.ctx;
                    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                    gradient.addColorStop(0, bgColor.replace('0.2', '0.6'));
                    gradient.addColorStop(1, bgColor.replace('0.2', '0.0'));
                    return gradient;
                },
                borderWidth: 3,
                pointBackgroundColor: colorHex,
                pointBorderColor: '#0f172a',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 7,
                tension: 0.4,
                fill: true,
                spanGaps: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    titleColor: '#f8fafc',
                    bodyColor: '#cbd5e1',
                    borderColor: 'rgba(255,255,255,0.1)',
                    borderWidth: 1,
                    padding: 10,
                    titleFont: { size: 13, family: "'Inter', sans-serif" },
                    bodyFont: { size: 12, family: "'Inter', sans-serif" },
                    displayColors: true,
                    callbacks: {
                        label: function (context) {
                            return ` ${context.dataset.label}: ${context.parsed.y}%`;
                        }
                    }
                }
            },
            scales: {
                y: {
                    grid: { color: gridColor, borderDash: [6, 6] },
                    ticks: { color: textColor, font: { family: "'Inter', sans-serif", size: 11 } },
                    border: { display: false }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: textColor, font: { family: "'Inter', sans-serif", size: 11 } },
                    border: { display: false }
                }
            }
        }
    };
}

function renderChart(canvasId, chartKey, labels, data, label, color, bgColor) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (charts[chartKey]) {
        charts[chartKey].destroy();
    }
    charts[chartKey] = new Chart(ctx, getChartConfig(labels, data, label, color, bgColor));
}

function updateCharts() {
    const sortedPeriods = getSortedPeriods();

    const networkData = sortedPeriods.map(period => {
        const periodData = dbData.monthly[period];
        let totalScore = 0;
        let count = 0;
        Object.entries(periodData).forEach(([key, pizzeria]) => {
            if (key !== 'networkSummary' && pizzeria.averageScore !== undefined) {
                totalScore += pizzeria.averageScore;
                count++;
            }
        });
        return count > 0 ? Math.round(totalScore / count) : null;
    });
    renderChart('dynamicsNetworkChart', 'network', sortedPeriods, networkData, 'Средний % по сети', '#34d399', 'rgba(52, 211, 153, 0.2)');

    const pizzeriaName = dynamicsPizzeriaSelect.value;
    const pizzeriaData = sortedPeriods.map(period => {
        return dbData.monthly[period]?.[pizzeriaName]?.averageScore || null;
    });
    renderChart('dynamicsPizzeriaChart', 'pizzeria', sortedPeriods, pizzeriaData, pizzeriaName, '#94a3b8', 'rgba(148, 163, 184, 0.2)');

    const managerName = dynamicsManagerSelect.value;
    if (managerName) {
        const managerData = sortedPeriods.map(period => {
            let score = null;
            const periodData = dbData.monthly[period];
            if (periodData) {
                Object.values(periodData).forEach(pizzeria => {
                    if (pizzeria.managers) {
                        const found = pizzeria.managers.find(m => m.name === managerName);
                        if (found) score = found.score;
                    }
                });
            }
            return score;
        });
        renderChart('dynamicsManagerChart', 'manager', sortedPeriods, managerData, managerName, '#cbd5e1', 'rgba(203, 213, 225, 0.2)');
    }
}

function populateDynamicsSelects() {
    const managers = getAllManagers();
    dynamicsManagerSelect.innerHTML = '';
    managers.forEach(m => {
        const option = document.createElement('option');
        option.value = m;
        option.textContent = m;
        dynamicsManagerSelect.appendChild(option);
    });
    if (managers.length > 0) dynamicsManagerSelect.value = managers[0];
}

function populatePizzeriaSelects() {
    const allPizzerias = new Set();
    Object.values(dbData.monthly).forEach(periodData => {
        Object.keys(periodData).forEach(key => {
            if (key !== 'networkSummary') allPizzerias.add(key);
        });
    });
    const sortedPizzerias = Array.from(allPizzerias).sort();

    pizzeriaSelect.innerHTML = '';
    dynamicsPizzeriaSelect.innerHTML = '';

    sortedPizzerias.forEach(p => {
        const opt1 = document.createElement('option');
        opt1.value = p; opt1.textContent = p;
        pizzeriaSelect.appendChild(opt1);

        const opt2 = document.createElement('option');
        opt2.value = p; opt2.textContent = p;
        dynamicsPizzeriaSelect.appendChild(opt2);
    });
}

function updatePizzeriaReport(period, pizzeriaName) {
    const reportGrid = document.querySelector('#page-pizzeria .grid');
    let noDataMessage = document.getElementById('pizzeria-no-data');

    const data = dbData['monthly']?.[period]?.[pizzeriaName];

    if (!data || Object.keys(data).length === 0) {
        if (reportGrid) reportGrid.classList.add('hidden');
        if (!noDataMessage) {
            noDataMessage = document.createElement('div');
            noDataMessage.id = 'pizzeria-no-data';
            noDataMessage.className = 'glass-card p-8 sm:p-10 text-center col-span-full';
            noDataMessage.innerHTML = `
                        <p class="text-lg sm:text-xl font-bold opacity-90 spatial-text" style="color: var(--text-main)">Нет данных</p>
                        <p class="text-sm sm:text-base opacity-70 mt-2 sm:mt-3" style="color: var(--text-muted)">Для пиццерии "${pizzeriaName}" за ${period} отчет отсутствует.</p>
                    `;
            pagePizzeria.appendChild(noDataMessage);
        }
        noDataMessage.classList.remove('hidden');
        return;
    }

    if (reportGrid) reportGrid.classList.remove('hidden');
    if (noDataMessage) noDataMessage.classList.add('hidden');

    const rankingContainer = document.getElementById('pizzeria-ranking-container');
    const scoreContainer = document.getElementById('pizzeria-score-container');
    const violationsContainer = document.getElementById('pizzeria-violations-container');

    rankingContainer.innerHTML = '';
    scoreContainer.innerHTML = '';
    violationsContainer.innerHTML = '';

    if (data.managers) data.managers.sort((a, b) => b.score - a.score);
    const rankingCard = document.createElement('div');
    rankingCard.className = 'fade-in glass-card p-5 sm:p-6 lg:p-8';

    let managerListHtml = '';
    if (data.managers && data.managers.length > 0) {
        managerListHtml = data.managers.map((manager, index) => {
            let medal = '';
            let rankClass = "bg-white/5 border-white/10 text-slate-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] backdrop-blur-md";

            if (index === 0) { medal = '🥇'; rankClass = "text-yellow-400 bg-yellow-400/10 border-yellow-400/20 shadow-[0_0_10px_rgba(250,204,21,0.2)]"; }
            if (index === 1) { medal = '🥈'; rankClass = "text-slate-200 bg-slate-300/10 border-slate-300/20 shadow-[0_0_10px_rgba(203,213,225,0.1)]"; }
            if (index === 2) { medal = '🥉'; rankClass = "text-orange-300 bg-orange-400/10 border-orange-400/20 shadow-[0_0_10px_rgba(251,146,60,0.15)]"; }

            const rankDisplay = medal ? `<span class="text-xl sm:text-2xl drop-shadow-lg">${medal}</span>` : `<span class="text-[10px] sm:text-xs font-bold ${rankClass} w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center border">${index + 1}</span>`;
            const displayScoreColor = manager.score >= 15 ? 'text-emerald-400' : (manager.score >= -100 ? 'text-amber-400' : 'text-red-400');

            return `
                    <li class="flex items-center justify-between py-2.5 sm:py-3.5 border-b border-dashed last:border-0 hover-list-item" style="border-color: rgba(255,255,255,0.08);">
                        <div class="flex items-center gap-3 sm:gap-4">
                            <div class="w-7 sm:w-8 flex justify-center">${rankDisplay}</div>
                            <span class="font-semibold text-xs sm:text-sm md:text-base spatial-text" style="color: var(--text-main)">${manager.name}</span>
                        </div>
                        <span class="font-bold text-sm sm:text-base md:text-lg ${displayScoreColor} spatial-text">${manager.score}%</span>
                    </li>`;
        }).join('');
    } else {
        managerListHtml = `<p class="opacity-60 text-center py-4 sm:py-6 text-xs sm:text-sm">Нет данных по менеджерам.</p>`;
    }
    rankingCard.innerHTML = `<h2 class="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 opacity-70 spatial-text" style="color: var(--text-muted)">Рейтинг менеджеров</h2><ul class="space-y-0.5 sm:space-y-1">${managerListHtml}</ul>`;
    rankingContainer.appendChild(rankingCard);

    const scoreCard = document.createElement('div');
    const scoreColor = data.averageScore >= 15 ? 'text-emerald-400' : (data.averageScore >= -100 ? 'text-amber-400' : 'text-red-400');
    scoreCard.className = 'fade-in glass-card p-5 sm:p-6 lg:p-8 min-h-[160px] sm:min-h-[220px] flex flex-col justify-center items-center text-center';
    scoreCard.innerHTML = `
                <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider mb-2 sm:mb-4 opacity-70 spatial-text" style="color: var(--text-muted)">Средний % за месяц</h2>
                <p class="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight spatial-text ${scoreColor}" id="pizzeria-average-score">0%</p>
            `;
    scoreContainer.appendChild(scoreCard);
    animateCountUp(document.getElementById('pizzeria-average-score'), data.averageScore);

    const top5C5 = data.c5 ? data.c5.sort((a, b) => b.count - a.count).slice(0, 5) : [];
    const top5C10 = data.c10 ? data.c10.sort((a, b) => b.count - a.count).slice(0, 5) : [];

    createViolationCard('ТОП-5 нарушения C5', top5C5, iconC5, 'text-orange-400', 'c5-card', violationsContainer);
    createViolationCard('ТОП-5 нарушения C10', top5C10, iconC10, 'text-red-400', 'c10-card', violationsContainer);
}

function generateNetworkSummary(period) {
    networkC5Container.innerHTML = '';
    networkC10Container.innerHTML = '';

    const top3Container = document.getElementById('network-top3-container');
    if (top3Container) top3Container.innerHTML = '';

    const periodData = dbData['monthly']?.[period];

    if (!periodData || Object.keys(periodData).length === 0) {
        animateCountUp(networkAverageScoreEl, 0);
        createViolationCard('ТОП-5 нарушений C5 по сети', [], iconC5, 'text-orange-400', 'c5-card', networkC5Container);
        createViolationCard('ТОП-5 нарушений C10 по сети', [], iconC10, 'text-red-400', 'c10-card', networkC10Container);
        if (top3Container) top3Container.innerHTML = `<p class="opacity-60 text-center py-4 text-xs sm:text-sm" style="color: var(--text-muted)">Нет данных для рейтинга.</p>`;
        return;
    };

    let top5C5, top5C10;

    if (periodData.networkSummary) {
        top5C5 = periodData.networkSummary.c5;
        top5C10 = periodData.networkSummary.c10;
    } else {
        const allC5 = {};
        const allC10 = {};
        Object.entries(periodData).forEach(([key, pizzeria]) => {
            if (key === 'networkSummary') return;
            if (pizzeria.c5) pizzeria.c5.forEach(v => { allC5[v.violation] = (allC5[v.violation] || 0) + v.count; });
            if (pizzeria.c10) pizzeria.c10.forEach(v => { allC10[v.violation] = (allC10[v.violation] || 0) + v.count; });
        });
        top5C5 = Object.entries(allC5).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([violation, count]) => ({ violation, count }));
        top5C10 = Object.entries(allC10).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([violation, count]) => ({ violation, count }));
    }

    let totalScore = 0;
    let pizzeriasCount = 0;
    let pizzeriasScores = [];

    Object.entries(periodData).forEach(([key, pizzeria]) => {
        if (key === 'networkSummary') return;
        if (pizzeria.averageScore !== undefined) {
            totalScore += pizzeria.averageScore;
            pizzeriasCount++;
            pizzeriasScores.push({ name: key, score: pizzeria.averageScore });
        }
    });

    const networkAverage = pizzeriasCount > 0 ? Math.round(totalScore / pizzeriasCount) : 0;
    animateCountUp(networkAverageScoreEl, networkAverage);

    const scoreColor = networkAverage >= 15 ? 'text-emerald-400' : (networkAverage >= -100 ? 'text-amber-400' : 'text-red-400');
    networkAverageScoreEl.className = `text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold tracking-tighter transition-colors duration-500 spatial-text ${scoreColor}`;

    createViolationCard('ТОП-5 нарушений C5 по сети', top5C5, iconC5, 'text-orange-400', 'c5-card', networkC5Container);
    createViolationCard('ТОП-5 нарушений C10 по сети', top5C10, iconC10, 'text-red-400', 'c10-card', networkC10Container);

    if (top3Container) {
        pizzeriasScores.sort((a, b) => b.score - a.score);
        const top3 = pizzeriasScores.slice(0, 3);

        if (top3.length > 0) {
            let top3Html = top3.map((pizzeria, index) => {
                let medal = '';
                let rankClass = "bg-white/5 border-white/10 text-slate-300 shadow-[inset_0_1px_2px_rgba(255,255,255,0.1)] backdrop-blur-md";

                if (index === 0) { medal = '🥇'; rankClass = "text-yellow-400 bg-yellow-400/10 border-yellow-400/20 shadow-[0_0_10px_rgba(250,204,21,0.2)]"; }
                if (index === 1) { medal = '🥈'; rankClass = "text-slate-200 bg-slate-300/10 border-slate-300/20 shadow-[0_0_10px_rgba(203,213,225,0.1)]"; }
                if (index === 2) { medal = '🥉'; rankClass = "text-orange-300 bg-orange-400/10 border-orange-400/20 shadow-[0_0_10px_rgba(251,146,60,0.15)]"; }

                const rankDisplay = medal ? `<span class="text-xl sm:text-2xl drop-shadow-lg">${medal}</span>` : `<span class="text-[10px] sm:text-xs font-bold ${rankClass} w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center border">${index + 1}</span>`;
                const displayScoreColor = pizzeria.score >= 15 ? 'text-emerald-400' : (pizzeria.score >= -100 ? 'text-amber-400' : 'text-red-400');

                return `
                        <li class="flex items-center justify-between py-2.5 sm:py-3.5 border-b border-dashed last:border-0 hover-list-item" style="border-color: rgba(255,255,255,0.08);">
                            <div class="flex items-center gap-3 sm:gap-4">
                                <div class="w-7 sm:w-8 flex justify-center">${rankDisplay}</div>
                                <span class="font-semibold text-xs sm:text-sm md:text-base spatial-text" style="color: var(--text-main)">${pizzeria.name}</span>
                            </div>
                            <span class="font-bold text-sm sm:text-base md:text-lg ${displayScoreColor} spatial-text">${pizzeria.score}%</span>
                        </li>`;
            }).join('');

            top3Container.innerHTML = `<h2 class="text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-5 opacity-70 spatial-text" style="color: var(--text-muted)">ТОП-3 пиццерий сети</h2><ul class="space-y-0.5 sm:space-y-1">${top3Html}</ul>`;
        } else {
            top3Container.innerHTML = `<p class="opacity-60 text-center py-4 text-xs sm:text-sm" style="color: var(--text-muted)">Нет данных для рейтинга.</p>`;
        }
    }
}

function populatePeriodSelect() {
    const periods = Object.keys(dbData.monthly);
    periodSelect.innerHTML = '';

    const sortedPeriods = getSortedPeriods().reverse();
    sortedPeriods.forEach(period => {
        const option = document.createElement('option');
        option.value = period;
        option.textContent = period;
        periodSelect.appendChild(option);
    });
}

function updateAllViews() {
    const selectedPeriod = periodSelect.value;
    const selectedPizzeria = pizzeriaSelect.value;
    generateNetworkSummary(selectedPeriod);
    updatePizzeriaReport(selectedPeriod, selectedPizzeria);
    updateBackgroundImage();
    setTimeout(() => {
        document.querySelectorAll('.progress-bar-animated').forEach(bar => {
            bar.style.width = bar.style.getPropertyValue('--target-width');
        });
    }, 50);
}

function updateBackgroundImage() {
    let bgUrl = backgrounds['default'];
    if (currentActiveTab === 'pizzeria') {
        const selectedPizzeria = pizzeriaSelect.value;
        if (backgrounds[selectedPizzeria]) {
            bgUrl = backgrounds[selectedPizzeria];
        }
    }
    document.getElementById('app-bg').style.backgroundImage = `url("${bgUrl}")`;
}

function switchTab(tabId) {
    currentActiveTab = tabId;
    updateBackgroundImage();

    [tabSummary, tabPizzeria, tabDynamics].forEach(btn => btn.classList.remove('active'));
    [pageSummary, pagePizzeria, pageDynamics].forEach(page => page.classList.add('hidden'));

    if (tabId === 'summary') {
        tabSummary.classList.add('active');
        pageSummary.classList.remove('hidden');
        periodSelectorContainer.classList.remove('invisible');
    } else if (tabId === 'pizzeria') {
        tabPizzeria.classList.add('active');
        pagePizzeria.classList.remove('hidden');
        periodSelectorContainer.classList.remove('invisible');
    } else if (tabId === 'dynamics') {
        tabDynamics.classList.add('active');
        pageDynamics.classList.remove('hidden');
        periodSelectorContainer.classList.add('invisible');
        requestAnimationFrame(() => {
            updateCharts();
        });
    }
}

tabSummary.addEventListener('click', () => switchTab('summary'));
tabPizzeria.addEventListener('click', () => switchTab('pizzeria'));
tabDynamics.addEventListener('click', () => switchTab('dynamics'));

pizzeriaSelect.addEventListener('change', updateAllViews);
periodSelect.addEventListener('change', updateAllViews);
dynamicsPizzeriaSelect.addEventListener('change', updateCharts);
dynamicsManagerSelect.addEventListener('change', updateCharts);

window.onload = function () {
    preloadBackgrounds();
    populatePeriodSelect();
    populatePizzeriaSelects();
    populateDynamicsSelects();
    updateAllViews();
};