"use client";

import { useEffect, useState } from "react";

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

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#top" aria-label="Забьёмся — на главную"><BrandMark /><span>ЗАБЬЁМСЯ</span></a>
        <nav className={menuOpen ? "nav-open" : ""} aria-label="Основная навигация">
          <a href="#mechanics" onClick={() => setMenuOpen(false)}>Как работает</a>
          <a href="#modes" onClick={() => setMenuOpen(false)}>LIVE-дуэли</a>
          <a href="#business" onClick={() => setMenuOpen(false)}>Для компаний</a>
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
          <p>Открытые челленджи для всех, собственные вызовы для себя и друзей и быстрые LIVE-дуэли. Выберите цель — или создайте свою.</p>
          <div className="hero-actions">
            <a className="button button--primary" href={APP_URL} target="_blank" rel="noreferrer">Попробовать сейчас <ArrowIcon /></a>
            <a className="button button--ghost" href="#product">Смотреть продукт <span>↓</span></a>
          </div>
          <div className="hero-stats">
            <div><strong>30</strong><span>дней в одном ритме</span></div>
            <div><strong>1</strong><span>выбранная цель</span></div>
            <div><strong>0</strong><span>оправданий</span></div>
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

      <section className="mechanics section-shell" id="mechanics">
        <div className="section-heading" data-reveal>
          <div><span>02 · МЕХАНИКА</span><h2>КАК ЭТО<br /><em>РАБОТАЕТ</em></h2></div>
          <p>Четыре простых шага. Самое сложное — сделать первый.</p>
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
            <div className="real-screen-card">
              <span>ЭКРАН ВХОДА · ТЕКУЩАЯ ВЕРСИЯ</span>
              <div className="screen-frame">
                {/* Static <img> keeps this same component portable to GitHub Pages. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="./app-login.png" alt="Экран входа в приложение Забьёмся" />
              </div>
            </div>
            <div className="ui-detail-card">
              <div className="progress-ring"><b>17</b><span>/ 30 дней</span></div>
              <div><small>ЛИЧНАЯ СЕРИЯ</small><strong>НЕ ОСТАНАВЛИВАЙСЯ</strong><p>До следующей отметки — один отчёт.</p></div>
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

      <section className="business" id="business">
        <div className="business-rings" aria-hidden="true"><i /><i /><i /></div>
        <div className="section-shell business-grid">
          <div className="business-copy" data-reveal>
            <div className="section-kicker section-kicker--dark">05 · ДОПОЛНИТЕЛЬНЫЙ ФОРМАТ</div>
            <h2>ПОДХОДИТ<br />И ДЛЯ<br /><em>КОМПАНИЙ.</em></h2>
            <p>Основная платформа открыта каждому. А компании дополнительно могут запускать отдельные спортивные челленджи для сотрудников.</p>
            <a className="button button--dark" href={APP_URL} target="_blank" rel="noreferrer">Посмотреть платформу <ArrowIcon /></a>
          </div>
          <div className="business-features" data-reveal>
            <article><span>01</span><div><h3>БРЕНДИРОВАННЫЙ ВЫЗОВ</h3><p>Отдельная программа под культуру, цели и ритм вашей команды.</p></div></article>
            <article><span>02</span><div><h3>КОМАНДЫ И ОТДЕЛЫ</h3><p>Общий движ, поддержка коллег и здоровое соревнование.</p></div></article>
            <article><span>03</span><div><h3>ПРОГРЕСС БЕЗ ДОГАДОК</h3><p>Участие, серии и результаты собраны в одном месте.</p></div></article>
          </div>
        </div>
      </section>

      <section className="categories section-shell" data-reveal>
        <div className="section-kicker">06 · ВЫБЕРИ СВОЁ</div>
        <div className="category-rows">
          <div><span>01</span><b>СПОРТ</b><i>СИЛА · БЕГ · ВЫНОСЛИВОСТЬ</i><em>↗</em></div>
          <div><span>02</span><b>ПРИВЫЧКИ</b><i>РЕЖИМ · ФОКУС · ДИСЦИПЛИНА</i><em>↗</em></div>
          <div><span>03</span><b>РАЗВИТИЕ</b><i>ЧТЕНИЕ · НАВЫКИ · ПРОГРЕСС</i><em>↗</em></div>
          <div><span>04</span><b>ДУЭЛИ</b><i>МИНУТА · СОПЕРНИК · РЕЙТИНГ</i><em>↗</em></div>
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
        <a className="logo" href="#top"><BrandMark /><span>ЗАБЬЁМСЯ</span></a>
        <p>Платформа дисциплины и достижения целей.</p>
        <div><a href="#mechanics">Механика</a><a href="#modes">LIVE-дуэли</a><a href="#business">Компаниям</a></div>
        <span>© 2026 · MVP</span>
      </footer>
    </main>
  );
}
