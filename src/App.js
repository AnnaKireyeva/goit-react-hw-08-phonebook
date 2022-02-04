import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import Container from './Components/Container/Container';
import { authOperations, authSelectors } from './redux/auth';
import { Loader } from './Components/Loader/Loader';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import { ToastContainer } from 'react-toastify';

const HomeView = lazy(() => import('./views/HomeView.js'));
const RegisterView = lazy(() => import('./views/RegisterView.js'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView.js'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />
      {!isFetchingCurrentUser && (
        <Suspense fallback={<Loader />}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      )}
      <ToastContainer autoClose="3000" position="top-right" theme="colored" />
    </Container>
  );
}
