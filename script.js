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

	function hideMenuBtns() {
		challenge.style.display = 'none';
		crocoodile.style.display = 'none';
		truthOrAction.style.display = 'none';
		iNeverNot.style.display = 'none';
	}

	function showCardContent() {
		timer.style.display = '';
		switchButton.style.display = '';
		startBtn.style.display = '';
		backCard.style.display = '';
	}

	//Crocodile game
	crocoodile.addEventListener('click', () => {

		hideMenuBtns();

		showCardContent();

		const cards = [
			{
			  action: "Паук дерется против осьминога в бункере",
			  timeLimit: 1 // seconds
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
		    // timerIntervalId = setInterval(updateTimer, 1000);
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
			} else  { 
				stopTimer.style.display ='none';
				startBtn.style.display = '';
				startBtn.disabled = true;
				timer.style.color = 'red';
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
			if (timeLeft == 0) {
				timer.textContent = `Время : ${timeLeft} секунд`;
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

	//CHALLANGE GAME
	challenge.addEventListener('click', () => {

		hideMenuBtns();

		showCardContent();

		const cardsForChallenge = [
			{
				action: 'Постучать по дереву',
				timeLimit: 10 // seconds
			},
			{
				action: 'Ударить человека справа',
				timeLimit: 10 // seconds
			},
			{
				action: 'Сделать 5 отжиманий',
				timeLimit: 35// seconds
			},
			{
				action: 'Купить у игрока любой предмет',
				timeLimit: 20 // seconds
			},
			{
				action: 'Показать фокус',
				timeLimit: 15 // seconds
			},
			{
				action: 'Назвать самого сексуального игрока',
				timeLimit: 10 // seconds
			},
			{
				action: 'Рассказать интересный факт, о котором мало кто знает',
				timeLimit: 15// seconds
			},
			{
				action: 'Снять футболку',
				timeLimit: 15 // seconds
			},
			{
				action: 'Показать последнее фото в галерее',
				timeLimit: 20 // seconds
			},
			{
				action: 'Станцевать стриптиз для игрока слева',
				timeLimit: 40 // seconds
			},
			{
				action: 'Сделать 15 приседаний',
				timeLimit: 30// seconds
			},
			{
				action: 'Продать игроку любой предмет',
				timeLimit: 40 // seconds
			},
			{
				action: 'Рассказать анекдот',
				timeLimit: 100 // seconds
			},
			{
				action: 'Назвать игрока с которым хотел бы заняться сексом',
				timeLimit: 10 // seconds
			},
			{
				action: 'Вырвать волос у игрока справа',
				timeLimit: 15// seconds
			},
			{
				action: 'Снять штаны',
				timeLimit: 15 // seconds
			},
			{
				action: 'Показать бой с тенью',
				timeLimit: 25 // seconds
			},
			{
				action: 'Обменяться футболками с игроком напротив',
				timeLimit: 10 // seconds
			},
			{
				action: 'Выполнить приказы каждого из игроков',
				timeLimit: 120// seconds
			},
			{
				action: 'Зачитать рэп (быстро)',
				timeLimit: 30 // seconds
			},
			{
				action: 'Расмешить кого то из игроков',
				timeLimit: 25 // seconds
			},
			{
				action: 'Назвать самого безэмоционального игрока',
				timeLimit: 10 // seconds
			},
			{
				action: 'Рассказать факт о себе, о котором никто не знает',
				timeLimit: 30// seconds
			},
			{
				action: 'Расказать свою сексуальную фантазию',
				timeLimit: 30 // seconds
			},
			{
				action: 'Сделать кринжовое фото и выставить его в инстаграм',
				timeLimit: 150 // seconds
			},
			{
				action: 'Отшлепать игрока слева',
				timeLimit: 20 // seconds
			},
			{
				action: 'Написать бывшему(ой) что соскучился',
				timeLimit: 120// seconds
			},
			{
				action: 'Скинуть дик-пик или ню фото игроку напротив',
				timeLimit: 120 // seconds
			},
			{
				action: 'Спеть гимн Украины',
				timeLimit: 180 // seconds
			},
			{
				action: 'Назвать игрока которого считаешь самым умным',
				timeLimit: 10 // seconds
			},
			{
				action: 'Рассказать о своём первом сексе',
				timeLimit: 200// seconds
			},
			{
				action: 'Все игроки по очереди плюют на стол, и тот кому выпала эта карточка должен всё выпить',
				timeLimit: 120 // seconds
			},
			{
				action: 'Отгадать загадку от игрока',
				timeLimit: 50 // seconds
			},
			{
				action: 'Побороть игрока напротив в армреслинг',
				timeLimit: 120// seconds
			},
			{
				action: 'Придумать стих из 8 строчек и рассказать его',
				timeLimit: 120 // seconds
			},
			{
				action: 'Рассказать о своём самом большом сожалении/провале',
				timeLimit: 120 // seconds
			},
			{
				action: 'Перевести игроку с именем Влад 10 грн на карту',
				timeLimit: 100 // seconds
			},
			{
				action: 'Повторить движение, которое придумают игроки',
				timeLimit: 100 // seconds
			},
			{
				action: 'Изобразить слона',
				timeLimit: 20 // seconds
			},
			{
				action: 'Громко про-ку-ка-ре-кать 3 раза',
				timeLimit: 20 // seconds
			},
			{
				action: 'Назвать знаменитость с которой занялся б сексом',
				timeLimit: 20 // seconds
			},
			{
				action: 'Сыграть в игру: кто кого пересмотрит с игроком справа',
				timeLimit: 180 // seconds
			},
			{
				action: 'Побороться с игроком слева на пальцах',
				timeLimit: 180 // seconds
			},
			{
				action: 'Назвать по 5 разных комплиментов для каждого из игроков',
				timeLimit: 180 // seconds
			},
			{
				action: 'Перечислить 3 главных минуса каждого из игроков',
				timeLimit: 180 // seconds
			},
			{
				action: 'Выставить в историю любого человека и подписать "Царство Небесное"',
				timeLimit: 180 // seconds
			},

			{
				action: 'Сделать эротический массаж игроку слева',
				timeLimit: 180 // seconds
			},
			{
				action: 'Отрыгнуть 3 раза',
				timeLimit: 20 // seconds
			},
			{
				action: 'Выговорить 3 скороговорки на выбор игроков',
				timeLimit: 180 // seconds
			},
			{
				action: 'Перечислить 10 боксёров',
				timeLimit: 180 // seconds
			},
			{
				action: 'Придумать 10 рифм на своё имя',
				timeLimit: 120 // seconds
			}
		]

		showChallengeCard();

		switchButton.addEventListener("click", function () {
			switchCard();
		});

		backCard.addEventListener("click", function () {
			switchPrevCard();
		});

		function showChallengeCard() {
			clearInterval(timerIntervalId);
			const card = cardsForChallenge[cardIndex];
			cardText.textContent = card.action;
			timer.textContent = `Время : ${card.timeLimit} секунд`;
		    // timerIntervalId = setInterval(updateTimer, 1000);
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
			} else  { 
				stopTimer.style.display ='none';
				startBtn.style.display = '';
				startBtn.disabled = true;
				timer.style.color = 'red';
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
			if (timeLeft == 0) {
				timer.textContent = `Время : ${timeLeft} секунд`;
			}
		}

		function switchCard() {
			clearInterval(timerIntervalId);
			if (cardIndex < cardsForChallenge.length - 1) {
				cardIndex++;
				showChallengeCard();
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
			showChallengeCard();
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



	iNeverNot.addEventListener('click', () => {
		gameInDeveloping(iNeverNot);
  	});

	truthOrAction.addEventListener('click', () => {
		  gameInDeveloping(truthOrAction);
	});
}


