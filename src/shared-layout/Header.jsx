import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux';
import { useSelector } from 'react-redux';

export const Header = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
            <AppHeader>
                <Navigation>
                    <NavigationLink to="/">
                        <HeaderLogo />
                        <HeaderLogoTxt>PHONEBOOK</HeaderLogoTxt>
                    </NavigationLink>
                    <NavigationLink to="/">HOME</NavigationLink>
                    {isLoggedIn && (
                        <NavigationLink to="/contacts">CONTACTS</NavigationLink>
                    )}
                </Navigation>
            </AppHeader>
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>

            {/* <header>
                <nav>
                    <link>
                        <img src="" alt="" />
                        <p>Phonebook</p>
                    </link>
                    <link>Home</link>
                    {isLoggedIn && <link>Contacts</link>}
                </nav>
            </header> */}
        </>
    );
};
