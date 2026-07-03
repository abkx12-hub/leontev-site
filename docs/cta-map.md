# Карта CTA leontev.pro

Правило: каждая кнопка должна иметь видимый текст, понятный маршрут и один смысл. Пустые кнопки запрещены. Для главной добавлено CSS-правило: `.button:empty`, `.btn:empty`, `.channel:empty` скрываются.

## Главная страница `/`

| Кнопка / ссылка | Где находится | URL / target | Тип | Статус |
|---|---|---|---|---|
| Обсудить покупку | Hero | `#contact` | primary | ok |
| Что входит в сервис | Hero | `#service` | secondary | ok |
| WhatsApp | Hero / contact / footer | `https://wa.me/79936266544` | channel | ok |
| MAX | Hero / contact | `https://max.ru/u/f9LHodD0cOL4I0SEi8HyfIk9kgXPy_7CRBMH8zAvVY_YuXtnui5-LH6N3Uw` | channel | ok |
| Позвонить / Позвонить Павлу | Header / contact | `tel:+79936266544` | secondary/channel | ok |
| Email | Hero / contact / footer | `mailto:leontev@leontevpro.ru` | channel | ok |
| Что входит | Quick-nav | `#service` | text/nav | ok |
| Почему сложно | Quick-nav | `#chaos` | text/nav | ok |
| Маршрут | Quick-nav | `#roadmap` | text/nav | ok |
| Форматы | Quick-nav | `#formats` | text/nav | ok |
| Кейсы | Quick-nav | `#cases` | text/nav | ok |
| СМИ | Quick-nav | `#media` | text/nav | ok |
| Контакты | Quick-nav / footer | `#contact` | text/nav | ok |
| Посмотреть пример разбора хаоса | Цена хаоса | `/client-cases/flat-choice-strategy/search-chaos-cost.html` | primary | ok |
| Разобрать мою ситуацию | Цена хаоса | `#contact` | secondary | ok |
| Записаться | Форматы | `#contact` | secondary | ok |
| Обсудить диагностику | Форматы | `#contact` | primary | ok |
| Записаться на 360° | Форматы | `#contact` | secondary | ok |
| Обсудить сопровождение | Форматы | `#contact` | secondary | ok |
| Обсудить премиум | Форматы | `#contact` | secondary | ok |
| Все форматы и стоимость | Форматы | `/formats/` | secondary | ok |
| Все кейсы | Кейсы | `/cases/` | primary | ok |
| Как работает система | Кейсы | `/system/` | secondary | ok |
| Смотреть комментарий с 2:12 | СМИ | `https://www.1tv.ru/...` | primary/external | ok |
| Получить разбор объекта | СМИ | `#contact` | secondary | ok |
| Написать в WhatsApp | Финальный CTA | `https://wa.me/79936266544` | primary | ok |
| Написать в MAX | Финальный CTA | MAX-ссылка | secondary | ok |
| Обсудить покупку | Mobile sticky CTA | `#contact` | primary | ok |

## Глубокие страницы

| Страница | Кнопки | Статус |
|---|---|---|
| `/method/` | `Записаться на консультацию 360°` → `/#contact`; `Посмотреть систему` → `/system/`; карточки инструментов → дочерние страницы | ok, но тексты нужно держать в терминологии “финальные варианты”, не `shortlist` |
| `/formats/` | `Обсудить формат`, `Записаться`, `Обсудить диагностику`, `Записаться на 360°`, `Обсудить сопровождение`, WhatsApp/MAX | ok, но термин “личный штаб” лучше не использовать как основной |
| `/cases/` | `Разобрать мою покупку`, `Посмотреть систему`, переходы на кейсы | ok, но слово `Shortlist` заменить при следующей copy-cleanup |
| `/system/` | переходы к методу, кейсам, форматам и контакту | active-support |
| `/chaos/` | переход к существующему материалу цены хаоса | ok после добавления redirect/entry |
| `/contact/` | переход к `/#contact` | ok после добавления redirect/entry |

## Проверка после каждой правки

1. Нет `a.button`, `button.button`, `a.btn`, `button.btn`, `.channel` без текста.
2. Нет кнопок без `href`, кроме настоящих `button`-элементов формы.
3. Главный CTA не конкурирует с каналами связи: WhatsApp/MAX/звонок/email должны быть компактнее.
4. Внешние ссылки открываются с `target="_blank" rel="noopener"`.
5. Телефон: `tel:+79936266544`; email: `mailto:leontev@leontevpro.ru`; WhatsApp: `wa.me/79936266544`; Telegram не добавлять.