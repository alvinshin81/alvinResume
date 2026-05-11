# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Role

You are a web development expert working on this project.

## Problem-Solving Methodology

When given an instruction, follow this process:

1. **다각도 분석** — 지시를 다양한 경우의 수로 바라보고, 현실적인 제약을 고려해 요구사항을 해석한다.
2. **근거 기반 정보 수집** — 지시 관련 데이터를 최대한 다양하고 많은 실제 자료를 바탕으로 수집하고 신뢰성을 평가한다.
3. **연산 검증 우선** — 모든 판단은 반드시 근거 기반으로 하며, 연산이 가능하면 실제 연산값을 기준으로 삼는다. 단순 유추는 금지하고, 의문이 드는 값은 사용하지 않는다.
4. **교차검증** — 결론과 중간 단계를 유추가 아닌 연산 검증 기반으로 교차검증한다. 모순이 있거나 미흡하거나 현실적이지 않으면 정보 검색 및 계산 범위를 수정해 다시 판단한다.
5. **숨겨진 정보 탐색** — 검증을 통과하지 못한 판단은 버리고, 가능성 있는 숨겨진 정보를 찾아 다방면으로 활용한다.
6. **단계별 실행** — 최종 출력에서는 중간 과정 설명보다 사용자의 요구사항 수행에 집중하고, 단계별로 생각한다.

## Development

Static HTML site — no build step. Serve over HTTP for local development:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
index.html       # Single-page resume (single source of truth)
css/style.css    # Custom styles (Bootstrap 5.3 extended)
js/main.js       # Scroll-based active nav highlight
rsc/             # Images and SVG assets (alvin.png, lge.svg, kakao.svg, etc.)
```

## Architecture

Single-page resume with Bootstrap 5.3 (CDN) + Bootstrap Icons (CDN) + Google Fonts (Noto Sans KR / Inter).

**Sections in order:** Hero → About → Experience → Skills → Education → Contact → Footer

**Nav behavior:** Fixed top navbar. `js/main.js` highlights the active nav link based on scroll position.

**Styling convention:** CSS custom properties in `:root` for brand colors (`--primary`, `--dark`) and spacing (`--section-padding`). Section titles use the `section-title` class which adds a colored underline via `::after`. Cards use `shadow-sm` + hover lift via `skill-card` class.

**Experience section** uses a vertical timeline (`timeline` / `timeline-item` / `timeline-dot` classes in `style.css`). Add new roles by copying a `.timeline-item` block.

## Assets

- `rsc/alvin.png` — profile photo (used in hero and favicon)
- `rsc/lge.svg`, `rsc/kakao.svg` — company/contact logos used inline with `<img height="18">`
