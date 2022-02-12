import React from "react";
export const TranslationContext = React.createContext();
export const translations = {
  en: {
    age: "Age",
    years: "years",
    mounthes: "mounthes",
    weeks: "weeks",
    days: "days",
    hours: "hours",
    minutes: "minutes",
    seconds: "seconds",
    toDecimal: "to decimal",
    toBinary: "to fingers-binary",
    changeBack: "Change background",
    author: "Alexey Akulich",
    specify: "Junior web-developer",
    contacts: "Contacts",
    location: "City",
    city: "St.Petersburg, Kudrovo",
    phone: "Phone",
    target: "Purpose",
    purpose:
      "Level up Linus Torvalds, Bill Gates, Steve Jobs, Pavel Durov, Satoshi Nakamoto or something like that. Contribute to IT new story of getting rich.",
    summary:
      "Knowledge of JavaScript, React, Html, Css, Bash basics, TypeScript basics, Angular basics, Vue basics, Python basics, Django basics. Writing code both in Visual Studio Code and by hand. Understanding of OOP, knowledge of BEM. Working with the layout in Figma and Photoshop. Working with databases (SQL, NoSql). Ability to work with API requests in Postman and Charles. Knowledge of the basics of manual and automated testing. Knowledge of English at B1 level",
    certificates: "Certificates",
    /* workExperience:
      "I have changed many different fields of activity (construction, logistics, freight and passenger transportation, furniture production, sales, etc.) I graduated from Yandex.Practicum courses as a web-developer, currently improving my skills at EPAM JS Rolling-Scopes-School, and I plan to further grow professionally in this area.", */
    education: "Education",
    educationLevel:
      "Incomplete higher education teacher of mathematics and computer science.",
    info: "Additional Information",
    inform:
      "I always fully immerse myself in work with full responsibility. Easy to learn new things.",
    hobby: "Outside interest",
    outInterest:
      "I love to plunge into a good book or movie. From sports, billiards is the closest to me, but I don't mind having fun with more active games. Drive a motorcycle. ",
    qualities: "Qualities",
    quals:
      "Since childhood, I have been and remain a wildly sociable person. I am able to find non-standard approaches to solving problems. Working in sales, I perfectly pumped stress resistance.",
    biography: "Short biography",
    works: "My works",
    project: "Project",
    more: "Read more ...",
    firstProjectInfo:
      "The project is written in Html and Css. BEM methodology. It is based on the fundamental principles of languages, but more in-depth ones are also used, such as inserting elements from other resources, css animation, etc.",
    secondProjectInfo:
      "A project about a trip to Russia, written in Html and css. Used media elements, modifiers, pseudo elements and more. A custom font has been added to the project, and elements overlap are used repeatedly.",
    thirdProjectInfo:
      "The project is written using Html, Css and JavaScript. Media elements, relative values, modifiers, pseudo-elements, forms, classes, modules, arrays, events and their listeners, form validation, OOP, work with the server through the API are used",
    fourthProjectInfo:
      "This project is the implementation of the previous project, with the only difference that this project was implemented at the reactor. So far, all the functionality of the old project has not been implemented, but it has already been supplemented with the possibility of user interaction with the server.",
    fifthProjectInfo:
      "This project is an implementation of the previous project, with the only difference that this project now interacts with two APIs, one for cards and user information, the other for authorization and authentication.",
    sixthProjectInfo:
      "This project is a full-fledged API of the previous project, which includes authorization and registration of users, operations with cards and users.",
    diplomInfo:
      "Complete project with back and front. The project uses interaction with native and third-party API, local storage and much more",
    sevenProjectInfo:
      "A small, simple adaptive layout project. JS is used only for the slider, everything else is pure HTML and CSS.",
    eightProjectInfo:
      "An analogue of the previous project (wildlife). The difference is that this project is more extended. User experience, more JS, SVG sprites and more...",
    nineProjectInfo:
      "Virtual piano project. The project uses: FullScreen API, working with sound in real time, etc.",
    tenProjectInfo:
      "Photo Filter Project is an application for applying filters to images. For both embedded and user-uploaded, with the ability to download the resulting image by the user",
    elevenProjectInfo:
      "A classic memory game written in TypeScript, with user data saved in IndexedDB",
    twelveProjectInfo: "Work to fix code quality",
    thirteenProjectInfo:
      "Photo gallery on react with the ability to add albums, images, process them with filters and download to your device",
    forteenProjectInfo:
      "Implementation of the previous project (Gallery) written in Angular with some differences",
    fifteenProjectInfo:
      "An embeddable weather widget written in React using TypeScript. (If you have allowed access to your location, you should see it in the lower right corner. If it interferes, you can turn off the switch below)",
    turnOn: "Turn on",
    turnOf: "of widget",
    clueForAnimation: "Hover over the image to animate",
    clueForAnimationMobile: "Longtap on the image to animate",
    webService: "Web service",
    landingPage: "landing page",
    cleanWork: "Clean code work",
    webGame: "Web game",
    corporateWebsite: "Corporate website",
    server: "server",
    widget: "Embeddable widget",
    searchSystem: "Search system",
    rulesTitle: "Rules",
    rules:
      "After each move, a cell of denomination “2” (with a probability of 85%) or “4” (with a probability of 15%) appears. By pressing the arrow, you can throw all the cells of the playing field to one of 4 sides. If, when dropped, two cells of the same denomination bump into one another, then they turn into one, the denomination of which is equal to the sum of the connected cells. If in one line or in one column there are more than two cells of the same denomination, then when dropped, they begin to connect from the side to which they were directed. If the location of the cells or their denomination does not change when the button is pressed, the move is not made. To win, you need to collect the number 2048 in one cell (more is possible). The game ends in defeat if after the next move it is impossible to perform an action.",
    mobileRules:
      "After each move, a cell of denomination “2” (with a probability of 85%) or “4” (with a probability of 15%) appears. By swipe, you can throw all the cells of the playing field to one of 4 sides. If, when dropped, two cells of the same denomination bump into one another, then they turn into one, the denomination of which is equal to the sum of the connected cells. If in one line or in one column there are more than two cells of the same denomination, then when dropped, they begin to connect from the side to which they were directed. If the location of the cells or their denomination does not change after swipe, the move is not made. To win, you need to collect the number 2048 in one cell (more is possible). The game ends in defeat if after the next move it is impossible to perform an action.",
    gameOver: "Game over, thanks for taking part.",
    prestart: "Press any key (on keyboard) to start.",
    prestartMobile: "Tap on the playing field to start",
    win: "Congratulations on the victory!",
    thanxNo: "Thanks a lot",
    continue: "Continue game",
    restart: "Try again",
    loose: "I'm sorry, but you lost.",
    dayEnd: "The working day is almost over, maybe it's time to get home?",
    thanx: "Yes, thanks, stayed too long",
    ignor: "Do not disturb",
    dayNoEnd: "No, I work until:",
    coffee:
      "You've been browsing the page for almost an hour now, should you take a coffee break?",
    goodIdea: "Great idea, thanks",
    ignore: "Distract no more",
    remind: "Remind me via:",
    remindAt: "Remind me at:",
    mins: "Minutes",
    score: "Score: ",
    front: "Front-end",
    back: "Back-end",
    showCertify:
      "Show certificate of completion of the Web Development Training Course",
    scrollSwither: "Turn on/off scrolling",
  },
  ru: {
    age: "Возраст",
    years: "лет",
    mounthes: "месяцев",
    weeks: "недель",
    days: "дней",
    hours: "часов",
    minutes: "минут",
    seconds: "секунд",
    toDecimal: "в десятичную",
    toBinary: "в двоичную на пальцах",
    changeBack: "Сменить фон",
    author: "Алексей Акулич",
    specify: "Младший веб-разработчик",
    contacts: "Контакты",
    location: "Город",
    city: "Санкт-Петербург, Кудрово",
    phone: "Телефон",
    target: "Цель",
    purpose:
      "Прокачаться до левела Линуса Торвальдса, Билла Гейтса, Стива Джобса, Павла Дурова, Сатоши Накамото или что-то вроде. Внести свой вклад в новую историю IT и разбогатеть.",
    summary:
      "Знание JavaScript, React, Html, Css, основы Bash, TypeScript, Angular, Vue, Python и Django. Написание кода как в Visual Studio Code, так и вручную. Понимание ООП, знание БЭМ. Работа с макетом в Figma и Photoshop. Работа с базами данных (SQL, NoSql). Умение работать с запросами к API в Postman и Charles. Знание основ ручного и автоматизированного тестирования. Знание английского на уровне B1",
    certificates: "Сертификаты",
    /* workExperience:
      "Сменил много различных сфер деятельности (строительство, логистика, грузовые и пассажирские перевозки, производство мебели, продажи и.т.д. Закончил курсы Яндекс.Практикум по специальности веб-разработчик, в данный момент повышаю скиллы в EPAM JS Rolling-Scopes-School, и планирую далее расти профессионально в этой области.", */
    education: "Образование",
    educationLevel:
      "Незаконченное высшее по специальности преподаватель математики-информатики.",
    info: "Дополнительная информация",
    inform:
      "Всегда полностью окунаюсь в работу со всей ответственностью. Легко обучаюсь новому.",
    hobby: "Хобби",
    outInterest:
      "Люблю окунуться в хорошую книгу или фильм. Из спорта мне ближе всего бильярд, но не прочь развлечься и более активными играми. Гоняю на мотике.",
    qualities: "Качества",
    quals:
      "С детства был и остаюсь дико коммуникабельным человеком. Умею находить нестандартные подходы к решению возникших проблем. Работая в продажах, прекрасно прокачал стрессоустойчивость.",
    biography: "Краткая биография",
    works: "Мои работы",
    project: "Проект",
    more: "Подробнее...",
    firstProjectInfo:
      "Проект написанный на Html и Css. Методология по БЭМ. В основе лежат фундаментальные принципы языков, но используются и более углубленные, как например вставка элементов с других ресурсов, css-анимация и.т.д.",
    secondProjectInfo:
      "Проект о путешествии по России, написанный на Html и css. Используются медиаэлементы, модификаторы, псевдоэлементы и многое другое. В проект добавлен собственный шрифт, и неоднократно используется наложение элементов друг на друга.",
    thirdProjectInfo:
      "Проект написан с помощью Html, Css и JavaScript. Используются медиаэлементы, относительные величины, модификаторы, псевдоэлементы, формы, классы, модули, массивы, события и их слушатели, валидация форм, ООП, работа с сервером через API",
    fourthProjectInfo:
      "Данный проект является реализацией предыдущего проекта, с той лишь разницей, что данный проект реализован на реакте. Пока весь функционал старого проекта не реализован, но уже был дополнен возможностью взаимодействия пользователя с сервером.",
    fifthProjectInfo:
      "Данный проект является реализацией предыдущего проекта, с той лишь разницей, что данный проект теперь взаимодействует с двумя API, одно для карточек и информации о пользователе, другое для авторизации и аутентификации.",
    sixthProjectInfo:
      "Данный проект является полноценным API предыдущего проекта, включающий в себя авторизацию и регистрацию пользователей, операции с карточками и пользователями.",
    diplomInfo:
      "Полноценный проект с бэком и фронтом. В проекте используется взаимодействие с собственным и сторонним API, локальное хранилище и многое другое",
    sevenProjectInfo:
      "Небольшой простой адаптивный проект по верстке. JS испольлзуется только для слайдера, все остальное чистые HTML и CSS.",
    eightProjectInfo:
      "Аналог предыдущего проекта (wildlife). Разница в том, что данный проект более расширен. Присутствует взаимодействие с пользователем, больше JS, SVG-спрайты и многое другое.",
    nineProjectInfo:
      "Проект виртуального пианино. В проекте используются: FullScreen API, работа со звуком в режиме реального времени итп",
    tenProjectInfo:
      "Проект фотофильтр, это приложение для применения фильтров к изображениям. Как для встроенных, так и загруженных пользователем, с возможностью скачивания пользователем результативного изображения",
    elevenProjectInfo:
      "Классическая игра на запоминание написанная на TypeScript, и с сохранением данных пользователя в IndexedDB.",
    twelveProjectInfo: "Работа по исправлению качества кода",
    thirteenProjectInfo:
      "Фотогалерея на реакте с возможностью добавлять альбомы, изображения, обрабатывать их фильтрами и скачивать на свое устройство",
    forteenProjectInfo:
      "Реализация предыдущего проекта (Gallery) написанная на Angular с некоторыми отличиями",
    fifteenProjectInfo:
      "Встраиваемый погодный виджет написанный на React с использованием TypeScript. (Если вы разрешили доступ к вашему местоположению, то должны видеть его в правом нижнем углу. Если мешает, можете отключить переключателем ниже)",
    turnOf: "выкл виджет",
    turnOn: "Вкл",
    clueForAnimation: "Для анимации наведите курсор на изображение",
    clueForAnimationMobile: "Для анимации выполните длительное касание по изображению",
    webService: "Интернет-сервис",
    landingPage: "Одностраничный сайт",
    cleanWork: "Работа по чистке кода",
    webGame: "Интернет-игра",
    corporateWebsite: "Корпоративный вебсайт",
    server: "Сервер",
    widget: "Embeddable widget",
    searchSystem: "Поисковая система",
    rulesTitle: "Правила",
    rules:
      "После каждого хода появляется ячейка номинала «2» (с вероятностью 85%) или «4» (с вероятностью 15%). Нажатием стрелки можно скинуть все ячейки игрового поля в одну из 4 сторон. Если при сбрасывании две ячейки одного номинала «налетают» одна на другую, то они превращаются в одну, номинал которой равен сумме соединившихся ячеек. Если в одной строчке или в одном столбце находится более двух ячеек одного номинала, то при сбрасывании они начинают соединяться с той стороны, в которую были направлены. Если при нажатии кнопки местоположение ячеек или их номинал не изменится, то ход не совершается. Для победы нужно собрать в одной ячейке число 2048(можно и больше). Игра заканчивается поражением, если после очередного хода невозможно совершить действие.",
    mobileRules:
      "После каждого хода появляется ячейка номинала «2» (с вероятностью 85%) или «4» (с вероятностью 15%). Свайпом можно скинуть все ячейки игрового поля в одну из 4 сторон. Если при сбрасывании две ячейки одного номинала «налетают» одна на другую, то они превращаются в одну, номинал которой равен сумме соединившихся ячеек. Если в одной строчке или в одном столбце находится более двух ячеек одного номинала, то при сбрасывании они начинают соединяться с той стороны, в которую были направлены. Если при свайпе местоположение ячеек или их номинал не изменится, то ход не совершается. Для победы нужно собрать в одной ячейке число 2048(можно и больше). Игра заканчивается поражением, если после очередного хода невозможно совершить действие.",
    gameOver: "Игра окончена, спасибо за участие.",
    prestart: "Нажмите любую клавишу (на клавиатуре) чтобы начать.",
    prestartMobile: "Тапните по игровому полю чтобы начать",
    win: "Поздравляю с победой!",
    thanxNo: "Спасибо, наигрался",
    continue: "Продолжить игру",
    restart: "Попробовать еще раз",
    loose: "Сожалею, но вы проиграли.",
    dayEnd: "Рабочий день почти закончился, может пора собираться домой?",
    thanx: "Да, спасибо, засиделся",
    ignor: "Не отвлекать",
    dayNoEnd: "Нет, я работаю до:",
    coffee:
      "Вы просматриваете страницу уже почти час, может стоит сделать кофе-паузу?",
    goodIdea: "Отличная идея, спасибо",
    ignore: "Больше не отвлекать",
    remind: "Напомнить через:",
    remindAt: "Напомнить в:",
    mins: "Минут эдак",
    score: "Ваш счет: ",
    front: "Фронт",
    back: "Бэк",
    showCertify:
      "Показать сертификат о прохождении обучения по программе «Веб-разработчик»",
    scrollSwither: "Вкл/выкл скролл",
  },
};
