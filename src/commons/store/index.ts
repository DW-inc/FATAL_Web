import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

// 상태관리 라이브러리의 특성상 새로고침하거나 페이지를 닫을 때 저장소에 저장된 상태는 삭제된다.
// 페이지가 변경되더라도 상태관리를 유지하기 위해 Recoil-persist를 사용했다.
const { persistAtom } = recoilPersist()

export const accessTokenState = atom({
  key: 'accessTokenState',
  default: '',
})

export const clickModelState = atom({
  key: 'clickModel',
  default: 'IDOL',
})
