import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("renders the landing and the future B2B announcement", async () => {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-type") ?? "",
    /^text\/html\b/i,
  );
  const html = await response.text();
  assert.match(html, /ЗАБЬЁМСЯ — челленджи, друзья и LIVE-дуэли/i);
  assert.match(html, /ЗАБЬЁМСЯ[\s\S]*ДЛЯ БИЗНЕСА/i);
  assert.match(html, /В РАЗРАБОТКЕ/i);
  assert.match(html, /Функционал ещё не запущен/i);
  assert.match(html, /КАК ЭТО БУДЕТ РАБОТАТЬ/i);
  assert.match(html, /14 ДНЕЙ · 10 × 10/i);
  assert.match(html, /86%/i);
  assert.match(html, /Сотрудникам придётся платить за корпоративный челлендж/i);
});

test("keeps narrow mobile layouts inside the viewport", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");

  assert.match(css, /@media \(max-width: 380px\)/);
  assert.match(css, /\.product-phone\s*\{[^}]*width:\s*calc\(100vw - 24px\)/s);
  assert.match(css, /\.button\s*\{[^}]*max-width:\s*100%/s);
  assert.match(css, /\.dashboard-metrics\s*\{\s*grid-template-columns:\s*minmax\(0,1fr\)/s);
});
