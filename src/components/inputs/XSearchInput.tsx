import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import {Box} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

interface IProps {
    onFilterToggle:()=>any
}

export default function XSearchInput({onFilterToggle}:IProps) {
    const classes = useStyles();

    return (
        <Box component="form">
            <Paper className={classes.root}>
                <InputBase
                    className={classes.input}
                    placeholder="Search here"
                    inputProps={{'aria-label': 'Search here'}}
                />
                <IconButton type="submit" className={classes.iconButton} aria-label="search" size='small' >
                    <SearchIcon/>
                </IconButton>
                <Divider className={classes.divider} orientation="vertical"/>
                <IconButton color="primary" size='small' className={classes.iconButton} aria-label="advanced-filter" onClick={onFilterToggle}>
                    <FilterListIcon/>
                </IconButton>
            </Paper>
        </Box>

    );
}