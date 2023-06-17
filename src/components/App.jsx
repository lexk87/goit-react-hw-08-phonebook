import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsRefreshing, refreshUser } from '../redux';
import { useDispatch } from 'react-redux';
import { useEffect, lazy } from 'react';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Header } from 'shared-layout/Header';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Home = lazy(() => import('../pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts/Contacts'));
const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));

export const App = () => {
    const dispatch = useDispatch();
    const isRefreshing = useSelector(selectIsRefreshing);

    useEffect(() => {
        dispatch(refreshUser());
    }, [dispatch]);

    return (
        !isRefreshing && (
            <>
                <GlobalStyle />

                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<Home />} />
                        <Route
                            path="/register"
                            element={
                                <RestrictedRoute
                                    redirectTo="/contacts"
                                    component={<Register />}
                                />
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <RestrictedRoute
                                    redirectTo="/contacts"
                                    component={<Login />}
                                />
                            }
                        />
                        <Route
                            path="/contacts"
                            element={
                                <PrivateRoute
                                    redirectTo="/"
                                    component={<Contacts />}
                                />
                            }
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>

                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                />
            </>
        )
    );
};
