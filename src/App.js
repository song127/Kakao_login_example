import {Route, Routes} from "react-router-dom";
import KakaoLoginPage from "./pages/KakaoLoginPage";
import KakaoResponse from "./pages/KakaoResponse";

function App() {
  return (
    <Routes>
      <Route path={'/auth/login'} element={<KakaoLoginPage/>}/>
      <Route path={'/auth/kakao'} element={<KakaoResponse/>}/>
    </Routes>
  );
}

export default App;
