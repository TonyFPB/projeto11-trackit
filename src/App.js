import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './Assets/Styles/GlobalStyle'
import SignIn from './components/Login/SignIn.js'
import SignUp from './components/SignUp/SignUp.js'
import TodayHabits from "./components/TodayHabits/TodayHabits";


export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SignIn />}/>
        <Route path="/cadastro" element={<SignUp/>}/>
        <Route path="/hoje" element={<TodayHabits/>}/>
      </Routes>
    </BrowserRouter>
  )
}
