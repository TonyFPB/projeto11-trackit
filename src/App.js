import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from './components/Assets/Styles/GlobalStyle'
import CreateHabits from "./components/CreateHabits/CreateHabits";
import SignIn from './components/Login/SignIn.js'
import SignUp from './components/SignUp/SignUp.js'
import TodayHabits from "./components/TodayHabits/TodayHabits";


export default function App() {
  const [token, setToken] = useState('')
  return (
   
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path='/' element={<SignIn setToken={setToken} />} />
          <Route path="/cadastro" element={<SignUp />} />
          <Route path="/hoje" element={<TodayHabits token={token} />} />
          <Route path="/habitos" element={<CreateHabits/>}/>
        </Routes>
      </BrowserRouter>
    
  )
}
