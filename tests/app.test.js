const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../src/app');

test('GET / returns the API home payload', async () => {
  const server = app.listen(0);
  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.equal(body.success, true);
    assert.match(body.message, /Subscription Tracker/);
  } finally {
    server.close();
  }
});

test('GET /error returns a structured error response', async () => {
  const server = app.listen(0);
  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/error`);
    const body = await response.json();

    assert.equal(response.status, 500);
    assert.equal(body.success, false);
    assert.match(body.message, /test error/i);
  } finally {
    server.close();
  }
});
