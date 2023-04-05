import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, responsiveFontSizes, ThemeProvider, useMediaQuery} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import {useMemo} from "react";
import Magnip from "./pages/Magnip";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    },
    {
        path: '/magnip',
        element: <Magnip/>
    }
]);

let baseTheme = createTheme(
    {
        palette: {
            mode: 'dark',
            primary: {
                main: '#d10c71',
                light: '#ff3f9f',
                dark: '#9c004d',
            },
            secondary: {
                main: '#5f71c7',
                light: '#8fa2ff',
                dark: '#2c3f94',
            },
            text: {
                primary: '#d1dcff',
                secondary: '#97a5ff',
            }
        }
    }
)

baseTheme = responsiveFontSizes(baseTheme);

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme(
                {
                    palette: {
                        mode: prefersDarkMode ? 'dark' : 'light',
                        primary: {
                            main: '#d10c71',
                            light: '#ff3f9f',
                            dark: '#9c004d',
                        },
                        secondary: {
                            main: '#5f71c7',
                            light: '#8fa2ff',
                            dark: '#2c3f94',
                        },
                        text: {
                            primary: prefersDarkMode ? '#d1dcff' : '#28286c',
                            secondary: '#97a5ff',


                        }
                    }
                }
            ),
        [prefersDarkMode],
    );

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <RouterProvider router={router}/>
            </ThemeProvider>
        </div>
    );
}

export default App;
