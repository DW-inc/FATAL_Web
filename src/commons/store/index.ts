import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

interface IUserInfo {
  user_email: string
  user_nickname: string
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
  default: { user_email: '', user_nickname: '' },
  effects_UNSTABLE: [persistAtom],
})

export const LoginRegistryState = atom({
  key: 'LoginRegistry',
  default: false,
  effects_UNSTABLE: [persistAtom],
})
