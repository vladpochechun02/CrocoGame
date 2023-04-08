window.onload = function() {

	const cardBlock = document.querySelector('.card');
	const crocoNever = document.querySelector('.croco-never');
	const crocoEnd = document.querySelector('.croco-end-game');
	const buyFullVersion = document.querySelector('.buy');

	cardBlock.style.display = 'none';
	crocoNever.style.display = 'none';
	crocoEnd.style.display = 'none';
	buyFullVersion.style.display = 'none';

	setTimeout(() => {
		cardBlock.style.display = '';
	}, 1450);

	setTimeout(function() {

		document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 992px)').matches) { // If not mobile

			Draggable.create(cardBlock, {
				bounds: 'body',
				inertia: true
			})
		}

	}, 1500)

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

	function endGame() {
		cardText.textContent = "Вы прошли игру. Поздравляю!";
		timer.textContent = "";
		switchButton.style.display = 'none';
		playAgain.classList.remove('hide');
		exit.classList.remove('hide');
		buyFullVersion.style.display = '';
		startBtn.style.display = 'none';
		backCard.style.display = 'none';
		crocoEnd.style.display = '';
		playAgain.addEventListener('click', () => {
			location.reload();
		});
		exit.addEventListener('click', () => {
			window.close();
		});
	  }	

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
		timeWindow.style.display = 'none';
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
			  action: "Зуб мудрости на пенсии с внуками",
			  timeLimit: 180 // seconds
			},
			{
			  action: "Крокодил переросток нюхает воздух",
			  timeLimit: 180 // seconds
			},
			{
			  action: "Неисправный огнетушитель в школьном автобусе",
			  timeLimit: 180 // seconds
			},
			{
			  action: "Четырёхколёсный велосипед на футбольном поле",
			  timeLimit: 180 // seconds
			},
			{
			  action: "4 разноцветных таракана в кино с попкорном",
			  timeLimit: 180 // seconds (5 minutes)
			},
			{
			  action: "Докторская колбаса с сыром в микроволновке",
			  timeLimit: 180 // seconds
			},
			{
			  action: "Табуретка качает кровь по сети",
			  timeLimit: 180 // seconds
			},
			{
			  action: "Победа Украины над Россией",
			  timeLimit: 180 // seconds
			},
			{
			  action: "Криптовалюта украла деньги у людей",
			  timeLimit: 180 // seconds
			},
			{
			  action: "Винегрет спорит с Цезарем кто вкуснее",
			  timeLimit: 180 // seconds (5 minutes)
			},
			{
				action: "Рыба пытается научить кота плавать в ванной",
				timeLimit: 180 // seconds 
			},
			{
				action: "Длинный банан меряет линейкой короткий кабачок",
				timeLimit: 210 // seconds 
			},
			{
				action: "Банан на концерте с рок-звездой поет оперу",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Воздушный шарик бежит от голубя, который пытается его съесть",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Колобок едет на санях по городу на собрание",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Бутылка с водой разговаривает с прохожими и рассказывает им о своей жизни в океане",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Жаренная картошка убегает от сыра, который оказывается ее родным братом",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Люстра просит, чтобы ее не сжигали на костре",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Заец пытается научить бегать черепаху использую жесты",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Стакан с молоком превращается в кота и начинает гоняться за мышей",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Лимон пытается убедить апельсин, что он является королем фруктов",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Жираф рассказывает слону, что он лучший пилот в мире",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Радуга ворует краски у артиста, чтобы нарисовать картину в небе",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Белка стала президентом страны и приняла закон",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Кошка ведет себя как собака, и несёт палку во рту",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Кнопочный мобильный телефон учит людей медитировать",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Курица пишет песни о своей жизни на ферме",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Кофейная чашка начинает танцевать и устраивает вечеринку",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Медведь становится главным поваром в ресторане",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Гусеница превратилась в бабочку на балу",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Желтый цветок приглашает на свидание пчелу",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Банан и его дети отдыхают на тропическом острове",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Кот стал роботом и начинал печь пироги",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Солнце ушло в отпуск и улетело на луну",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Велосипед пытается научить своего хозяина кататься на одном колесе",
				timeLimit: 300 // seconds (5 minutes)
			},
			{
				action: "Жираф прыгает с парашютом и наслаждается видом на Африку",
				timeLimit: 300 // seconds (5 minutes)
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
			},
			{
				action: "Скажите 10 слов, начинающихся на букву 'А'",
				timeLimit: 30
			},
			{
				action: "Придумайте 5 песен про космос",
				timeLimit: 180
			},
			{
				action: "Рассказ на тему 'Моя последняя поездка на море'",
				timeLimit: 150
			},
			{
				action: "Поделитесь своим любимым рецептом десерта",
				timeLimit: 90
			},
			{
				action: "Расскажите о своем самом любимом фильме",
				timeLimit: 120
			},
			{
				action: "Нарисуйте портрет своего друга",
				timeLimit: 300
			},
			{
				action: "Составьте список своих любимых книг",
				timeLimit: 60
			},
			{
				action: "Придумайте 5 вопросов для викторины на тему 'История Украины'",
				timeLimit: 120
			},
			{
				action: "Напишите письмо своей будущей себе через 10 лет",
				timeLimit: 150
			},
			{
				action: "Расскажите о своих планах на ближайший год",
				timeLimit: 120
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
  	});

	//I  NEVER NOT
	iNeverNot.addEventListener('click', () => {
		
		hideMenuBtns();

		showCardContent();

		crocoNever.style.display = '';

		const cardsForIneverNot = [
			{
			  action: "Пил алкоголь",
			},
			{
			  action: "Дарил телефон",
			},
			{
				action: "Никогда не давал/а взятку, чтобы избежать штрафа.",
			},
			{
				action: "Никогда не просыпался/ась в незнакомом месте, не помня, как туда попал/а.",
			},
			{
				action: "Никогда не врал/а, чтобы получить работу/хорошую оценку/что-то еще.",
			},
			{
				action: "Никогда не был/а на свидании с более чем одним человеком в течение дня.",
			},
			{
				action: "Никогда не был/а в тюрьме.",
			},
			{
				action: "Никогда не пробовал/а наркотики.",
			},
			{
				action: "Никогда не покупал/а себе что-то дорогое, используя кредит.",
			},
			{
				action: "Никогда не купал/а себе подарок на День Рождения.",
			},
			{
				action: "Никогда не пел/а караоке в публичном месте.",
			},
			{
				action: "Никогда не пытался/ась научиться новому языку.",
			},
			{
				action: "Никогда не отправлял/а неподходящее сообщение в чат с ошибкой адресата.",
			},
			{
				action: "Никогда не отменял/а свои планы в последний момент из-за лени или отсутствия настроения.",
			},
			{
				action: "Никогда не угрожал/а кому-либо или не был/а объектом угрозы со стороны других людей.",
			},
			{
				action: "Никогда не совершал/а действия, которые противоречат моим личным убеждениям и принципам.",
			},
			{
				action: "Никогда не скрывал/а от родных и близких свои чувства и эмоции.",
			},
			{
				action: "Никогда не забывал/а важные даты, такие как День Рождения, годовщину свадьбы и т.д.",
			},
			{
				action: "Никогда не нарушал/а правила дорожного движения.",
			},
			{
				action: "Никогда не был/а волонтёром или не делал/а добровольные пожертвования на благотворительность.",
			},
			{
				action: "Никогда не был/а свидетелем происшествия, требующего вызова полиции или скорой помощи.",
			},
			{
				action: "Никогда не делал/а себе татуировку или пирсинг без серьёзного обдумывания и неожиданных последствий.",
			},
			{
				action: "Никогда не участвовал/а в экстремальных видах спорта, таких как бейсджампинг или скалолазание.",
			},	
			{	
				action: "Никогда не был/а свидетелем яркого и впечатляющего шоу, такого как концерт знаменитого исполнителя или салют в День Независимости.",
			},	
			{	
				action: "Никогда не владел/а экзотическими домашними животными, такими как змеи или ящерицы.",
			},	
			{	
				action: "Никогда не участвовал/а в уличной драке или другом насильственном конфликте.",
			},	
			{	
				action: "Никогда не имел/а романтических отношений с коллегой по работе.",
			},	
			{	
				action: "Никогда не находил/а себя в ситуации, когда мне пришлось принимать трудное решение, связанное с выбором между двумя вариантами.",
			},	
			{	
				action: "Никогда не просыпался/ась на работе или в учебном заведении.",
			},	
			{	
				action: "Никогда не играл/а в казино или не делал/а ставки на спорт.",
			},	
			{	
				action: "Никогда не был/а на острове или в глубоком лесу, где не было никакой связи со внешним миром.",
			},	
			{	
				action: "Никогда не летал/а на самолете или не путешествовал/а за границу.",
			},
			{
				action: "Никогда не прогуливал/а школу или университет без уважительной причины.",
			},	
			{	
				action: "Никогда не участвовал/а в теле-шоу или реалити-шоу.",
			},	
			{	
				action: "Никогда не смотрел/а фильмы ужасов, которые считаются классикой жанра, например, 'Оно' или 'Пятница 13-е'.",
			},	
			{	
				action: "Никогда не делал/а самостоятельно татуировки или пирсинга.",
			},	
			{	
				action: "Никогда не пробовал/а запрещенных веществ, таких как марихуана или кокаин.",
			},	
			{	
				action: "Никогда не плавал/а с дельфинами или другими морскими животными.",
			},	
			{	
				action: "Никогда не участвовал/а в благотворительных акциях или волонтерской деятельности.",
			},	
			{	
				action: "Никогда не был/а в больнице или на операции.",
			},	
			{	
				action: "Никогда не жил/а в общежитии или студенческом общежитии.",
			},	
			{	
				action: "Никогда не был/а свидетелем чего-то сверхъестественного, например, призрака или НЛО.",
			},	
			{	
				action: "Никогда не ездил/а на мотоцикле или скутере.",
			},	
			{	
				action: "Никогда не пробовал/а еду, которую готовят в необычных местах, например, на улице или на рынке.",
			},	
			{	
				action: "Никогда не был/а на концерте классической музыки.",
			},	
			{	
				action: "Никогда не выигрывал/а большую сумму денег в лотерее или казино.",
			},	
			{	
				action: "Никогда не участвовал/а в крупных протестах или митингах.",
			},	
			{	
				action: "Никогда не снимал/а квартиру на длительный срок.",
			},	
			{	
				action: "Никогда не ездил/а на ретро-автомобиле.",
			},	
			{	
				action: "Никогда не занимался/ась спортивными единоборствами, например, кикбоксингом или каратэ.",
			},	
			{	
				action: "Никогда не был/а на выставке картин или скульптур.",
			},	
			{	
				action: "Никогда не катался/ась на вертолете или параплане.",
			},	
			{	
				action: "Никогда не участвовал/а в съемках фильма или сериала.",
			},	
			{	
				action: "Никогда не делал/а экстремальный вид спорта, например, бейсджампинг или скейтбординг.",
			},	
			{	
				action: "Никогда не пытался/ась научиться играть на музыкальном инструменте.",
			},	
			{	
				action: "Никогда не смотрел/а балет.",
			},	
			{	
				action: "Никогда не бывал/а в тюрьме или арестован/а.",
			},	
			{	
				action: "Никогда не участвовал/а в танцевальном конкурсе или шоу.",
			},	
			{	
				action: "Никогда не имел/а питомца, например, собаку или кошку.",
			},	
			{	
				action: "Никогда не делал/а путешествия за границу.",
			},	
			{	
				action: "Никогда не был/а на свадьбе или венчании.",
			},	
			{	
				action: "Никогда не бывал/а на рыбалке или охоте.",
			},
			{
				action: "Никогда не пробовал/а блюда, приготовленного из экзотических ингредиентов, например, змеи или скорпионы.",
			}
,
			{
				action: "Никогда не работал/а в ресторане или баре.",
			}
,
			{
				action: "Никогда не писал/а стихи или песни.",
			},	
			{
				action: "Никогда не смотрел/а зарубежный сериал, который считается культовым.",
			},	
			{
				action: "Никогда не занимался/ась вокалом или не пел/а на сцене.",
			},	
			{
				action: "Никогда не был/а на рок-концерте или музыкальном фестивале.",
			},	
			{
				action: "Никогда не играл/а в компьютерные игры.",
			},	
			{
				action: "Никогда не занимался/ась фотографией или не был/а на фотосессии.",
			},	
			{
				action: "Никогда не брал/а уроки танцев, музыки или искусства.",
			},	
			{
				action: "Никогда не был/а на катке или не катался/ась на лыжах.",
			},	
			{
				action: "Никогда не был/а на собрании или встрече с выпускниками своей школы.",
			},	
			{
				action: "Никогда не пел/а караоке в общественном месте.",
			},	
			{
				action: "Никогда не был/а на выставке автомобилей или мотоциклов.",
			},	
			{
				action: "Никогда не участвовал/а в квесте или экскурсии.",
			},	
			{
				action: "Никогда не говорил/а на публике или не выступал/а с речью.",
			},	
			{
				action: "Никогда не играл/а в настольные игры.",
			},	
			{
				action: "Никогда не смотрел/а настоящий боевик или фильм ужасов.",
			},	
			{
				action: "Никогда не был/а на концерте классической музыки или опере.",
			},	
			{
				action: "Никогда не участвовал/а в карнавале или фестивале народных традиций.",
			},	
			{
				action: "Никогда не был/а на сессии или экзамене в вузе или колледже.",
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
			const card = cardsForIneverNot[cardIndex];
			cardText.textContent = card.action;
			timer.style.display = 'none';
			startBtn.style.display = 'none';
			if (cardIndex == 0) {
				backCard.style.display = 'none';
			} else {
				backCard.style.display = '';
			}
		}
		  
		function switchCard() {
			if (cardIndex < cardsForIneverNot.length - 1) {
				cardIndex++;
				showCard();	
				// timeWindow.style.display = 'none';
				startBtn.style.display = 'none';
				stopTimer.style.display ='none';
			} else {
			  endGame();
			  if (endGame) {
				crocoNever.style.display = 'none';
			  }
			}
		}

		function switchPrevCard() {
			cardIndex--;
			showCard();	
			startBtn.style.display = 'none';
		}	
  	});

	//True or Action
	truthOrAction.addEventListener('click', () => {
		  gameInDeveloping(truthOrAction);
	});
}


