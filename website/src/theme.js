import {createContext, useState, useMemo} from 'react'
import {createTheme} from '@mui/material/styles'

export const tokens = (mode) => ({
    ...(mode === "dark" ? {
        grey: {
            100: "#fcfcfc",
            200: "#ededed",
            500: "#666666",
            700: "#3d3d3d",
        },
        primary: {
            100: "#111",
        },
        accent: {
            100: "#0070f3",
            200: "#04050A"
        },
    } : {
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
        },
        primary: {
            100: "#040509",
            200: "#080b12",
            300: "#0c101b",
            400: "#f2f0f0",
            500: "#e3e3e3",
            600: "#fcfcfc",
            700: "#727681",
            800: "#a1a4ab",
            900: "#d0d1d5",
        },
        green: {
            100: "#0f2922",
            200: "#1e5245",
            300: "#2e7c67",
            400: "#3da58a",
            500: "#4cceac",
            600: "#70d8bd",
            700: "#94e2cd",
            800: "#b7ebde",
            900: "#dbf5ee",
        },
        accent: {
            200: "#0070f3",
            900: "#d2d6c7",
        },
    })
}) 

export const themeSettings = (mode) => {
    const colors = tokens(mode)

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? {
                primary: {
                    main: colors.primary[100]
                },
                secondary: {
                    main: colors.accent[100]
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: colors.primary[100]
                }
            }: {
                primary: {
                    main: colors.primary[100]
                },
                secondary: {
                    main: colors.accent[200]
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: "#fcfcfc"
                }
            })
        },
        typography: {
            fontFamily: ["Open Sans", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 40,
                fontWeight: 300,
                color: colors.grey[100]
            },
            h2: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 32,
                fontWeight: 300,
                color: colors.grey[100]
            },
            h3: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 24,
                fontWeight: 400,
                color: colors.grey[100],
            },
            h4: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 20,
                fontWeight: 300,
                color: colors.grey[100],
            },
            h5: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 16,
                fontWeight: 300,
                color: colors.grey[100],
            },
            h6: {
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 14,
                fontWeight: 300,
                color: colors.grey[100],
            },
            h7:{
                fontFamily: ["Open Sans", "sans-serif"].join(","),
                fontSize: 16,
                fontWeight: 550,
                color: colors.grey[100],
            },
        }
    }
}

export const ColorModeContext = createContext()

export const useMode = () => {
    const [mode, setMode] = useState('dark')

    const colorMode = useMemo(
        ()=>({
            toggleColorMode: ()=>
                setMode(x => (x==="light" ? "dark" : "light")),

        }),
        []
    )

    const theme = useMemo(()=> createTheme(themeSettings(mode)), [mode])

    return [theme,colorMode]
}