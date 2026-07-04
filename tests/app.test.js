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

test('POST /register rejects invalid input with validation errors', async () => {
  const server = app.listen(0);
  const { port } = server.address();

  try {
    const response = await fetch(`http://127.0.0.1:${port}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'ab', email: 'invalid-email', password: '123' }),
    });
    const body = await response.json();

    assert.equal(response.status, 400);
    assert.equal(body.success, false);
    assert.ok(Array.isArray(body.errors));
  } finally {
    server.close();
  }
});
