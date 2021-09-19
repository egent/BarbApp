"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _date$timeout_error$e;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (_date$timeout_error$e = {
  date: {
    abbr_month_names: [null, 'янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']
  },
  // Error messages
  timeout_error: 'Ошибка сетевого подключения.',
  error: 'Ошибка',
  // Login screen
  create_account: 'Создать аккаунт',
  create_new_account: 'Создать новый аккаунт',
  authorization: 'Авторизация',
  login_description: 'Введите номер телефона и пароль, который вы используете на Barb.ua',
  phone: 'Телефон',
  phone_number: 'Номер телефона',
  phone_number_help: 'Номер для отправки SMS с подтверждением регистрации',
  enter: 'Войти',
  close: 'Закрыть',
  password: 'Пароль',
  password_reset: 'Забыли пароль?',
  registration: 'Регистрация',
  logout: 'Выйти',
  send_password: 'Отправить пароль',
  send_password_phone: 'Пароль отправлен на номер {{phone}}',
  // Registration Screen
  registration_master: 'РЕГИСТРАЦИЯ МАСТЕРА',
  select_user_type: 'Выберите тип пользователя',
  user_type: 'Тип пользователя',
  first_name: 'Имя',
  last_name: 'Фамилия',
  org_name: 'Название организации',
  btn_registration: 'Зарегистрироваться',
  select_city: 'Выберите город',
  city: 'Город',
  i_accept: 'Я принимаю',
  app_rules: 'правила приложения',
  email_error: 'Не верный формат Email',
  name_error: 'Вы не заполнили имя или фамилию',
  org_error: 'Вы не заполнили название организации',
  city_error: 'Вы не выбрали город',
  phone_error: 'Вы не заполнили телефон',
  "continue": 'Далее',
  resendCode: 'Отправить код повторно',
  name_password: 'ИМЯ И ПАРОЛЬ',
  remember_password: 'Запомнить пароль',
  agree: 'Я принимаю',
  registration_rules: 'правила регистрации',
  reminder_password: 'Напоминание пароля',
  // Check Code Screen
  check_code_title: 'ВВЕДИТЕ КОД ПОДТВЕРЖДЕНИЯ',
  check_code_description: 'Введите код подтверждения, отправленный на телефон: {{phone}}.',
  code_from_sms: 'Код из смс',
  send: 'Отправить',
  confirmation_code: 'Код подтверждения',
  // Home screen
  tariff: 'Тариф',
  messages: 'Сообщения',
  barb_profile: 'Кабинет на Barb.ua',
  settings: 'Настройки',
  change: 'Изменить',
  prolong: 'Продлить',
  welcome: 'Добро пожаловать на Barb.ua!',
  on_board: 'Заполните свой профиль и добавьте услуги, чтобы анкета появилась на сайте',
  set_profile: 'Заполнить профиль',
  set_profile_later: 'Заполнить позже',
  to: 'до',
  // Settings screen
  profile_master: 'Профиль мастера',
  user_agreement: 'Пользовательское соглашение',
  // Profile screen
  master_about: 'О мастере',
  contacts: 'Контакты',
  change_photo: 'Изменить фото',
  name: 'Имя'
}, _defineProperty(_date$timeout_error$e, "last_name", 'Фамилия'), _defineProperty(_date$timeout_error$e, "birthday", 'День Рождения'), _defineProperty(_date$timeout_error$e, "about", 'О себе'), _defineProperty(_date$timeout_error$e, "select_photo", 'Выберите фото для загрузки из галереи'), _defineProperty(_date$timeout_error$e, "cancel", 'Отмена'), _defineProperty(_date$timeout_error$e, "take_photo", 'Сделать фото'), _defineProperty(_date$timeout_error$e, "open_gallery", 'Открыть галерею'), _defineProperty(_date$timeout_error$e, "upload_photo", 'Загрузить фото'), _defineProperty(_date$timeout_error$e, "change_text", 'Изменить текст'), _defineProperty(_date$timeout_error$e, "save_text", 'Сохранить текст'), _defineProperty(_date$timeout_error$e, "save_date", 'Сохранить дату'), _defineProperty(_date$timeout_error$e, "email", 'Email'), _defineProperty(_date$timeout_error$e, "confirmed", 'Подтвержден'), _defineProperty(_date$timeout_error$e, "unconfirmed", 'Не подтвержден'), _defineProperty(_date$timeout_error$e, "send_email", 'Отправить письмо'), _defineProperty(_date$timeout_error$e, "phone", 'Телефон'), _defineProperty(_date$timeout_error$e, "save_contacts", 'Сохранить контакты'), _defineProperty(_date$timeout_error$e, "messages", 'Сообщения'), _defineProperty(_date$timeout_error$e, "client_messages", 'Сообщения клиентов'), _defineProperty(_date$timeout_error$e, "delete_messages", 'Удалить сообщения ({{qty}})'), _defineProperty(_date$timeout_error$e, "delete_title_messages", 'Удалить переписку?'), _defineProperty(_date$timeout_error$e, "delete_subtitle_messages", 'Ее нельзя будет восстановить'), _defineProperty(_date$timeout_error$e, "dialogs", 'Диалоги'), _defineProperty(_date$timeout_error$e, "notifications", 'Уведомления'), _defineProperty(_date$timeout_error$e, "notifications_no", 'Новых уведомлений нет'), _defineProperty(_date$timeout_error$e, "yes", 'Да'), _defineProperty(_date$timeout_error$e, "no", 'Нет'), _defineProperty(_date$timeout_error$e, "message", 'Сообщение'), _defineProperty(_date$timeout_error$e, "you", 'Вы'), _defineProperty(_date$timeout_error$e, "message_deleted", 'Сообщения удалены'), _defineProperty(_date$timeout_error$e, "cancelButtonText", 'Отмена'), _defineProperty(_date$timeout_error$e, "selectButtonText", 'Выбрать'), _defineProperty(_date$timeout_error$e, "searchPlaceHolderText", 'Поиск по названию'), _defineProperty(_date$timeout_error$e, "listEmptyTitle", 'Список пуст'), _defineProperty(_date$timeout_error$e, "specialty", 'Специальность'), _defineProperty(_date$timeout_error$e, "profile_photo_description_experience", 'Фото профиля, описание, опыт'), _defineProperty(_date$timeout_error$e, "reception_locations_opening_hours", 'Места приема и график работы'), _defineProperty(_date$timeout_error$e, "services_prices", 'Услуги и цены'), _defineProperty(_date$timeout_error$e, "promotions", 'Акции'), _defineProperty(_date$timeout_error$e, "portfolio", 'Фотографии работ (портфолио)'), _defineProperty(_date$timeout_error$e, "social_media", 'Соцсети и мессенджеры'), _defineProperty(_date$timeout_error$e, "tarif", 'Тариф и анкета на сайте'), _defineProperty(_date$timeout_error$e, "specs_title", 'Специальности'), _defineProperty(_date$timeout_error$e, "main", 'Основная'), _defineProperty(_date$timeout_error$e, "other", 'Другое'), _defineProperty(_date$timeout_error$e, "other_input_help", 'Как называется Ваша специализация'), _defineProperty(_date$timeout_error$e, "updated_success", 'Обновление прошло успешно'), _defineProperty(_date$timeout_error$e, "erorr", 'Ошибка'), _defineProperty(_date$timeout_error$e, "choose_main_spec", 'Выберите основную специальность'), _defineProperty(_date$timeout_error$e, "your_photo", 'Ваша портретная фотография'), _defineProperty(_date$timeout_error$e, "about_textarea", 'О себе (обязательно)'), _defineProperty(_date$timeout_error$e, "male", 'Мужчина'), _defineProperty(_date$timeout_error$e, "female", 'Женщина'), _defineProperty(_date$timeout_error$e, "sex", 'Пол'), _defineProperty(_date$timeout_error$e, "date_birth", 'Дата рождения'), _defineProperty(_date$timeout_error$e, "work_experience", 'Опыт работы'), _defineProperty(_date$timeout_error$e, "choose_date", 'Указать дату'), _defineProperty(_date$timeout_error$e, "choose_experience", 'Указать опыт'), _defineProperty(_date$timeout_error$e, "choose_experience_android", 'Указать начало карьеры'), _defineProperty(_date$timeout_error$e, "select", 'Выбрать'), _defineProperty(_date$timeout_error$e, "select_date", 'Выберите дату'), _defineProperty(_date$timeout_error$e, "delete_birth_day", 'Удалить дату рождения?'), _defineProperty(_date$timeout_error$e, "delete_experience_title", 'Удалить опыт работы?'), _defineProperty(_date$timeout_error$e, "fill_fields", 'Заполните обязательные поля'), _defineProperty(_date$timeout_error$e, "return_to_form", 'Вернуться к заполнению'), _defineProperty(_date$timeout_error$e, "go_out", 'Выйти'), _defineProperty(_date$timeout_error$e, "work_start", 'Начало работы'), _defineProperty(_date$timeout_error$e, "work_start_picker", 'Месяц и год старта карьеры'), _defineProperty(_date$timeout_error$e, "set_experience_date", 'Указать начало карьеры'), _defineProperty(_date$timeout_error$e, "master_locations", 'Места приема'), _defineProperty(_date$timeout_error$e, "in_office", 'В салоне'), _defineProperty(_date$timeout_error$e, "in_house", 'На дому'), _defineProperty(_date$timeout_error$e, "in_client_location", 'Выезд к клиенту'), _defineProperty(_date$timeout_error$e, "add_office_location", 'Добавить салон'), _defineProperty(_date$timeout_error$e, "add_master_location", 'Добавить адрес'), _defineProperty(_date$timeout_error$e, "add_client_location", 'Указать районы выезда'), _defineProperty(_date$timeout_error$e, "workspace_settings", 'Настройки салона'), _defineProperty(_date$timeout_error$e, "in_house_settings", 'Настройки приема на дому'), _defineProperty(_date$timeout_error$e, "in_client_settings", 'Настройки выезда к клиенту'), _defineProperty(_date$timeout_error$e, "beauty_room_name", 'Название салона'), _defineProperty(_date$timeout_error$e, "required", 'обязательно'), _defineProperty(_date$timeout_error$e, "district", 'Район города'), _defineProperty(_date$timeout_error$e, "districts", 'Районы города'), _defineProperty(_date$timeout_error$e, "sub_district", 'Микрорайон'), _defineProperty(_date$timeout_error$e, "metro", 'Метро'), _defineProperty(_date$timeout_error$e, "workspace_address", 'Адрес - улица, дом (обязательно)'), _defineProperty(_date$timeout_error$e, "in_house_address", 'Адреc - обязательно'), _defineProperty(_date$timeout_error$e, "workspace_address_comment", 'Комментарий к адресу'), _defineProperty(_date$timeout_error$e, "client_address_comment", 'Комментарий к приему на выездах'), _defineProperty(_date$timeout_error$e, "add_phone", 'Комментарий к адресу'), _defineProperty(_date$timeout_error$e, "workspace_phone", 'Телефон для записи'), _defineProperty(_date$timeout_error$e, "phone_add", 'Добавить телефон'), _defineProperty(_date$timeout_error$e, "schedule", 'График работы'), _defineProperty(_date$timeout_error$e, "schedule_day", 'По дням недели'), _defineProperty(_date$timeout_error$e, "schedule_odd", 'Четные/нечетные'), _defineProperty(_date$timeout_error$e, "schedule_no", 'Нет графика'), _defineProperty(_date$timeout_error$e, "schedule_default", 'Работаю по записи без четкого графика работы'), _defineProperty(_date$timeout_error$e, "monday", 'Понедельник'), _defineProperty(_date$timeout_error$e, "tuesday", 'Вторник'), _defineProperty(_date$timeout_error$e, "wednesday", 'Среда'), _defineProperty(_date$timeout_error$e, "thursday", 'Четверг'), _defineProperty(_date$timeout_error$e, "friday", 'Пятница'), _defineProperty(_date$timeout_error$e, "saturday", 'Суббота'), _defineProperty(_date$timeout_error$e, "sunday", 'Воскресенье'), _defineProperty(_date$timeout_error$e, "work_time", 'Время работы'), _defineProperty(_date$timeout_error$e, "day_off", 'выходной'), _defineProperty(_date$timeout_error$e, "from", 'начало'), _defineProperty(_date$timeout_error$e, "to", 'окончание'), _defineProperty(_date$timeout_error$e, "working_odd", 'Работаю по четным числам'), _defineProperty(_date$timeout_error$e, "working_even", 'Работаю по нечетным числам'), _defineProperty(_date$timeout_error$e, "breaks", 'Перерывы'), _defineProperty(_date$timeout_error$e, "break", 'Перерыв'), _defineProperty(_date$timeout_error$e, "break_add", 'Добавить перерыв'), _defineProperty(_date$timeout_error$e, "break_long", 'Длительность перерыва'), _defineProperty(_date$timeout_error$e, "break_days_active", 'Действует по дням недели'), _defineProperty(_date$timeout_error$e, "monday_short", 'Пн'), _defineProperty(_date$timeout_error$e, "tuesday_short", 'Вт'), _defineProperty(_date$timeout_error$e, "wednesday_short", 'Ср'), _defineProperty(_date$timeout_error$e, "thursday_short", 'Чт'), _defineProperty(_date$timeout_error$e, "friday_short", 'Пт'), _defineProperty(_date$timeout_error$e, "saturday_short", 'Сб'), _defineProperty(_date$timeout_error$e, "sunday_short", 'Вс'), _defineProperty(_date$timeout_error$e, "dinner", 'Обед'), _defineProperty(_date$timeout_error$e, "breaks_example_comment", 'Например, "обед"'), _defineProperty(_date$timeout_error$e, "breaks_comment", 'Коментарий (видите только Вы)'), _defineProperty(_date$timeout_error$e, "delete_workplace", 'Удалить место приема?'), _defineProperty(_date$timeout_error$e, "price", 'Прайс-лист'), _defineProperty(_date$timeout_error$e, "services", 'Услуги'), _defineProperty(_date$timeout_error$e, "consultation", 'Консультация'), _defineProperty(_date$timeout_error$e, "price_item", 'Цена'), _defineProperty(_date$timeout_error$e, "time", 'Время'), _defineProperty(_date$timeout_error$e, "from_price", 'От'), _defineProperty(_date$timeout_error$e, "uah", 'грн'), _defineProperty(_date$timeout_error$e, "min", 'мин'), _defineProperty(_date$timeout_error$e, "promo_title", 'Скидка по промокоду "Barb"'), _defineProperty(_date$timeout_error$e, "promo_code_hint", 'Узнайте что клиент нашел Вас на Barb'), _defineProperty(_date$timeout_error$e, "offers_sort_barb", 'Предложения с промокодом показываются в каталоге первыми'), _defineProperty(_date$timeout_error$e, "save", 'Сохранить'), _defineProperty(_date$timeout_error$e, "without_save_alert", 'Выйти без сохранения?'), _defineProperty(_date$timeout_error$e, "services_empty", 'Здесь можно публиковать услуги со авторским описанием и фотографиями.'), _defineProperty(_date$timeout_error$e, "active", 'Опубликовано'), _defineProperty(_date$timeout_error$e, "stop", 'Отклонена'), _defineProperty(_date$timeout_error$e, "draft", 'Черновик'), _defineProperty(_date$timeout_error$e, "check", 'На модерации'), _defineProperty(_date$timeout_error$e, "all", 'Все'), _defineProperty(_date$timeout_error$e, "service_add", 'Добавить услугу'), _defineProperty(_date$timeout_error$e, "serviceUpdate", 'Обновить услугу'), _defineProperty(_date$timeout_error$e, "service_name", 'Название услуги'), _defineProperty(_date$timeout_error$e, "category", 'Категория'), _defineProperty(_date$timeout_error$e, "cost_long", 'Цена и длительность'), _defineProperty(_date$timeout_error$e, "description", 'Описание'), _defineProperty(_date$timeout_error$e, "service_photo", 'Фото процедуры'), _defineProperty(_date$timeout_error$e, "photo_add", 'Добавить фото'), _defineProperty(_date$timeout_error$e, "description_short", 'Краткое описание'), _defineProperty(_date$timeout_error$e, "servicesManage", 'В черновики / Удалить'), _defineProperty(_date$timeout_error$e, "discounts", 'Акции'), _defineProperty(_date$timeout_error$e, "myDiscounts", 'Мои акции'), _defineProperty(_date$timeout_error$e, "promocodeBarb", 'Промокод "Barb"'), _defineProperty(_date$timeout_error$e, "promocodeBarbTitle", 'СКИДКА ПО ПРОМОКОДУ "Barb"'), _defineProperty(_date$timeout_error$e, "discountAdd", 'ДОБАВИТЬ АКЦИЮ'), _defineProperty(_date$timeout_error$e, "discountUpdate", 'Обновить акцию'), _defineProperty(_date$timeout_error$e, "termLess", 'Бессрочно'), _defineProperty(_date$timeout_error$e, "expired", 'Завершена'), _defineProperty(_date$timeout_error$e, "promo_name", 'Название акции'), _defineProperty(_date$timeout_error$e, "discount", 'Скидка'), _defineProperty(_date$timeout_error$e, "discountInputLegend", 'Укажите цену со скидкой и без:'), _defineProperty(_date$timeout_error$e, "priceDiscount", 'Со скидкой'), _defineProperty(_date$timeout_error$e, "priceDiscountOld", 'Без скидки'), _defineProperty(_date$timeout_error$e, "promoDescription", 'Описание услуги, условия акции'), _defineProperty(_date$timeout_error$e, "noLimitPromo", 'Бессрочная акция'), _defineProperty(_date$timeout_error$e, "limitPromo", 'Срок акции ограничен'), _defineProperty(_date$timeout_error$e, "begin", 'Начало'), _defineProperty(_date$timeout_error$e, "end", 'Конец'), _defineProperty(_date$timeout_error$e, "promoDefaultDate", 'дд.мм.гггг'), _defineProperty(_date$timeout_error$e, "promoPhoto", 'Афиша акции'), _defineProperty(_date$timeout_error$e, "error_500", 'Внутренняя ошибка сервера'), _defineProperty(_date$timeout_error$e, "moderator", 'Модератор'), _date$timeout_error$e);

exports["default"] = _default;