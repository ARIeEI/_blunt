[BLUNT!](https://arieei.github.io/_blunt/index.html)
===
# Introduction
blunt는 여러 디자이너들과의 활발한 교류를 통한 콜라보를 진행해 오고 있습니다. 이는 끊임없이 노력하고 변화를 시도하는 blunt의 모습을 대변한다고 생각하여, 그동안 탄생한 작품들을 collabo 페이지에 모아 만들게 되었습니다.
또한, animation을 사용하여, 페이지의 동적인 느낌을 주었습니다.

# Requirements
* blunt페이지는 Chrome Browser를 권장합니다.

# Specification
* HTML
* CSS
* jQuery

# Challenges
* 네비게이션 1개의 마크업으로 모바일,웹 반응으로 구현하고자 했습니다.
초반에는 header에 '.open'을 붙여 메뉴가 나오도록 했습니다.
pc분기에서는 정상적으로 작동되었으나, 모바일로 넘어가면서 removeClass가 적용되어 메뉴가 사라지는 문제가 발생했습니다.
오류를 해결하기 위해, 모바일분기에서 'navWrap'에 '.open'을,
pc 분기에서는 'header'에 open 을 붙여문제를 해결하였습니다.

* scroll 이벤트를 이용한, pallax 코드를 하나의 함수로 리펙토링하였습니다.
위 과정을 아래문서에 상세히 설명하여 아래 링크를 올립니다.
 [리펙토링하는 과정](https://github.com/ARIeEI/TIL-/blob/master/blunt_parallax.md)


# Things to do
평소 우산을 좋아했던 터라, blunt 라는 브랜드를 찾게 되었습니다.
blunt 페이지를 방문했을 때, 정적인 느낌을 받았습니다.
모서리가 동그란 디자인적인 느낌을 살려 페이지 자체에도 동적인 요소를 넣어 blunt 제품의 매력 시각적으로 표현하고자 노력했습니다.

* 시각적인 효과
    ```
    hover 사용.
    SVG을 이용한, animation 효과.
    Vivus를 사용.
    AboutUs 페이지의 이미시 슬라이드를 사용하여, blunt 제품의 이미지 노출.
    ```
* blunt 자체 콘텐츠를 사용하여, 사용자들에게 정보 전달.
    ```
    blunt는 다양한 분야에서 자신들의 브랜드를 홍보하고 자함.
    기술력과 디자인을 고려하는 회사의 모습을 직접적으로 제공.
    자체콘텐츠를 제작하여 브랜드의 가치를 높이고, 소통에 적극적인 모습을 보여줌.
    ```
# 오리지널 BLUNT 페이지
[BLUNTUmberalla](https://bluntumbrellas.com/)