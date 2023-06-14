import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsRefreshing, refreshUser } from '../redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { GlobalStyle } from 'styles/GlobalStyle';
import { Header } from 'shared-layout/Header';
import { Home, Register, Login, Contacts } from '../pages';

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
                        <Route path="register" element={<Register />} />
                        <Route path="login" element={<Login />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>
            </>
        )
    );
};
