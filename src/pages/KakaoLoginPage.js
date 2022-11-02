import styled from "styled-components";
import {get} from "../network/AxiosCreate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const KakaoAuthBtn = styled.button`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 60px;

  background-color: #282c34;
  border-radius: 8px;

  color: white;
  font-size: 20px;
`;

function KakaoLoginPage() {
    const isDev = (new URL(document.URL).port) === '3000';
    const url = (isDev ? 'http://' : 'https://') + new URL(document.URL).host;

    const RE_URL = `${url}/auth/kakao`;

    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_REST_KEY}&redirect_uri=${RE_URL}&response_type=code`;

    const authAction = () => {
        window.location.href = KAKAO_AUTH_URL;
    }

    return (
        <Container>
            <KakaoAuthBtn onClick={() => authAction()}>
                Login
            </KakaoAuthBtn>
        </Container>
    );
}

export default KakaoLoginPage;