import styled from 'styled-components';

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px;
  min-height: calc(100vh - 200px);
`;

export const RegisterWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid white;
  border-radius: 40px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 700px;
  padding: 60px 68px 40px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;
