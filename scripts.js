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
}

// 每秒钟更新一次
setInterval(updateClock, 1000);

// 初始更新时钟
updateClock();