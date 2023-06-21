## Запуск проекта

1) Если у Вас не установлены Node.js и git, установите их - `https://nodejs.org/en/download/` и `https://git-scm.com/download/`
2) Откройте терминал и перейдите в папку, в которой будет находиться этот проект, либо другим удобным для Вас методом.
3) Выполните команду `git clone https://github.com/nikolaysarody/h2o-test`
4) Выполните команду `cd h2o-test`
5) Выполните команду `npm i`
6) Выполните команду `npm start`
7) В браузере откроется окно с проектом, либо перейдите по ссылке [http://localhost:3000](http://localhost:3000)

## Стек и архитектура проекта

Стек: TypeScript, React, redux-toolkit

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

## Скрипты

- `npm run start` - Запуск проекта
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирован)
- `npm run lint:ts` - Проверка ts файлов линтером
- `npm run lint:ts:fix` - Исправление ts файлов линтером
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
