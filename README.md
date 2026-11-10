# eunho5751.github.io

Astro로 만든 포트폴리오 + 블로그입니다. `main`에 푸시하면 GitHub Actions가 빌드해서 GitHub Pages에 배포합니다.
내용은 **관리자 화면(`/admin`)** 에서 편집하거나, 아래 파일을 직접 고쳐도 됩니다.

## 관리자 화면 (/admin)

[Sveltia CMS](https://sveltiacms.app)로 만든 편집 화면입니다. 저장하면 GitHub 저장소에 커밋되고, 1~2분 뒤 사이트에 반영됩니다.

| 메뉴 | 편집하는 것 | 실제 파일 |
|---|---|---|
| 블로그 글 | 제목, 요약, 날짜, 카테고리, 태그, 배너, 본문, 사진, 초안 여부 | `src/content/posts/*.md` |
| 카테고리 | 이름, 설명, 표시 순서 | `src/content/categories/*.json` |
| 프로젝트 | 소개, 대표 이미지, 기술 스택, 링크, 순서, 메인 노출 | `src/content/projects/*.md` |
| 사이트 설정 › 메인 화면 | 큰 제목, 소개, 프로필 이미지, 버튼, 섹션 제목, 보일 개수 | `src/data/home.json` |
| 사이트 설정 › 사이트 정보 | 사이트 이름, 이름, 직함, 설명, GitHub, 이메일 | `src/data/site.json` |
| 사이트 설정 › About | About 페이지 | `src/content/pages/about.md` |

업로드한 사진은 WebP로 바뀌고 긴 변이 2000px 이하로 줄어든 뒤 `public/images/uploads/`에 저장됩니다.

### 로그인 방법 (배포된 사이트에서)

1. GitHub에서 **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**
2. Repository access: **Only select repositories → `eunho5751.github.io`**
3. Permissions → Repository permissions → **Contents: Read and write**
4. 만든 토큰을 `https://eunho5751.github.io/admin/` 의 **액세스 토큰으로 로그인**에 붙여 넣기

토큰은 브라우저에만 저장됩니다. 저장소 쓰기 권한이 없는 사람은 `/admin`에 들어와도 아무것도 바꿀 수 없습니다.

### 로컬에서 편집하기 (배포 전 미리보기)

`npm run dev`를 켠 상태에서 Chrome이나 Edge로 http://localhost:4321/admin/ 을 열고 **로컬 저장소로 작업** → 이 프로젝트 폴더를 선택합니다.
저장하면 파일만 바뀌고 커밋은 되지 않으므로, 확인한 뒤 직접 커밋하고 푸시하면 됩니다. 이 방식은 폴더가 git 저장소여야 합니다.

## 개발

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 파일 생성
```

### 파일로 직접 글 쓰기

```md
---
title: 글 제목
description: 목록과 검색 결과에 보일 한 줄 요약
date: 2026-11-10
category: unity          # src/content/categories/unity.json 의 파일 이름
tags: [UniTask]
banner: /images/uploads/banner.webp
draft: true              # true면 로컬(dev)에서만 보이고 배포되지 않음
---

본문...
```

### 필드를 추가하려면

`src/content.config.ts`(사이트가 읽는 형식)와 `public/admin/config.yml`(편집 화면의 입력 칸)을 함께 고칩니다.

## 처음 배포하기

1. GitHub에 **`eunho5751.github.io`** 라는 이름의 public 저장소를 만든다.
2. 이 폴더를 푸시한다.
   ```bash
   git init && git add . && git commit -m "init blog"
   git branch -M main
   git remote add origin https://github.com/eunho5751/eunho5751.github.io.git
   git push -u origin main
   ```
3. 저장소 **Settings → Pages → Build and deployment → Source** 를 **GitHub Actions** 로 바꾼다.
4. Actions 탭에서 배포가 끝나면 https://eunho5751.github.io 에서 확인.
