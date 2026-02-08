---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: default
---

# About Section
about_title: About Me
about_profile_image: images/profile.jpg
about_content: | # this will include new lines to allow paragraphs
  <font size="5"><b>반갑습니다. 최은호입니다.</b></font>
  <br>
  6년차 Unity 클라이언트 개발자로서 실감형 콘텐츠를 중심으로 개발해왔으며, 콘텐츠 개발을 지원하기 위한 다양한 시스템 개발 경험을 보유하고 있습니다.
  확장성과 유지보수성을 고려한 아키텍처 설계를 중요하게 생각하며, 변화에 유연하게 대응할 수 있는 구조를 만들기 위해 지속적으로 고민하고 노력하고 있습니다.


  새로운 경험을 하는 것을 좋아합니다. 경험을 통해 새로운 지식을 얻을 수 있고, 문제 해결 능력이 성장한다고 생각합니다.
  또한, 개인 블로그에 새롭게 얻은 경험을 정리하여 공유하고 있습니다. 머리로 알고있던 것을 글로 정리하는 과정에서 개념을 재정립하고 새로운 인사이트를 얻고 있습니다.


content:
  - title: Skill
    layout: text
    content: |
      <font size="4"><b>　Languages : C#, C++</b></font>
      - C# : Unity 개발 주력 언어로 사용해 왔으며, 콘텐츠 로직 및 시스템 구현에 능숙
      - C++ : 프로그래밍을 C++로 시작하여 언어에 대한 기본적인 이해와 Unity 플러그인 개발 경험
      <br>
      <br>
      <font size="4"><b>　Engine : Unity</b></font>
      - 엔진 기본 기능에 대한 이해 (Rigidbody, Animator, UGUI 등)
      - UniTask & CancellationToken을 통한 비동기 처리
      - DOTween을 통한 Easing 구현
      - URP RenderGraph를 통한 RenderPass 구현
      - HLSL을 통한 Vertex & Fragment Shader 작성
      - Compute Shader를 통한 병렬 처리
      - Addressables을 통한 리소스 관리
      - ScriptableObject를 통한 데이터 관리
      - HTTP, WebSocket 통신 (UnityWebRequest, Socket.IO)
      - C++ 네이티브 플러그인 연동
      - Unity Editor 확장
      <br>
      <br>
      <font size="4"><b>　Tools : Git (SourceTree/Fork), Redmine, Notion</b></font>
      <br>
      <font size="4"><b>　Etc</b></font>
      - OpenCV를 통한 영상 처리​

  - title: Work Experience # Title for the section
    layout: list # Type of content section (list/text)
    content:
      - layout: top-middle
        title: 셀빅
        sub_title: 프로그램팀, 대리
        caption: 2022.12 ~ 2025.12
        description: | # this will include new lines to allow paragraphs
            <br>
            <font size="4.5"><b>Unity 콘텐츠 및 시스템 다수 개발.</b></font>
            - 실감형 콘텐츠, 포토부스, 포토카드 등 다양한 콘텐츠를 전담하여 아키텍처 설계 및 구현
            - 프린터, 카드리더기 등 콘텐츠 개발에 필요한 하드웨어 연동 및 기능 모듈화
            - OpenCV 및 Shader를 활용하여 엣지블렌딩 시스템 개발
            - Localization 패키지를 확장하여 CSV 기반 로컬라이제이션 시스템 개발
            <br>
            <br>
            <font size="4.5"><b>프로젝트 유지보수 및 개선.</b></font>
            - 콘텐츠 개발에 사용되는 프레임워크 리팩토링을 통한 코드 구조 개선
            - UniTask를 활용해 코루틴 기반 비동기 로직을 async/await 기반으로 작성하여 코드 가독성 개선
            - Addressables을 통해 리소스를 관리하여 메모리 사용 및 빌드 사이즈 최적화
            <br>
            <br>
            <font size="4.5"><b>팀 내 개발 프로세스 및 개발 문화 개선.</b></font>
            - 협업 시 통일성을 유지하기 위해 네이밍 컨벤션 정립
            - 팀 내 전문성 및 협업 역량 강화를 위한 세미나 진행
            
      - layout: top-middle
        title: 셀빅
        sub_title: R&D팀, 연구원
        caption: 2019.10 ~ 2022.04
        description: | # this will include new lines to allow paragraphs
            <br>
            <font size="4"><b>Unity 콘텐츠 개발에 필요한 핵심 기술 개발.</b></font>
            - 카메라 연결 및 실시간 영상 스트림을 획득하기 위한 카메라 제어 시스템 개발
            - 프로젝션 환경에서 콘텐츠와의 실시간 인터랙션을 위한 터치 검출 시스템 개발
            - OpenCV를 활용하여 이미지 내 그려진 그림을 검출·추출하는 알고리즘 개발
            <br>
            <br>
            <font size="4"><b>Unity 네이티브 플러그인 개발.</b></font>
            - 카메라 제어를 위해 카메라 SDK를 활용한 C++ 플러그인 개발      
            - 그림 이미지를 스키닝된 2D 캐릭터 생성에 필요한 데이터로 변환하는 C++ 플러그인 개발
            - 기존 C#으로 구현된 기능을 C++로 포팅하고 플러그인으로 연동하여 성능 최적화

  - title: Other Experience
    layout: list

  - title: Education
    layout: text
    content: |
        2020.03 ~ 2022.02 광운대학교스마트융합대학원 스마트시스템학과(실감콘텐츠 전공)

        2019.03 ~ 2020.02 청강문화산업대학교 만화애니게임학과(심화) - 프로그래밍
        
        2016.03 ~ 2019.02 청강문화산업대학교 게임전공 - 프로그래밍