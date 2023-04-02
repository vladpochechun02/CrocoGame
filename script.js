window.onload = function() {

	const cardBlock = document.querySelector('.card');

	cardBlock.style.display = 'none';

	setTimeout(() => {
		cardBlock.style.display = '';
	}, 1950);

	setTimeout(function() {

		document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 992px)').matches) { // If not mobile

			Draggable.create(cardBlock, {
				bounds: 'body',
				inertia: true
			})
		}

	}, 2000)


	let cardIndex = 0;
	let notificationIndex = 0;
	let timerIntervalId;
	
	const cardText = document.querySelector(".card-text");
	const timer = document.querySelector("#timer");
	const switchButton = document.querySelector("#switch-button");
	const startBtn = document.querySelector("#start-button");
	const playAgain = document.querySelector("#again-button");
	const exit = document.querySelector("#exit-button");
	const timeWindow = document.querySelector('.window');
	const challenge = document.querySelector("#challenge-button");
	const crocoodile = document.querySelector("#crocodile-button");
	const truthOrAction = document.querySelector("#truth-button");
	const iNeverNot = document.querySelector("#never-button");
	const notification = document.querySelector('.message');
	const stopTimer = document.querySelector('#stop-button');
	const backCard = document.querySelector("#back-button");
	

	const messages = [
		{
			timeUp: 'Время вышло!'
		},
		{
			inDeveloping: 'Игра в разработке...'
		}
	]

	stopTimer.style.display ='none';
	timer.style.display = 'none';
	switchButton.style.display = 'none';
	startBtn.style.display = 'none';
	backCard.style.display = 'none';

	//Crocodile game
	crocoodile.addEventListener('click', () => {

		challenge.style.display = 'none';
		crocoodile.style.display = 'none';
		truthOrAction.style.display = 'none';
		iNeverNot.style.display = 'none';

		timer.style.display = '';
		switchButton.style.display = '';
		startBtn.style.display = '';
		backCard.style.display = '';

		const cards = [
			{
			  action: "Паук дерется против осьминога в бункере",
			  timeLimit: 6 // seconds
			},
			{
			  action: "Жаба качек ест кабачек",
			  timeLimit: 1 // seconds
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

		backCard.addEventListener("click", function () {
			switchPrevCard();
		});
		  
		function showCard() {
			clearInterval(timerIntervalId);
			const card = cards[cardIndex];
			cardText.textContent = card.action;
			timer.textContent = `Время : ${card.timeLimit} секунд`;
		  //   timerIntervalId = setInterval(updateTimer, 1000);
			if (cardIndex == 0) {
				backCard.style.display = 'none';
			} else {
				backCard.style.display = '';
		}
		}
	  
		  function showTimeUp() {
			const msgs = messages[notificationIndex];
			notification.textContent = msgs.timeUp;
			timeWindow.style.display = 'flex';
		  }
	  
		  startBtn.addEventListener('click', () => {
			  timerIntervalId = setInterval(updateTimer, 1000);
			  startBtn.style.display ='none';
			  stopTimer.style.display ='';
			//   startBtn.disabled = true;
			//   stopTimer.disabled = false;
		  });

		  stopTimer.addEventListener('click', () => {
			clearInterval(timerIntervalId);
			startBtn.style.display ='';
			stopTimer.style.display ='none';
			// startBtn.disabled = false;
			// stopTimer.disabled = true;
		  });
		  
		  function updateTimer() {
			const timeLeft = parseInt(timer.textContent.split(" ")[2]);
			if (timeLeft > 0) {
				timer.textContent = `Время : ${timeLeft - 1} секунд`;
			}
			 else { 
				stopTimer.style.display ='none';
				startBtn.style.display = '';
				startBtn.disabled = true;
				timer.style.color = 'red';
				timeLeft = timeLeft + 1;
				showTimeUp();
			}
			if ((timeLeft % 10) < 6 && timeLeft > 0) {
				timer.textContent = `Время : ${timeLeft - 1} секунды`;
			}
			if ((timeLeft % 10) == 2) {
				timer.textContent = `Время : ${timeLeft - 1} секундa`;
			}
			if ((timeLeft % 10) == 1) {
				timer.textContent = `Время : ${timeLeft - 1} секунд`;
			}
			if ((timeLeft % 10) == 0) {
				timer.textContent = `Время : ${timeLeft - 1} секунд`;
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
				stopTimer.style.display ='none';
				startBtn.style.display = '';
			} else {
			  endGame();
			}
		  }

		  function switchPrevCard() {
			clearInterval(timerIntervalId);
			cardIndex--;
			showCard();	
			timer.style.color = 'black';
			timeWindow.style.display = 'none';
			startBtn.disabled = false;
			stopTimer.style.display ='none';
			startBtn.style.display = '';
		  }
		  
		  function endGame() {
			  cardText.textContent = "Вы прошли игру. Поздравляю!";
			  timer.textContent = "";
			//   switchButton.style.display = 'none';
			  switchButton.disabled = true;
			  playAgain.classList.remove('hide');
			  exit.classList.remove('hide');
			  startBtn.style.display = 'none';
			  backCard.style.display = 'none';
			  playAgain.addEventListener('click', () => {
				  location.reload();
			  });
			  exit.addEventListener('click', () => {
				  window.close();
			  });
		  }	
	});
	
	function gameInDeveloping(elem) {
		const msgs = messages[notificationIndex + 1];
		notification.textContent = msgs.inDeveloping;
		timeWindow.style.display = 'flex';
		elem.disabled = true;
		setTimeout(() => {
			timeWindow.style.display = 'none';
			elem.disabled = false;
		}, 1500);
	}
	
	challenge.addEventListener('click', () => {
		gameInDeveloping(challenge);
  	});

	iNeverNot.addEventListener('click', () => {
		gameInDeveloping(iNeverNot);
  	});

	truthOrAction.addEventListener('click', () => {
		  gameInDeveloping(truthOrAction);
	});
}


