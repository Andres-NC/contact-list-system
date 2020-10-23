import endpoints from '../api';
import axios from 'axios';

export const signIn = async ({password, email}) => {
  const result = await axios({
    url: `http://localhost:3001${endpoints.api}${endpoints.auth}${endpoints.login}`,
    method: 'post',
    auth: {
      password,
      username: email,
    },
  });

  if (result.status == 200) {
    localStorage.setItem('token', result.data.token);
    localStorage.setItem('user', JSON.stringify(result.data.user));
  }
  return result;
};

export const registerUser = async data => {
  return await axios.post(
    `http://localhost:3001${endpoints.api}${endpoints.auth}${endpoints.signUp}`,
    data,
  );
};
