# Публикация на GitHub Pages

Проект уже содержит автоматический сценарий публикации.

1. Загрузите репозиторий на GitHub в ветку `main`.
2. Откройте **Settings → Pages**.
3. В **Build and deployment → Source** выберите **GitHub Actions**.
4. В поле **Custom domain** укажите `zabyemsya.online` и нажмите **Save**. При публикации через GitHub Actions именно эта настройка связывает домен с сайтом.
5. В DNS домена укажите записи GitHub Pages, затем включите **Enforce HTTPS** после успешной проверки домена. Файл `public/CNAME` также попадёт в статическую сборку как явная декларация домена.

Локальная проверка статической версии:

```bash
npm ci
npm run build:pages
npx vite preview --outDir dist-pages
```

Основная кнопка сайта ведёт на рабочее приложение: <https://zabyemsya.ru/>.
