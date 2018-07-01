
	var onSaidBar = document.querySelectorAll('.tab-item__cros');
	var offSaidBar = document.querySelectorAll('.tab-box__cros');
	var closePosition = document.querySelectorAll('.tab-box__cover');
	var openPosition = document.querySelectorAll('.tab-item');	

	offSaidBar[0].addEventListener('click', function () {
		openPosition[0].classList.remove('tab-item');
		closePosition[0].classList.add('tab-item');
	});

	offSaidBar[1].addEventListener('click', function () {
		openPosition[1].classList.remove('tab-item');
		closePosition[1].classList.add('tab-item');

	});

	offSaidBar[2].addEventListener('click', function () {
		openPosition[2].classList.remove('tab-item');
		closePosition[2].classList.add('tab-item');

	});

	offSaidBar[3].addEventListener('click', function () {
		openPosition[3].classList.remove('tab-item');
		closePosition[3].classList.add('tab-item');

	});

	onSaidBar[0].addEventListener('click', function () {
		openPosition[0].classList.add('tab-item');
		closePosition[0].classList.remove('tab-item');
	});

	onSaidBar[1].addEventListener('click', function () {
		openPosition[1].classList.add('tab-item');
		closePosition[1].classList.remove('tab-item');
	});

	onSaidBar[2].addEventListener('click', function () {
		openPosition[2].classList.add('tab-item');
		closePosition[2].classList.remove('tab-item');
	});

	onSaidBar[3].addEventListener('click', function () {
		openPosition[3].classList.add('tab-item');
		closePosition[3].classList.remove('tab-item');
	});















	













