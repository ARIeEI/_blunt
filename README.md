[BLUNT!](https://arieei.github.io/_BLUNT/index.html)
===
# Introduction
평소에 비오는 날씨를 좋아합니다. 우산에도 관심이 많았고, 
우산브랜드 [BLUNT Umberalla](https://bluntumbrellas.com/) 웹 사이트를 리뉴얼해 보았습니다.
비오는 날의 이미지는 빗방울이 떨어지고, 바람의 의해서 흔들리는 동적인 모습이었습니다.
BLUNT 페이지를 방문했을 때, 레이아웃이 배치된 부분에서 정적인 느낌을 받았습니다.
리뉴얼할 때 중점을 둔 부분은 비의 동적인 느낌을 살려 BLUNT 제품의 매력 시각적으로 표현하고자 노력했습니다.
BLUNT는 여러 디자이너들과의 활발한 교류를 통한 콜라보를 진행해 오고 있습니다. 이는 끊임없이 노력하고 변화를 시도하는 BLUNT의 모습을 대변한다고 생각하여, 그동안 탄생한 작품들을 collabo 페이지에 모아 만들게 되었습니다.

# Requirements
* BLUNT 페이지는 Chrome Browser를 권장합니다.

# Feature
'비오는 날'을 컨셉으로 디자인과 구성을 잡았습니다. 나뭇잎과 풀은 비를 맞아 움직이는 모션을 표현하였습니다.
collabo의 우산과 도형이 바람에 의해 돌아가는 모션을 표현하였습니다.

- hover animation.
- SVG animation([Vivus](https://maxwellito.github.io/vivus/)).
- image slide([slick](https://kenwheeler.github.io/slick/))
- image fadein fadeout animation(AboutUs page)
- [google map api](https://developers.google.com/maps/documentation/javascript/tutorial?hl=ko)를 이용한 지도 표현
    
# Specification
* HTML5
* CSS
* javascript
* jQuery
* 반응형 레이아웃

# Challenges
* google map api 사용
    * 지도를 사용해본적이 없어서 조금은 힘들었지만 해당 문서의 샘플코드를 이해하고 반영해보았습니다.

* scroll 이벤트를 이용한, pallax 코드를 하나의 함수로 리펙토링하였습니다.
위 과정을 아래문서에 상세히 설명하여 아래 링크를 올립니다.
    *  [리펙토링하는 과정](https://github.com/ARIeEI/TIL-/blob/master/BLUNT_parallax.md)

# Things to do
 개인이 발전 시켜야할 부분이지만, 구현할 수 있는 기능들이 한정적인 부분이 많이 아쉬웠습니다.

- 변수명 클래스명 전체적인 이름 뒤죽박죽 BEM 스타일로 변경 고려
- 동적인 컨셉이라 레이아웃 기준 느슨하게 잡고 작업하여 유지보수가 힘들었음(박스레이아웃으로 기준을 잡고 그안에서 자유로운 레이아웃표현)
- css selector 사용 기준 불분명(class와 ID, Tag의 혼재)

# BLUNT 리뉴얼 페이지 링크
[https://arieei.github.io/_BLUNT/index.html](https://arieei.github.io/_BLUNT/index.html)