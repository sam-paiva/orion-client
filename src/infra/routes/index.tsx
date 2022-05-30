import { Navigate, Route, Routes } from 'react-router-dom';
import CreateImmobile from '../../core/features/CreateImmobile';
import Home from '../../core/features/Home';
import Login from '../../core/features/Login';
import SignUp from '../../core/features/SignUp';
import { userIsLogged } from '../../infra/services/auth.service';

const ProtectedRoute = ({ userIsLogged, children }: any) => {
  if (!userIsLogged) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-in" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route
        path="/home"
        element={
          <ProtectedRoute userIsLogged={userIsLogged()}>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/announce"
        element={
          <ProtectedRoute userIsLogged={userIsLogged()}>
            <CreateImmobile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};
