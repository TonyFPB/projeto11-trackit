import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './components/Assets/Styles/GlobalStyle'
import CreateHabits from "./components/CreateHabits/CreateHabits";
import SignIn from './components/Login/SignIn.js'
import SignUp from './components/SignUp/SignUp.js'
import TodayHabits from "./components/TodayHabits/TodayHabits";
import { Providers } from "./Providers";


export default function App() {
  
  return (
    <Providers>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<SignIn/>} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<TodayHabits/>} />
          <Route path="/habitos" element={<CreateHabits />} />
        </Routes>
      </BrowserRouter>
    </Providers>

  )
}
