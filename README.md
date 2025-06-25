# 💻 계산기 (Calculator)

<img width="400" alt="image" src="https://github.com/user-attachments/assets/0bb5914a-87a9-4e50-9f85-39ae7296ec0c" />

기본적인 사칙연산을 지원하는 계산기로, 그라데이션 효과와 3D 버튼 스타일이 특징입니다.

## ✨ 기능

- **기본 사칙연산**: 덧셈(+), 뺄셈(−), 곱셈(*), 나눗셈(/)
- **퍼센트 계산**: % 연산자 지원
- **소수점 계산**: 소수점 입력 및 계산
- **부호 변경**: ± 버튼으로 양수/음수 전환
- **초기화**: C 버튼으로 모든 값 초기화
- **연속 계산**: 여러 숫자 연속 입력 가능

## 🚀 사용 방법

1. 숫자 버튼을 클릭하여 숫자를 입력합니다
2. 연산자 버튼(+, −, *, /, %)을 클릭하여 연산을 선택합니다
3. 두 번째 숫자를 입력합니다
4. = 버튼을 클릭하여 결과를 확인합니다
5. C 버튼으로 초기화할 수 있습니다

## 📁 파일 구조

```
calculator/
├── index.html      # HTML 구조
├── style.css       # 스타일시트
└── script.js       # JavaScript 로직
```

## 🎨 디자인 특징

- **색상**: 회색 톤 기반의 컬러 팔레트
- **효과**: 
  - 그라데이션 배경
  - 3D 버튼 효과 (border-bottom으로 입체감 표현)
  - 버튼 클릭 시 버튼이 눌러지는 애니메이션

## 🛠️ 기술 스택

- **HTML**: 시맨틱 마크업
- **CSS**: Flexbox, CSS 변수, 그라데이션
- **JavaScript**: DOM 조작, 이벤트 처리


## 🔧 코드 구조

### JavaScript 주요 함수

- `handleNumber()`: 숫자 입력 처리
- `handleOperator()`: 연산자 입력 처리  
- `handleEqual()`: 등호(=) 처리 및 계산 실행
- `handleDecimal()`: 소수점 입력 처리
- `handleClear()`: 초기화 처리
- `calculate()`: 실제 계산 로직
- `resetInfo()`: 계산기 상태 초기화

### CSS 변수

```css
--gray-100: #f8fafc
--gray-200: #e2e8f0
--gray-300: #d4dde8
--gray-400: #94a3b8
--gray-500: #64748b
--gray-600: #475569
--gray-700: #334155
```
 

 
