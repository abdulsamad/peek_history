import React, { useMemo } from 'react';
import { createMuiTheme, ThemeProvider, CssBaseline, useMediaQuery } from '@material-ui/core';
import { useOptionsState } from '../../context/optionsContext';

function ThemeProviderContainer({ children }) {
	const { theme, accent } = useOptionsState();
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

	const customTheme = useMemo(
		() =>
			createMuiTheme({
				overrides: {
					MuiCssBaseline: {
						'@global': {
							body: {
								backgroundColor: theme === 'dark' ? '#222222' : '#f5f5f5',
								minHeight: '100vh',
								width: '100vw',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between',
								overflowX: 'hidden',
								margin: '0',
							},
							'*::-webkit-scrollbar': {
								backgroundColor: theme === 'dark' ? '#000' : '#fff',
								border: 'none',
							},
							'*::-webkit-scrollbar-thumb': {
								backgroundColor: accent,
								borderRadius: 10,
							},
						},
					},
				},
				palette: {
					type:
						theme === 'default'
							? prefersDarkMode
								? 'dark'
								: 'light'
							: theme === 'dark'
							? 'dark'
							: 'light',
					primary: {
						main: accent,
					},
					secondary: {
						main: '#0044ff',
					},
					background: {
						default: theme === 'dark' ? '#222' : '#f5f5f5',
						paper: theme === 'dark' ? '#000' : '#f5f5f5',
					},
				},
			}),
		[theme, accent, prefersDarkMode],
	);

	return (
		<ThemeProvider theme={customTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}

export default ThemeProviderContainer;
