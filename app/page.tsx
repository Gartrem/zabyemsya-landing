"use client";

import { useEffect, useState } from "react";
import "@fontsource-variable/roboto-condensed";

const APP_URL = "https://zabyemsya.ru/";

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <i />
      <i />
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m13.2 2-8 11h6l-.4 9 8-12h-6l.4-8Z" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14.5 5 13 3H8L6.5 5H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-5.5Z" />
      <circle cx="10.5" cy="12.5" r="4" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function PhoneScreen({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`product-phone${compact ? " product-phone--compact" : ""}`}>
      <div className="phone-topbar">
        <span className="mini-logo"><BrandMark />ЗАБЬЁМСЯ</span>
        <div className="phone-actions"><span>0 очков</span><b>Нп</b></div>
      </div>
      <div className="phone-ticker">ДОКАЖИ СЕБЕ, ЧТО ЦЕЛИ ДОСТИЖИМЫ</div>
      <div className="phone-copy">
        <small>ПЛАТФОРМА ДИСЦИПЛИНЫ</small>
        <h3>СДЕЛАЙТЕ ВЫБОР<br /><em>В ПОЛЬЗУ СЕБЯ</em></h3>
        <p>Выбирай цель, выполняй каждый день и забирай результат.</p>
      </div>
      <div className="phone-divider" />
      <div className="phone-section-head">
        <div><small>НАЙДИ СВОЮ ЦЕЛЬ</small><strong>АКТУАЛЬНЫЕ ВЫЗОВЫ</strong></div>
        <span>+ Создать</span>
      </div>
      <div className="phone-pills"><span>Все</span><i>Спорт</i><i>Привычки</i></div>
      <div className="challenge-card">
        <div className="challenge-grid" />
        <div className="challenge-orbit" />
        <div className="challenge-content">
          <div className="challenge-meta"><span>● Активен</span><b>СПОРТ</b></div>
          <h4>🥊 ОТЖИМАНИЯ<br />МАЙКА ТАЙСОНА</h4>
          <p>30 дней · 5 участников</p>
        </div>
        <strong className="challenge-days">30</strong>
      </div>
      <div className="phone-nav"><b>◉<span>Главная</span></b><i>◎<span>Мои вызовы</span></i><i>⚔<span>Дуэли</span></i><i>♙<span>Профиль</span></i></div>
    </div>
  );
}

const steps = [
  ["01", "Выберите или создайте", "Вступите в открытый челлендж или запустите свой — для себя, друзей и единомышленников."],
  ["02", "Участвуйте вместе", "Позовите друзей или присоединитесь к людям с той же целью. Правила и срок видны заранее."],
  ["03", "Подтверждайте результат", "Фото, видео или отчёт — прогресс становится видимым, а не обещанным."],
  ["04", "Дойдите до конца", "Серия дней, поддержка участников и результат, который хочется повторить."],
];

const existing = [
  "Каталог открытых вызовов",
  "LIVE-дуэли на одну минуту",
  "Свои челленджи для друзей",
  "Ежедневные отчёты и серия дней",
  "Фото- и видеоподтверждения",
  "Профиль участника и достижения",
];

const faqs = [
  [
    "Что такое челлендж в «ЗАБЬЁМСЯ»?",
    "Это цель с заранее понятными правилами, сроком и способом подтверждения результата. Можно выбрать открытый вызов или создать собственный.",
  ],
  [
    "Обязательно участвовать со всеми?",
    "Нет. Проходите вызов самостоятельно, собирайте друзей или присоединяйтесь к открытому челленджу с другими участниками.",
  ],
  [
    "Как подтверждается выполнение?",
    "В зависимости от правил челленджа участник отправляет фото, видео или короткий отчёт. Требования видны до начала участия.",
  ],
  [
    "Что такое LIVE-дуэль?",
    "Это быстрый спортивный поединок на 60 секунд. Два участника подключаются одновременно, а камера помогает считать корректные повторы.",
  ],
  [
    "Можно ли создать вызов для компании?",
    "Да. Корпоративный формат — дополнительный сценарий платформы для спортивных программ внутри команды. Основные челленджи при этом открыты всем.",
  ],
  [
    "Где посмотреть правила платформы?",
    "Пользовательское соглашение и правила платформы доступны внутри приложения. Перед участием также показываются условия конкретного челленджа.",
  ],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }

    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top < window.innerHeight * 1.08) {
        node.classList.add("is-visible");
      }
    });

    const root = document.documentElement;
    const frame = window.requestAnimationFrame(() => root.classList.add("reveal-enabled"));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      root.classList.remove("reveal-enabled");
    };
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Забьёмся — на главную"><BrandMark /><span>ЗАБЬЁМСЯ</span></a>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Основная навигация">
          <a href="#mechanics" onClick={() => setMenuOpen(false)}>Как работает</a>
          <a href="#modes" onClick={() => setMenuOpen(false)}>LIVE-дуэли</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>Вопросы</a>
        </nav>
        <a className="header-cta" href={APP_URL} target="_blank" rel="noreferrer">Открыть приложение <ArrowIcon /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Открыть меню" aria-expanded={menuOpen}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-radar" aria-hidden="true"><i /><i /><i /></div>
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><span>●</span> ПЛАТФОРМА ДИСЦИПЛИНЫ · 2026</div>
          <h1>БРОСЬТЕ<br />ВЫЗОВ.<br /><em>НЕ СЛИВАЙТЕСЬ.</em></h1>
          <p>Выберите цель, вступите в челлендж и подтверждайте результат каждый день. Хотите быстрее — вызовите соперника на минутную LIVE-дуэль.</p>
          <div className="hero-actions">
            <a className="button button--primary" href={APP_URL} target="_blank" rel="noreferrer">Попробовать сейчас <ArrowIcon /></a>
            <a className="button button--ghost" href="#product">Смотреть продукт <span>↓</span></a>
          </div>
          <div className="hero-stats">
            <div><strong>ВСЕМ</strong><span>открытые челленджи</span></div>
            <div><strong>СВОИ</strong><span>цель, срок и правила</span></div>
            <div><strong>60 СЕК</strong><span>быстрая LIVE-дуэль</span></div>
          </div>
        </div>
        <div className="hero-product" data-reveal>
          <div className="product-label product-label--top"><span>LIVE</span> РЕАЛЬНЫЙ ПРОДУКТ</div>
          <div className="phone-halo" aria-hidden="true" />
          <PhoneScreen />
          <div className="floating-card floating-card--left"><CheckIcon /><div><b>ДЕНЬ ЗАКРЫТ</b><span>Серия продолжается</span></div></div>
          <div className="floating-card floating-card--right"><b>+1</b><span>ещё один шаг</span></div>
        </div>
      </section>

      <div className="marquee" aria-label="Вызов, друзья, дуэль, результат">
        <div>ВЫЗОВ <span>✦</span> ДРУЗЬЯ <span>✦</span> LIVE-ДУЭЛЬ <span>✦</span> РЕЗУЛЬТАТ <span>✦</span> ВЫЗОВ <span>✦</span> ДРУЗЬЯ <span>✦</span></div>
      </div>

      <section className="manifesto section-shell" data-reveal>
        <div className="section-kicker">01 · ЗАЧЕМ</div>
        <div className="manifesto-grid">
          <h2>МОТИВАЦИЯ<br />ПРИХОДИТ И УХОДИТ.<br /><em>СИСТЕМА ОСТАЁТСЯ.</em></h2>
          <div className="manifesto-copy">
            <p>«ЗАБЬЁМСЯ» превращает личное обещание в понятный маршрут: цель, правила, ежедневное действие и люди рядом.</p>
            <blockquote>Это не очередной трекер. Это договор с собой, который видно.</blockquote>
          </div>
        </div>
      </section>

      <section className="origin section-shell" data-reveal>
        <div className="origin-index">01A</div>
        <div className="origin-story">
          <div className="section-kicker">ИЗ РЕАЛЬНОГО ОПЫТА</div>
          <h2>НАЧАЛОСЬ НЕ<br />С ПРЕЗЕНТАЦИИ.<br /><em>С НАСТОЯЩЕГО ВЫЗОВА.</em></h2>
          <p>Идея родилась из спортивного челленджа на работе. Оказалось: когда есть общая цель, понятные правила и люди рядом, слиться намного сложнее.</p>
        </div>
        <div className="trust-list" aria-label="Что уже работает">
          <div><CheckIcon /><span><b>Продукт уже запущен</b><small>Можно открыть и попробовать сейчас</small></span></div>
          <div><CheckIcon /><span><b>Правила видны заранее</b><small>Цель, срок и подтверждение до старта</small></span></div>
          <div><CheckIcon /><span><b>Прогресс подтверждается</b><small>Фото, видео или отчёт участника</small></span></div>
        </div>
      </section>

      <section className="mechanics section-shell" id="mechanics">
        <div className="section-heading" data-reveal>
          <div><span>02 · МЕХАНИКА</span><h2>КАК ЭТО<br /><em>РАБОТАЕТ</em></h2></div>
          <p>Не просто отмечайте привычку — примите понятные правила и сделайте прогресс видимым.</p>
        </div>
        <div className="steps">
          {steps.map(([number, title, copy], index) => (
            <article className="step-card" data-reveal key={number} style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}>
              <span>{number}</span><div className="step-icon">{index === 2 ? <CheckIcon /> : index === 3 ? <BoltIcon /> : <ArrowIcon />}</div>
              <h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="product-section" id="product">
        <div className="section-shell product-grid">
          <div className="product-copy" data-reveal>
            <div className="section-kicker">03 · УЖЕ РАБОТАЕТ</div>
            <h2>НЕ КОНЦЕПТ.<br /><em>ЖИВОЙ ПРОДУКТ.</em></h2>
            <p>Платформа уже запущена: участвуйте в открытых челленджах, создавайте собственные для себя и друзей или выходите на LIVE-дуэль.</p>
            <ul>
              {existing.map((item) => <li key={item}><CheckIcon />{item}</li>)}
            </ul>
            <a className="text-link" href={APP_URL} target="_blank" rel="noreferrer">Перейти в приложение <ArrowIcon /></a>
          </div>
          <div className="product-showcase" data-reveal>
            <div className="product-tour" aria-label="Основные экраны платформы">
              <article className="tour-card tour-card--catalog">
                <div className="tour-topline"><span>01 · ВЫБЕРИТЕ</span><b>КАТАЛОГ</b></div>
                <div className="tour-tabs"><strong>Все</strong><span>Спорт</span><span>Привычки</span></div>
                <div className="tour-challenge">
                  <div className="tour-challenge-icon">🥊</div>
                  <div><small>СПОРТ · ИДЁТ НАБОР</small><h3>30 ДНЕЙ ОТЖИМАНИЙ</h3><p>Цель, срок и правила — до вступления.</p></div>
                </div>
              </article>
              <article className="tour-card tour-card--proof">
                <div className="tour-topline"><span>02 · ДОКАЖИТЕ</span><CameraIcon /></div>
                <div className="proof-orbit"><strong>17</strong><span>дней подряд</span></div>
                <h3>ПОДТВЕРДИТЕ<br />СЕГОДНЯШНИЙ ДЕНЬ</h3>
                <div className="tour-action">Добавить отчёт <ArrowIcon /></div>
              </article>
              <article className="tour-card tour-card--live">
                <div className="tour-live-head"><span>LIVE</span><b>00:42</b><small>ОТЖИМАНИЯ</small></div>
                <div className="tour-score"><div><small>ВЫ</small><strong>24</strong></div><i>VS</i><div><small>СОПЕРНИК</small><strong>21</strong></div></div>
                <p>Повторы считаются в реальном времени.</p>
              </article>
              <div className="tour-caption"><span>ЖИВОЙ ПРОДУКТ</span><b>Три режима — одна цель: не слиться.</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="future section-shell" id="modes">
        <div className="section-heading" data-reveal>
          <div><span>04 · РЕЖИМЫ ПЛАТФОРМЫ</span><h2>ВЫБЕРИТЕ<br /><em>СВОЙ ФОРМАТ</em></h2></div>
          <p>Открытые вызовы, свои компании друзей и быстрые LIVE-дуэли — всё уже внутри.</p>
        </div>
        <div className="future-grid">
          <article className="future-main" data-reveal>
            <div className="future-badge">УЖЕ ДОСТУПНО</div>
            <div className="duel-visual">
              <div className="duel-player"><span>01</span><b>ВЫ</b><strong>24</strong></div>
              <div className="duel-center"><small>LIVE</small><b>00:42</b><span>ОТЖИМАНИЯ</span></div>
              <div className="duel-player duel-player--right"><span>02</span><b>СОПЕРНИК</b><strong>21</strong></div>
            </div>
            <h3>LIVE-ДУЭЛИ</h3>
            <p>Минута. Два участника. Камера считает повторы — результат видно сразу.</p>
          </article>
          <article className="future-card" data-reveal><span>СОЗДАВАЙТЕ</span><div className="future-number">#01</div><h3>СВОЙ ЧЕЛЛЕНДЖ</h3><p>Задайте цель, срок и правила. Проходите вызов сами или откройте его для всех.</p></article>
          <article className="future-card future-card--acid" data-reveal><span>ВМЕСТЕ</span><div className="future-number">#02</div><h3>ДЛЯ ДРУЗЕЙ</h3><p>Соберите своих, следите за общей серией и поддерживайте друг друга до финиша.</p></article>
        </div>
      </section>

      <section className="categories section-shell" data-reveal>
        <div className="section-kicker">05 · ВЫБЕРИ СВОЁ</div>
        <div className="category-rows">
          <div><span>01</span><b>СПОРТ</b><i>СИЛА · БЕГ · ВЫНОСЛИВОСТЬ</i><em>↗</em></div>
          <div><span>02</span><b>ПРИВЫЧКИ</b><i>РЕЖИМ · ФОКУС · ДИСЦИПЛИНА</i><em>↗</em></div>
          <div><span>03</span><b>РАЗВИТИЕ</b><i>ЧТЕНИЕ · НАВЫКИ · ПРОГРЕСС</i><em>↗</em></div>
          <div><span>04</span><b>ДУЭЛИ</b><i>МИНУТА · СОПЕРНИК · РЕЙТИНГ</i><em>↗</em></div>
        </div>
      </section>

      <section className="business section-shell" id="business" data-reveal>
        <div className="business-rings" aria-hidden="true"><i /><i /><i /></div>
        <div className="business-copy">
          <div className="section-kicker section-kicker--dark">06 · ДОПОЛНИТЕЛЬНЫЙ ФОРМАТ</div>
          <h2>ЧЕЛЛЕНДЖИ<br /><em>ДЛЯ КОМАНД.</em></h2>
          <p>Основная платформа открыта каждому. Компании могут дополнительно проводить отдельные спортивные вызовы для сотрудников.</p>
        </div>
        <div className="business-features">
          <article><UsersIcon /><div><h3>СВОЯ КОМАНДА</h3><p>Единая цель, общий ритм и поддержка коллег.</p></div></article>
          <article><CheckIcon /><div><h3>ПОНЯТНЫЙ ПРОГРЕСС</h3><p>Серии и подтверждённые результаты в одном месте.</p></div></article>
        </div>
        <a className="button button--dark" href={APP_URL} target="_blank" rel="noreferrer">Посмотреть платформу <ArrowIcon /></a>
      </section>

      <section className="faq section-shell" id="faq">
        <div className="section-heading" data-reveal>
          <div><span>07 · БЕЗ МЕЛКОГО ШРИФТА</span><h2>ЧАСТЫЕ<br /><em>ВОПРОСЫ</em></h2></div>
          <p>Коротко о механике, подтверждениях, LIVE-дуэлях и правилах платформы.</p>
        </div>
        <div className="faq-list" data-reveal>
          {faqs.map(([question, answer], index) => (
            <details key={question}>
              <summary><span>{String(index + 1).padStart(2, "0")}</span><b>{question}</b><i aria-hidden="true">+</i></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta section-shell" data-reveal>
        <div className="final-noise" aria-hidden="true" />
        <span>ГОТОВЫ ПРОВЕРИТЬ СЕБЯ?</span>
        <h2>НУ ЧТО,<br /><em>ЗАБЬЁМСЯ?</em></h2>
        <p>Выберите вызов. Начните сегодня. Завтрашняя версия вас скажет спасибо.</p>
        <a className="button button--primary button--large" href={APP_URL} target="_blank" rel="noreferrer">Открыть приложение <ArrowIcon /></a>
      </section>

      <footer className="footer section-shell">
        <div className="footer-brand">
          <a className="logo" href="#top"><BrandMark /><span>ЗАБЬЁМСЯ</span></a>
          <p>Платформа дисциплины и достижения целей.</p>
        </div>
        <nav className="footer-nav" aria-label="Разделы сайта"><a href="#mechanics">Механика</a><a href="#modes">LIVE-дуэли</a><a href="#business">Компаниям</a><a href="#faq">Вопросы</a></nav>
        <div className="footer-docs">
          <span>Документы и поддержка доступны внутри приложения</span>
          <div><a href={APP_URL} target="_blank" rel="noreferrer">Пользовательское соглашение</a><a href={APP_URL} target="_blank" rel="noreferrer">Правила платформы</a><a href={APP_URL} target="_blank" rel="noreferrer">Поддержка</a></div>
        </div>
        <span className="footer-copy">© 2026 ЗАБЬЁМСЯ</span>
      </footer>
    </main>
  );
}
