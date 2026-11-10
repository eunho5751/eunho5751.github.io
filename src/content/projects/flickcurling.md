---
title: FlickCurling
summary: 손가락으로 튕겨 스톤을 보내는 모바일 컬링 게임. 다국어, 인앱 결제, 서버 로직까지 갖춘 출시형 프로젝트입니다.
period: 2026
role: 1인 개발
platform: Mobile (Android / iOS)
stack: [Unity, C#, DOTween, Localization, Unity IAP, Cloud Code]
accent: '#0ea5e9'
order: 1
links:
  - { label: GitHub, url: 'https://github.com/eunho5751' }
---

<!-- TODO: 실제 게임 소개, 스토어 링크, 플레이 영상으로 바꿔 주세요. -->

## 개요

FlickCurling은 화면을 플릭해 스톤을 던지는 캐주얼 컬링 게임입니다.

## 기술적으로 신경 쓴 점

- **Unity Localization** — 모든 UI 텍스트를 String Table로 관리해 다국어 지원
- **재사용 가능한 UI 프리팹** — 버튼·팝업·슬라이더 등을 공통 프리팹으로 만들고, 에디터 스크립트로 생성·바인딩
- **인앱 결제와 Cloud Code** — Unity IAP로 결제를 처리하고, 신뢰가 필요한 로직은 서버(Cloud Code)에서 실행
- **공통 클릭 사운드** — 모든 버튼에 자동으로 붙는 사운드 시스템으로 누락 방지
