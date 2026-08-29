import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const panel = readFileSync(new URL('../ui/Panel.tsx', import.meta.url), 'utf8');
const legacyCss = readFileSync(new URL('../ui/panel.css', import.meta.url), 'utf8');
const designCss = readFileSync(new URL('../ui/design-system.css', import.meta.url), 'utf8');

const palette = ['#547362', '#405d4d', '#5f956f', '#c08a48', '#b96b59', '#6e8290', '#878d89', '#668ca8', '#ffffff'];

test('visual identity stylesheet loads after legacy layout stylesheet', () => {
  const layoutIndex = panel.indexOf("import './panel.css';");
  const identityIndex = panel.indexOf("import './design-system.css';");
  assert.ok(layoutIndex >= 0);
  assert.ok(identityIndex > layoutIndex);
});

test('visual identity owns one fixed sage palette and semantic aliases', () => {
  for (const color of palette) assert.match(designCss, new RegExp(color.replace('#', '\\#'), 'i'));
  assert.match(designCss, /--wb-accent: var\(--wb-brand\)/);
  assert.match(designCss, /--wb-state-confirmed: var\(--wb-confirmed\)/);
  assert.match(designCss, /--wb-state-pending: var\(--wb-pending\)/);
  assert.match(designCss, /--wb-state-error: var\(--wb-error\)/);
  assert.match(designCss, /--wb-kind-temporary: var\(--wb-temporary\)/);
  assert.doesNotMatch(designCss, /--wb-accent:\s*var\(--hana-plugin-accent/);
  assert.equal((legacyCss.match(/--wb-accent:/g) || []).length, 1);
});

test('hard-coded colors in the final identity layer are limited to the declared palette', () => {
  const colors = [...new Set(designCss.match(/#[0-9a-fA-F]{6}/g) || [])].map((item) => item.toLowerCase()).sort();
  assert.deepEqual(colors, palette.map((item) => item.toLowerCase()).sort());
});

test('all button roles share the same five visual identities', () => {
  assert.match(designCss, /按钮 ID：primary \/ secondary \/ danger \/ quiet \/ icon 五类/);
  assert.match(designCss, /\.primary-button/);
  assert.match(designCss, /\.secondary/);
  assert.match(designCss, /\.danger-button/);
  assert.match(designCss, /\.quiet-danger/);
  assert.match(designCss, /\.icon-button/);
  assert.match(designCss, /--wb-control-default: 36px/);
  assert.match(designCss, /@media \(max-width: 900px\)/);
  assert.match(designCss, /min-height: 44px/);
});

test('main surfaces expose stable visual identity markers', () => {
  assert.match(panel, /data-ui="workbench-shell"/);
  assert.match(panel, /data-ui="primary-navigation"/);
  assert.match(panel, /data-ui="segmented-navigation"/);
  assert.match(panel, /data-ui="status-badge"/);
  assert.match(panel, /data-ui="section-heading"/);
  assert.match(panel, /data-ui="page-title"/);
  assert.match(panel, /data-ui="drawer"/);
  assert.match(panel, /data-ui-action="course-move"/);
  assert.match(panel, /data-ui-action="course-cancel"/);
  assert.match(panel, /data-ui-action="affair-complete"/);
});

test('high-frequency adjustment actions use one label', () => {
  assert.doesNotMatch(panel, />调整时间<\/button>/);
  assert.doesNotMatch(panel, />AI 调时间<\/button>/);
  assert.doesNotMatch(panel, />调<\/button>/);
  assert.ok((panel.match(/>调时间<\/button>/g) || []).length >= 6);
});

test('semantic state color and temporary identity remain independent', () => {
  assert.match(designCss, /颜色只表达状态；蓝点只表达临时身份/);
  assert.match(designCss, /--card-state: var\(--wb-confirmed\)/);
  assert.match(designCss, /--card-state: var\(--wb-pending\)/);
  assert.match(designCss, /--card-state: var\(--wb-error\)/);
  assert.match(designCss, /--identity-color: var\(--wb-temporary\)/);
});
