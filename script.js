window.onload = function() {

	setTimeout(function() {

		document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 992px)').matches) { // If not mobile

			Draggable.create('.card', {
				bounds: 'body',
				inertia: true
			})
		}

	}, 2000)

	let cardIndex = 0;
	let timerIntervalId;
	
	const cardText = document.querySelector(".card-text");
	const timer = document.querySelector("#timer");
	const switchButton = document.querySelector("#switch-button");
	const startBtn = document.querySelector("#start-button");
	const playAgain = document.querySelector("#again-button");
	const exit = document.querySelector("#exit-button");
	const timeWindow = document.querySelector('.window');
	
	const cards = [
	  {
		action: "Паук дерется против осьминога в бункере",
		timeLimit: 180 // seconds
	  },
	  {
		action: "Жаба качек ест кабачек",
		timeLimit: 180 // seconds
	  },
	  {
		action: "Шоколадный слон пьет пиво",
		timeLimit: 180 // seconds
	  },
	  {
		action: "Пьянный мяч не хочет играть в футбол",
		timeLimit: 180 // seconds
	  },
	  {
		action: "Небесный спортзал для орангутангов",
		timeLimit: 180 // seconds (5 minutes)
	  },
	  {
		action: "Невкусный банан убегает от муравья",
		timeLimit: 180 // seconds
	  },
	  {
		action: "Пираньи едят дельфина в аквариуме",
		timeLimit: 180 // seconds
	  },
	  {
		action: "Пивная комната для комаров",
		timeLimit: 180 // seconds
	  },
	  {
		action: "Хозяин купил бдсм игрушку",
		timeLimit: 180 // seconds
	  },
	  {
		action: "Картонный танк снесло ветром",
		timeLimit: 180 // seconds (5 minutes)
	  }
	];
	
	showCard();
	
	switchButton.addEventListener("click", function () {
	  switchCard();
	});
	
	function showCard() {
	  clearInterval(timerIntervalId);
	  const card = cards[cardIndex];
	  cardText.textContent = card.action;
	  timer.textContent = `Время : ${card.timeLimit} секунд`;
	//   timerIntervalId = setInterval(updateTimer, 1000);
	}

	function showTimeUp() {
		timeWindow.style.display = 'flex';
	}

	startBtn.addEventListener('click', () => {
		timerIntervalId = setInterval(updateTimer, 1000);
		startBtn.disabled = true;
	});
	
	function updateTimer() {
	  const timeLeft = parseInt(timer.textContent.split(" ")[2]);
	  if (timeLeft > 0) {
		timer.textContent = `Время : ${timeLeft - 1} секунд`;
	  } else { 
		// alert('Время вышло!');
		// switchCard();
		// timer.textContent = '✓';
		timer.style.color = 'red';
		showTimeUp();
	  }
	}
	
	function switchCard() {
	  clearInterval(timerIntervalId);
	  if (cardIndex < cards.length - 1) {
		cardIndex++;
		showCard();	
		timer.style.color = 'black';
		timeWindow.style.display = 'none';
		startBtn.disabled = false;
	  } else {
		endGame();
	  }
	}
	
	function endGame() {
		cardText.textContent = "Вы прошли игру. Поздравляю!";
		timer.textContent = "";
		switchButton.disabled = true;
		playAgain.classList.remove('hide');
		exit.classList.remove('hide');
		startBtn.style.display = 'none';
		playAgain.addEventListener('click', () => {
			location.reload();
		});
		exit.addEventListener('click', () => {
			window.close();
		});
	}	
}


