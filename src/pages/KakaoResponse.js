import {useEffect} from "react";
import {post} from "../network/AxiosCreate";
import styled from "styled-components";

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

const Box = styled.div`
  
`;

function KakaoResponse() {
    const isDev = (new URL(document.URL).port) === '3000';
    const url = (isDev ? 'http://' : 'https://') + new URL(document.URL).host;

    const RE_URL = `${url}/auth/kakao`;

    const href = window.location.href;
    let params = new URL(document.URL).searchParams;
    let code = params.get("code");

    const getKaKaoToken = () => {
        post(
            'https://kauth.kakao.com/oauth/token',
            `grant_type=authorization_code&client_id=${process.env.REACT_APP_REST_KEY}&redirect_uri=${RE_URL}&code=${code}`
        ).then((res) => {
            if (res.status === 200) {
                const data = res.data;
                console.log('Success');

                const type = data.token_type;
                const accessToken = data.access_token;
                const expired = data.expires_in;
                const refreshToken = data.refresh_token;
                const refreshExpired = data.refresh_token_expires_in;
                const scopes = data.scope.split(' ');

                console.log('Type :', type);
                console.log('AccessToken :', accessToken);
                console.log('AccessToken Exp :', expired);
                console.log('RefreshToken :', refreshToken);
                console.log('RefreshToken Exp:', refreshExpired);
                console.log('Scops :', scopes);
            }
        });
    }

    useEffect(() => {

    }, []);

    return (
        <Container>
            <KakaoAuthBtn onClick={getKaKaoToken}>
                code
            </KakaoAuthBtn>
        </Container>
    );
}

export default KakaoResponse;