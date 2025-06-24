
// main_full_unlock.js - Unlock toàn bộ 32 bài toán

let units = resetUnits();
localStorage.setItem('units', JSON.stringify(units));

function displayUnits() {
    let html = `<h1>Chinh phục toán 9 và đề thi Toán tuyển sinh vào 10</h1>`;
    units.forEach((unit, index) => {
        const { id, name, levels } = unit;
        html += `
            <div class="unit">
                <div class="unit-line">
                    <div class="unit-name">
                        ${name}
                    </div>
                </div>        
                <div class="unit-levels">
        `;
        levels.forEach((level, idx) => {
            html += `
                <div class="level">
                    <div class="level-btn unlock-level"></div>
                    <div class="intro-level">
                        <span class="level-name">${level.name}</span>
                        <a class="start-btn" href="unit/${index + 1}/level/${idx + 1}">Bắt đầu</a>
                    </div>
                </div>
            `;
        });
        html += `</div></div>`;
    });
    document.querySelector('.mid-section').innerHTML = html;
}

function addEvent() {
    const levelButtons = document.querySelectorAll('.level-btn.unlock-level');
    levelButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.intro-level').forEach(intro => {
                intro.classList.remove('show');
                intro.style.display = 'none';
            });
            const introLevel = btn.nextElementSibling;
            if (introLevel) {
                introLevel.style.display = 'flex';
                requestAnimationFrame(() => {
                    introLevel.classList.add('show');
                });
            }
        });
    });
}

function saveScrollPosition() {
    window.addEventListener('beforeunload', function () {
        localStorage.setItem('scrollPosition', window.scrollY);
    });
    window.addEventListener('load', function () {
        const scrollPosition = localStorage.getItem('scrollPosition');
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition));
        }
    });
}

function addIdentity() {
    let identitys = [
        "(a + b)² = a² + b² + 2ab",
        "(a - b)² = a² + b² - 2ab",
        "a² - b² = (a - b)(a + b)",
        "(a + b)³ = a³ + b³ + 3ab(a + b)",
        "(a - b)³ = a³ - b³ - 3ab(a - b)",
        "a³ + b³ = (a + b)(a² - ab + b²)",
        "a³ - b³ = (a - b)(a² + ab + b²)"
    ];
    let html = `<h1>7 hằng đằng thức đáng nhớ</h1>`;
    identitys.forEach(identity => {
        html += `<div class="identity">${identity}</div>`;
    });
    const rightSection = document.querySelector('.right-section');
    rightSection.innerHTML = html;
}

function resetUnits() {
    return 
    [
        {
            id: 15,
            name: `Độ dài của cung tròn <br> Diện tích hình quạt tròn và          hình vành khuyên`,
            levels: [
            ]
        },
        {
            id: 16,
            name: `Vị trí tương đối của đường thẳng và đường tròn`,
            levels: [
            ]
        },
        {
            id: 17,
            name: `Vị trí tương đối của hai đường tròn`,
            levels: [
            ]
        },
        {
            id: 18,
            name: `Hàm số y = ax² (a ≠ 0)`,
            levels: [
            ]
        },
        {
            id: 19,
            name: `Phương trình bậc hai một ẩn`,
            levels: [
            ]
        },
        {
            id: 20,
            name: `Định lí viete và ứng dụng`,
            levels: [
            ]
        },
        {
            id: 21,
            name: `Giải bài toán bằng cách lập phương trình`,
            levels: [
            ]
        },
        {
            id: 22,
            name: `Bảng tần số và biểu đồ tần số`,
            levels: [
            ]
        },
        {
            id: 23,
            name: `Bảng tần số tương đối và biểu đồ tần số tương đối`,
            levels: [
            ]
        },
        {
            id: 24,
            name: `Bảng tần số, tần số tương đối ghép nhóm và biểu đồ`,
            levels: [
            ]
        },
        {
            id: 25,
            name: `Phép thử ngẫu nhiên và không gian mẫu`,
            levels: [
            ]
        },
        {
            id: 26,
            name: `Xác suất của biến cố có liên quan tới phép thử`,
            levels: [
            ]
        },
        {
            id: 27,
            name: `Góc nội tiếp`,
            levels: [
            ]
        },
        {
            id: 28,
            name: `Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác`,
            levels: [
            ]
        },
        {
            id: 29,
            name: `Tứ giác nội tiếp`,
            levels: [
            ]
        },
        {
            id: 30,
            name: `Đa giác đều`,
            levels: [
            ]
        },
        {
            id: 31,
            name: `Hình trụ và hình nón`,
            levels: [
            ]
        },
        {
            id: 32,
            name: `Hình cầu`,
            levels: [
            ]
        },
        {
            id: 15,
            name: `Độ dài của cung tròn <br> Diện tích hình quạt tròn và              hình vành khuyên`,
            levels: [
            ]
        },
        {
            id: 16,
            name: `Vị trí tương đối của đường thẳng và đường tròn`,
            levels: [
            ]
        },
        {
            id: 17,
            name: `Vị trí tương đối của hai đường tròn`,
            levels: [
            ]
        },
        {
            id: 18,
            name: `Hàm số y = ax² (a ≠ 0)`,
            levels: [
            ]
        },
        {
            id: 19,
            name: `Phương trình bậc hai một ẩn`,
            levels: [
            ]
        },
        {
            id: 20,
            name: `Định lí viete và ứng dụng`,
            levels: [
            ]
        },
        {
            id: 21,
            name: `Giải bài toán bằng cách lập phương trình`,
            levels: [
            ]
        },
        {
            id: 22,
            name: `Bảng tần số và biểu đồ tần số`,
            levels: [
            ]
        },
        {
            id: 23,
            name: `Bảng tần số tương đối và biểu đồ tần số tương đối`,
            levels: [
            ]
        },
        {
            id: 24,
            name: `Bảng tần số, tần số tương đối ghép nhóm và biểu đồ`,
            levels: [
            ]
        },
        {
            id: 25,
            name: `Phép thử ngẫu nhiên và không gian mẫu`,
            levels: [
            ]
        },
        {
            id: 26,
            name: `Xác suất của biến cố có liên quan tới phép thử`,
            levels: [
            ]
        },
        {
            id: 27,
            name: `Góc nội tiếp`,
            levels: [
            ]
        },
        {
            id: 28,
            name: `Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác`,
            levels: [
            ]
        },
        {
            id: 29,
            name: `Tứ giác nội tiếp`,
            levels: [
            ]
        },
        {
            id: 30,
            name: `Đa giác đều`,
            levels: [
            ]
        },
        {
            id: 31,
            name: `Hình trụ và hình nón`,
            levels: [
            ]
        },
        {
            id: 32,
            name: `Hình cầu`,
            levels: [
            ]
        },
    ];
}

displayUnits();
addEvent();
saveScrollPosition();
addIdentity();
