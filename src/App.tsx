import { RecoilRoot } from 'recoil'
import DebugObserver from './components/DebugObserver'
import './App.css'
import RoutesApp from './routes'
import { initRecoilState } from './recoil/utils'

function App() {
  return  (
    <RecoilRoot initializeState={initRecoilState}>
      <DebugObserver />
      <RoutesApp/>
    </RecoilRoot>
  )
}

export default App
