import { getCollection } from 'astro:content';

/** 최신순 글 목록. draft 글은 개발 서버에서만 보인다. */
export async function getPosts() {
  const posts = await getCollection('posts', (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** order가 큰 프로젝트가 먼저. */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => b.data.order - a.data.order);
}

/** order가 큰 카테고리가 먼저. */
export async function getCategories() {
  const categories = await getCollection('categories');
  return categories.sort((a, b) => b.data.order - a.data.order || a.data.name.localeCompare(b.data.name));
}

/** 카테고리 id → 이름. 지워진 카테고리를 가리키는 글은 이름 없이 보인다. */
export async function getCategoryNames() {
  return new Map((await getCategories()).map((c) => [c.id, c.data.name]));
}
