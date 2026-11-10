// 사이트 정보와 메인 화면 내용은 src/data/*.json 에 있고, /admin 에서 편집한다.
import site from './data/site.json';
import home from './data/home.json';

export const SITE = site;
export const HOME = home;

/** "안녕하세요, [Eunho]입니다." 처럼 대괄호로 감싼 부분을 강조 색으로 보여 준다. */
export function highlight(text: string) {
  const escape = (s: string) =>
    s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
  return escape(text).replace(/\[([^\]]+)\]/g, '<span class="accent">$1</span>');
}
