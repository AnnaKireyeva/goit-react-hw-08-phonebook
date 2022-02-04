import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
// import ContactsView from './views/ContactsView';
// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
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
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        <Suspense fallback={<Loader />}>
          <Switch>
            {/* <Route exact path="/">
            <HomeView />
          </Route> */}
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
              <LoginView />
            </PublicRoute>
            {/* <Route path="/contacts">
            <ContactsView />
          </Route> */}
            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
        <ToastContainer autoClose="3000" position="top-right" theme="colored" />
      </Container>
    )
  );
}

// import './App.css';
// import { Loader } from './Components/Loader/Loader';
// import { ToastContainer } from 'react-toastify';
// import AddContactForm from './Components/AddContactForm';
// import Filter from './Components/Filter/Filter';
// import ContactList from './Components/ContactsList/ContactList';
// import { useSelector } from 'react-redux';
// import { getContacts, getLoading } from './redux/phonebook-selectors';

// export default function App() {
//   const contacts = useSelector(getContacts);
//   const loading = useSelector(getLoading);
//   return (
//     <div className="App">
//       <h1 className="Title">Phonebook</h1>
//       <AddContactForm />

//       <h2 className="Title">Contacts</h2>

//       {loading && <Loader />}
//       {contacts.length !== 0 ? (
//         <Filter />
//       ) : (
//         <h3>Your contacts list is empty</h3>
//       )}

//       <ContactList />
//       <ToastContainer autoClose="3000" position="top-right" theme="colored" />
//     </div>
//   );
// }
