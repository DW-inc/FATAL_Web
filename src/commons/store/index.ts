import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

interface IUserInfo {
  user_email: string | null
  user_nickname: string | null
}

// 상태관리 라이브러리의 특성상 새로고침하거나 페이지를 닫을 때 저장소에 저장된 상태는 삭제된다.
// 페이지가 변경되더라도 상태관리를 유지하기 위해 Recoil-persist를 사용했다.
const { persistAtom } = recoilPersist()

export const LoginUserDataState = atom({
  key: 'LoginUserDataState',
  default: '',
})

export const clickModelState = atom({
  key: 'clickModel',
  default: 'IDOL',
})

export const jobState = atom({
  key: 'clickJob',
  default: 'Singer',
})

export const LoginUserInfoState = atom<IUserInfo>({
  key: 'LoginUserInfo',
  default: { user_email: null, user_nickname: null },
  effects_UNSTABLE: [persistAtom],
})

export const LoginRegistryState = atom({
  key: 'LoginRegistry',
  default: null,
  effects_UNSTABLE: [persistAtom],
})

export const Guide_ControllerState = atom({
  key: 'GuideController',
  default: 'CONTROL',
  effects_UNSTABLE: [persistAtom],
})

export const ArrowControllerState = atom({
  key: 'ArrowController',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

// main 페이지 vertical scroll State
// router.push 할때 꼭 const handleNavigation = () => {
//   if (pageableInstance) {
//     pageableInstance.destroy();
//   }
//   router.push('/login');
// };  파괴를 시켜줘야함 안그러면 Dom 에러 발생
export const pageableInstanceState = atom({
  key: 'pageableInstance',
  default: null,
})
