
import Body from './Component/Body'
import { Provider } from 'react-redux'
import AppStore from './Component/Utils/AppStrore'

function App() {
  return (
    <div>
      <Provider store={AppStore}>
      <Body/>
  </Provider>
 
  
    </div>
  )
}

export default App
