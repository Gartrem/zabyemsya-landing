# Публикация на GitHub Pages

Проект уже содержит автоматический сценарий публикации.

1. Загрузите репозиторий на GitHub в ветку `main`.
2. Откройте **Settings → Pages**.
3. В **Build and deployment → Source** выберите **GitHub Actions**.
4. Домен `zabyemsya.online` уже задан файлом `public/CNAME` и попадёт в готовую сборку автоматически.
5. В DNS домена укажите записи GitHub Pages, затем включите **Enforce HTTPS** после успешной проверки домена.

Локальная проверка статической версии:

```bash
npm ci
npm run build:pages
npx vite preview --outDir dist-pages
```

Основная кнопка сайта ведёт на рабочее приложение: <https://zabyemsya.ru/>.
