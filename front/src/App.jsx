import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {createTheme, responsiveFontSizes, ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>
    }
]);

// main color palette : #d10c71
// secondary color palette : #5f71c7

// text main color : #d1dcff
// text secondary color : #97a5ff


let theme = createTheme(
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

theme = responsiveFontSizes(theme);

function App() {
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
