import test from 'node:test';
import assert from 'node:assert/strict';
import { searchTopics, HEALTH_TOPICS } from '../app.js';

test('returns all topics on empty query', () => {
  assert.equal(searchTopics('').length, HEALTH_TOPICS.length);
});

test('filters topics by keyword', () => {
  const res = searchTopics('dengue');
  assert.equal(res.length, 1);
  assert.equal(res[0].id, 'dengue-sinais');
});
