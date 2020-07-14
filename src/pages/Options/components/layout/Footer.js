import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Link } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	center: {
		textAlign: 'center',
	},
}));

function Footer({ title }) {
	const classes = useStyle();

	return (
		<footer className={classes.center}>
			<Typography variant='subtitle1'>
				Please leave a positive rating on the{' '}
				<Link underline='none' href='https://chrome.google.com/webstore'>
					Chrome Web Store,
				</Link>{' '}
				If you like this extension and leave a feedback.
			</Typography>
			<Typography variant='body1'>&copy;{title}</Typography>
		</footer>
	);
}

Footer.propType = {
	title: PropTypes.string.isRequired,
};

export default Footer;