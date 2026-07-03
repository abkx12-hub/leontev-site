# Карта CTA leontev.pro

Обновлено: 2026-07-03.

Правило: каждая кнопка должна иметь видимый текст, понятный маршрут и один смысл. Пустые кнопки запрещены. Каналы связи не конкурируют с главным CTA: WhatsApp, MAX, звонок и email компактнее основного действия.

## Технические правила

```js
[...document.querySelectorAll('a, button')]
  .filter(el => el.className.toString().includes('btn') && !el.textContent.trim())
```

Должен вернуться пустой массив.

```js
[...document.querySelectorAll('a.button, button.button, a.btn, button.btn, a.channel, button.channel')]
  .filter(el => !el.textContent.trim())
```

Должен вернуться пустой массив.

```js
[...document.querySelectorAll('a.button, a.btn, a.channel')]
  .filter(el => !el.getAttribute('href'))
```

Должен вернуться пустой массив.

## Главная страница `/`

| Кнопка / ссылка | Где находится | URL / target | Тип | Статус |
|---|---|---|---|---|
| Обсудить покупку | Hero | `#contact` | primary | ok |
| Что входит в сервис | Hero | `#service` | secondary | ok |
| WhatsApp | Hero / contact / footer | `https://wa.me/79936266544` | channel | ok |
| MAX | Hero / contact | `https://max.ru/u/f9LHodD0cOL4I0SEi8HyfIk9kgXPy_7CRBMH8zAvVY_YuXtnui5-LH6N3Uw` | channel | ok |
| Позвонить / Позвонить Павлу | Header / hero / contact / footer | `tel:+79936266544` | secondary/channel | ok |
| Email | Hero / contact / footer | `mailto:leontev@leontevpro.ru` | channel | ok |
| Что входит | Quick-nav | `#service` | text/nav | ok |
| Почему сложно | Quick-nav | `#chaos` | text/nav | ok |
| Маршрут | Quick-nav | `#roadmap` | text/nav | ok |
| Форматы | Quick-nav | `#formats` | text/nav | ok |
| Кейсы | Quick-nav / footer | `#cases` / `/cases/` | text/nav | ok |
| СМИ | Quick-nav | `#media` | text/nav | ok |
| Контакты | Quick-nav / footer | `#contact` | text/nav | ok |
| Посмотреть пример разбора хаоса | Блок “Цена хаоса” | `/client-cases/flat-choice-strategy/search-chaos-cost.html` | primary | ok |
| Разобрать мою ситуацию | Блок “Цена хаоса” | `#contact` | secondary | ok |
| Записаться | Форматы | `#contact` | secondary | ok |
| Обсудить диагностику | Форматы | `#contact` | primary | ok |
| Записаться на 360° | Форматы | `#contact` | secondary | ok |
| Обсудить сопровождение | Форматы | `#contact` | secondary | ok |
| Обсудить премиум | Форматы | `#contact` | secondary | ok |
| Все форматы и стоимость | Форматы | `/formats/` | secondary | ok |
| Смотреть презентацию | Кейс “Цена хаоса” | `/client-cases/flat-choice-strategy/search-chaos-cost.html` | case-link | ok |
| Смотреть кейс | Карточки кейсов | `/client-cases/flat-choice-strategy/`, `/cases/family-purchase/`, `/cases/certificate-roadmap/` | case-link | ok |
| Все кейсы | Кейсы | `/cases/` | primary | ok |
| Как работает система | Кейсы | `/system/` | secondary | ok |
| Смотреть комментарий с 2:12 | СМИ | `https://www.1tv.ru/...` | primary/external | ok; `target="_blank" rel="noopener"` |
| Получить разбор объекта | СМИ | `#contact` | secondary | ok |
| Написать в WhatsApp | Финальный CTA | `https://wa.me/79936266544` | primary | ok |
| Написать в MAX | Финальный CTA | MAX-ссылка | secondary | ok |
| Обсудить покупку | Mobile sticky CTA | `#contact` | primary | ok |

## Глубокие страницы

| Страница | Кнопка / действие | Куда ведёт | Статус |
|---|---|---|---|
| `/method/` | Записаться на консультацию 360° | `/#contact` | ok |
| `/method/` | Смотреть инструмент / Посмотреть систему | дочерние страницы метода или `/system/` | ok; следить за терминологией |
| `/method/choice-map/` и дочерние | Смотреть инструмент | материалы метода | ok |
| `/method/time-economy/` | Читать / Смотреть инструмент | материалы метода | ok |
| `/formats/` | Обсудить формат | `/#contact` | ok |
| `/formats/` | Записаться | `/#contact` | ok |
| `/formats/` | Обсудить диагностику | `/#contact` | ok |
| `/formats/` | Записаться на 360° | `/#contact` | ok |
| `/formats/` | Обсудить сопровождение | `/#contact` | ok |
| `/formats/` | Обсудить премиум | `/#contact` | ok |
| `/cases/` | Смотреть кейсы / Смотреть кейс | конкретные кейсы | ok; не обещать гарантированную выгоду |
| `/cases/` | Разобрать мою покупку | `/#contact` | ok |
| `/system/` | Подобрать похожий кейс / открыть метод / форматы | `/cases/`, `/method/`, `/formats/`, `/#contact` | active-support |
| `/chaos/` | Перейти к материалу | `/client-cases/flat-choice-strategy/search-chaos-cost.html` | ok |
| `/contact/` | Перейти к контактам | `/#contact` | ok |

## Ручной чек-лист CTA после каждой правки

Проверить на странице:

- `Обсудить покупку`;
- `Что входит в сервис`;
- `Посмотреть пример разбора хаоса`;
- `Разобрать мою ситуацию`;
- `Записаться`;
- `Обсудить диагностику`;
- `Записаться на 360°`;
- `Обсудить сопровождение`;
- `Обсудить премиум`;
- `Все форматы и стоимость`;
- `Читать`;
- `Смотреть инструмент`;
- `Смотреть кейсы` / `Смотреть кейс`;
- `Позвонить`;
- `WhatsApp`;
- `MAX`;
- `Email`.

## Запрещено

- пустая кнопка;
- кнопка без `href`, если это ссылка;
- белая кнопка с невидимым текстом;
- одинаковые кнопки, ведущие в разные места без причины;
- декоративный элемент, который выглядит как активная кнопка;
- Telegram в каналах связи.

## Контакты

- Телефон: `tel:+79936266544`;
- WhatsApp: `https://wa.me/79936266544`;
- MAX: `https://max.ru/u/f9LHodD0cOL4I0SEi8HyfIk9kgXPy_7CRBMH8zAvVY_YuXtnui5-LH6N3Uw`;
- Email: `mailto:leontev@leontevpro.ru`.
