import jwt_decode from 'jwt-decode';

export interface TokenData {
  sub: string;
  email: string;
  name: string;
}

const ACCESS_TOKEN = 'ACCESS_TOKEN';

export const saveToken = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN, token);

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN);

export const userIsLogged = () => localStorage.getItem(ACCESS_TOKEN) != null;

export const getUserData = () => {
  const jwt = getAccessToken();
  const user = jwt_decode(jwt!) as TokenData;

  return user;
};

export const logout = () => {
  localStorage.removeItem(ACCESS_TOKEN);
};
