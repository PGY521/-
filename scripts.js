function updateClock() {
    const now = new Date();
    
    // 获取北京时间（中国时区 UTC+8）
    const timeInBeijing = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Shanghai"}));
    
    // 获取时分秒
    const hours = timeInBeijing.getHours().toString().padStart(2, '0');
    const minutes = timeInBeijing.getMinutes().toString().padStart(2, '0');
    const seconds = timeInBeijing.getSeconds().toString().padStart(2, '0');
    
    // 更新页面上的时钟
    document.getElementById('hour').textContent = hours;
    document.getElementById('minute').textContent = minutes;
    document.getElementById('second').textContent = seconds;

    // 动态背景根据时间变化
    updateBackground(hours);
}

// 更新背景色根据时段
function updateBackground(hours) {
    if (hours >= 6 && hours < 12) {
        // 早晨：温暖的黄色和橙色渐变
        document.body.style.backgroundColor = "#FFD700"; // 金色
    } else if (hours >= 12 && hours < 18) {
        // 白天：清新的蓝色
        document.body.style.backgroundColor = "#87CEEB"; // 天蓝色
    } else if (hours >= 18 && hours < 21) {
        // 傍晚：紫色渐变
        document.body.style.backgroundColor = "#800080"; // 紫色
    } else {
        // 夜晚：深蓝色渐变
        document.body.style.backgroundColor = "#2C3E50"; // 深蓝色
    }
}

// 每秒钟更新一次
setInterval(updateClock, 1000);

// 初始更新时钟
updateClock();