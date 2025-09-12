# Wallpaper Download App

React Native로 개발된 배경화면 갤러리 앱입니다. Expo를 기반으로 하며, 이미지 목록 조회와 다운로드 기능을 제공합니다.

## 화면

| 홈 | 즐겨찾기 | 상세 - 즐겨찾기 기능 |
|---|---|---|
| ![home_1](./images/home_1.png) | ![fav_1](./images/fav_1.png) | ![detail_1](./images/detail_1.png) |
| 상세 - 다운로드 | 상세 - 다운로드 완료 | |
| ![detail_3](./images/download_1.png) | ![detail_3](./images/download_2.png) | |

## 주요 기능

- **이미지 갤러리**
- **이미지 상세보기**: 개별 이미지 확대 보기 및 상세 정보
- **이미지 다운로드**: 디바이스 사진 앨범에 이미지 저장 기능
- **탭 내비게이션**: Bottom Tab을 통한 직관적인 화면 전환

## 신규 기술 스택

### Navigation
- **React Navigation**: 화면 네비게이션 관리
- **Bottom Tabs**: 탭 기반 네비게이션
- **Stack Navigation**: 스택 기반 화면 전환

### Media & File System
- **expo-file-system**: 파일 다운로드 및 관리
- **expo-media-library**: 디바이스 미디어 라이브러리 접근

### Design System
- Custom Component 사용
```tsx
export const Header: React.FC<HeaderProps> & {
  Title: React.FC<HeaderTitleProps>;
  Icon: React.FC<HeaderIconProps>;
} = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>{children}</View>
    </SafeAreaView>
  );
};

```



## 📁 프로젝트 구조

```
app/
├── _layout.tsx                    # 루트 레이아웃
└── src/
    ├── components/               # 재사용 가능한 컴포넌트
    │   └── PhotoListItem.tsx    # 이미지 리스트 아이템
    ├── data/                    # 데이터 및 상수
    │   └── constants.ts         # 이미지 URL 목록
    ├── designsystem/            # 디자인 시스템 컴포넌트
    │   ├── Badge.tsx
    │   ├── Button.tsx
    │   ├── Header.tsx
    │   ├── Icons.tsx
    │   ├── RemoteImage.tsx
    │   └── Typography.tsx
    ├── hooks/                   # 커스텀 훅
    │   ├── useImageDetail.ts    # 이미지 다운로드 로직
    │   └── usePhotoListItem.ts  # 리스트 아이템 상태 관리
    ├── navigation/              # 네비게이션 설정
    │   ├── BottomTabNavigations.tsx
    │   └── RootStackNavigations.tsx
    └── screen/                  # 화면 컴포넌트
        ├── ImageListScreen.tsx      # 이미지 목록 화면
        ├── ImageDetailScreen.tsx    # 이미지 상세 화면
        ├── FavoriteImageListScreen.tsx # 즐겨찾기 화면
        └── components/
            └── DownloadButton.tsx   # 다운로드 버튼
```


## 주요 기능 구현

### 주요 특징:
- **권한 관리**: 미디어 라이브러리 접근 권한 자동 요청
- **에러 처리**: 다운로드 실패 시 사용자 친화적 알림
- **로딩 상태**: 이미지 다운로드 진행 상태 UI 피드백
- **파일 시스템**: Expo File System을 활용한 안전한 파일 다운로드

## 권한 설정

1. 권한 확인 및 요청
2. 이미지 다운로드
3. 앨범에 저장

## 📖 학습 내용 정리

이 프로젝트를 통해 학습할 수 있는 React Native 개발 개념들:

### 1. Navigation
- React Navigation 설정 및 사용
- Stack Navigation과 Tab Navigation 조합
- 타입 안정성을 고려한 네비게이션 파라미터 관리

### 2. File System & Media
- Expo File System API 사용
- 미디어 라이브러리 권한 관리
- 네트워크 이미지 다운로드

### 3. Design System
- 재사용 가능한 컴포넌트 설계

### 4. Performance Optimization
- FlatList를 활용한 효율적인 리스트 렌더링