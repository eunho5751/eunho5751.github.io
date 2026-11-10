---
title: 블로그를 시작합니다
description: 게임을 만들면서 배운 것들을 기록하려고 github.io 블로그를 열었습니다.
date: 2026-11-10
category: retrospective
tags: [블로그]
---

게임을 만들다 보면 "이거 저번에 어떻게 해결했더라?" 싶은 순간이 많습니다. 그래서 개발하며 배운 것과 고민한 것을 여기에 남기기로 했습니다.

## 앞으로 쓸 것들

- Unity 프로젝트 구조와 어셈블리 분리
- UniTask로 비동기 흐름 정리하기
- 모바일 게임 출시 과정 회고

## 코드 블록 예시

```csharp
public sealed class PortalSpawner : MonoBehaviour
{
    [SerializeField] private Portal prefab;
    private ObjectPool<Portal> pool;

    private void Awake()
    {
        pool = new ObjectPool<Portal>(
            createFunc: () => Instantiate(prefab),
            actionOnGet: p => p.gameObject.SetActive(true),
            actionOnRelease: p => p.gameObject.SetActive(false));
    }

    public async UniTask SpawnAsync(Vector3 position, CancellationToken ct)
    {
        var portal = pool.Get();
        portal.transform.position = position;
        await portal.OpenAsync(ct);
    }
}
```

> 글은 `src/content/posts/`에 마크다운 파일을 추가하면 자동으로 목록에 올라옵니다.
