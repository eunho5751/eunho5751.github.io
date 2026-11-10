---
title: PortalHell
summary: 포탈을 활용하는 PC 액션 게임. 1인 개발 중인 Unity 6 / URP 프로젝트입니다.
period: 2026 — 진행 중
role: 1인 개발 (기획 · 프로그래밍)
platform: PC (Windows)
stack: [Unity 6, URP, C#, UniTask, Input System, uGUI]
accent: '#e11d48'
order: 2
links:
  - { label: GitHub, url: 'https://github.com/eunho5751' }
---

<!-- TODO: 실제 게임 소개로 바꿔 주세요. 스크린샷은 public/images/에 넣고 frontmatter의 cover로 지정합니다. -->

## 개요

PortalHell은 혼자 기획하고 개발하고 있는 PC 게임입니다. 게임 디자인 문서를 기준으로 기능을 하나씩 쌓아 가고 있습니다.

## 기술적으로 신경 쓴 점

- **UniTask 기반 비동기** — 코루틴 대신 `async/await`로 흐름을 명확하게 작성
- **오브젝트 풀링** — `UnityEngine.Pool.ObjectPool<T>`로 런타임 할당 최소화
- **어셈블리 분리와 EditMode 테스트** — Core / Runtime 어셈블리를 나누고 핵심 로직을 테스트로 검증
- **ADR(Architecture Decision Record)** — 되돌리기 어려운 결정은 문서로 남김

## 배운 것

<!-- 개발하면서 배운 점, 회고를 적어 보세요. -->
