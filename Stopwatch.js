let startBtn = document.getElementById('start'); 
let pauseBtn = document.getElementById('pause'); 
let resetBtn = document.getElementById('reset'); 
let lapBtn = document.getElementById('lap'); 

let hour =0; 
let minute=0 ; 
let second =0; 
let count=0 ; 
let laps = [];


startBtn.addEventListener('click', function () { 
	timer = true; 
	stopWatch(); 
}); 

pauseBtn.addEventListener('click', function () { 
	timer = false; 
}); 

resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	laps = []; 
    document.getElementById('hr').innerHTML = "00";
    document.getElementById('min').innerHTML = "00";
    document.getElementById('sec').innerHTML = "00";
    document.getElementById('count').innerHTML = "00";
    document.getElementById('lapList').innerHTML = ""; 
}); 

lapBtn.addEventListener('click', function () { 
    if (timer) {
        let lapTime = {
            hour: hour,
            minute: minute,
            second: second,
            count: count
        };
        laps.push(lapTime);
        displayLaps();
    }
});
function displayLaps() {
    let lapList = document.getElementById('lapList');
    lapList.innerHTML = '';

    laps.forEach(function(lap, index) {
        let lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${index + 1}: ${formatTime(lap.hour)}:${formatTime(lap.minute)}:${formatTime(lap.second)}.${formatCount(lap.count)}`;
        lapList.appendChild(lapItem);
    });
}

function formatTime(time) {
    return (time < 10 ? '0' : '') + time;
}

function formatCount(count) {
    return (count < 10 ? '0' : '') + count;
}


function stopWatch() { 
	if (timer) { 
		count++; 

		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 

		document.getElementById('hr').innerHTML = hrString; 
		document.getElementById('min').innerHTML = minString; 
		document.getElementById('sec').innerHTML = secString; 
		document.getElementById('count').innerHTML = countString; 
		setTimeout(stopWatch, 10); 
	} 
}
