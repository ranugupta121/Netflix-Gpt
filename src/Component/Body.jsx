import Login from './Login'
import Browse from './Browse'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import MovieTrailerPage from './Utils/MovieTrailerPage'



function Body() {


  return (
    <div>
      <Router>
                <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/browse" element={<Browse/>}/>
                <Route path='/trailer/:videoId' element={<MovieTrailerPage/>}/>
                 </Routes>
        </Router>
            

      
    </div>
  )
}

export default Body
