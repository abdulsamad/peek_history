import React, { useEffect, useState } from 'react';
import { makeStyles, MenuItem, FormControl, Select, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '1.5rem 0',
	},
	formControl: {
		width: '100%',
		padding: '1rem auto',
	},
	select: {
		width: '100%',

		'& > .MuiSelect-root': {
			padding: 12,
		},
	},
}));

function Sort() {
	const [value, setValue] = useState('last-visit');
	const classes = useStyles();

	useEffect(() => {
		chrome.storage.sync.get(['sort'], (syncSort) => {
			if (!syncSort.sort) return;
			setValue(syncSort.sort);
		});
	}, []);

	const onChange = (ev) => {
		setValue(ev.target.value);
		chrome.storage.sync.set({ sort: ev.target.value });
	};

	return (
		<Grid container alignItems='center' className={classes.root}>
			<Grid item md={6}>
				<Typography align='center' variant='subtitle2'>
					Sort By
				</Typography>
			</Grid>
			<Grid item md={4}>
				<FormControl variant='filled' className={classes.formControl}>
					<Select
						labelId='sort-by'
						id='sort-by-select-filled'
						value={value}
						className={classes.select}
						onChange={onChange}>
						<MenuItem value='last-visit'>By Last Visit</MenuItem>
						<MenuItem value='most-visit'>By Most Visit</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item md={2}></Grid>
		</Grid>
	);
}

export default Sort;