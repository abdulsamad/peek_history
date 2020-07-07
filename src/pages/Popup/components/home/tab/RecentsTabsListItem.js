import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  list: {
    width: '100%',
    padding: 0,
  },
  listItemIcon: {
    height: 32,
    minWidth: 32,
  },
  favicon: {
    borderRadius: 0,
    backgroundColor: 'transparent',
    width: 16,
    height: 16,
  },
  textContainer: {
    whiteSpace: 'nowrap',

    '& span': {
      width: 'calc(100% - 25px)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
    '& p': {
      width: 'calc(100% - 20px)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
  anchor: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  windowAccordion: {
    display: 'flex',
    alignItems: 'center',

    '& button': {
      marginLeft: 10,
    },
  },
}));

function RecentsTabsListItem(props) {
  const classes = useStyles();

  if (props.tab) {
    const { title, url, sessionId } = props.tab;

    return (
      <>
        <ListItem className={classes.root}>
          <Link
            href="#"
            color="inherit"
            block="true"
            onClick={() => chrome.sessions.restore(sessionId)}
            className={classes.anchor}
            underline="none"
          >
            <ListItemIcon className={classes.listItemIcon}>
              <Avatar
                src={`chrome://favicon/${url}`}
                alt={`${url} Favicon`}
                className={classes.favicon}
              />
            </ListItemIcon>
            <ListItemText
              className={classes.textContainer}
              primary={
                title ? (
                  title
                ) : (
                  <Typography variant="body1" color="error" display="block">
                    (Title Not Available)
                  </Typography>
                )
              }
              secondary={url}
            />
          </Link>
        </ListItem>
        <Divider />
      </>
    );
  }

  const { tabs, sessionId } = props.window;

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className={classes.windowAccordion}>
            <Typography className={classes.heading}>
              Window ({tabs.length}
              {tabs.length > 1 ? 'Tabs' : 'Tab'})
            </Typography>

            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={() => chrome.sessions.restore(sessionId)}
            >
              Restore
            </Button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <List
            component="div"
            aria-label="Recently Closed Window"
            className={classes.list}
            key={tabs.url}
          >
            {tabs.map((tab) => (
              <Fragment key={tab.url}>
                <ListItem className={classes.root}>
                  <Link
                    href="#"
                    color="inherit"
                    block="true"
                    className={classes.anchor}
                    underline="none"
                    onClick={() => chrome.sessions.restore(tab.sessionId)}
                  >
                    <ListItemIcon className={classes.listItemIcon}>
                      <Avatar
                        src={`chrome://favicon/${tab.url}`}
                        alt={`${tab.url} Favicon`}
                        className={classes.favicon}
                      />
                    </ListItemIcon>
                    <ListItemText
                      className={classes.textContainer}
                      primary={
                        tab.title ? (
                          tab.title
                        ) : (
                          <Typography
                            variant="body1"
                            color="error"
                            display="block"
                          >
                            (Title Not Available)
                          </Typography>
                        )
                      }
                      secondary={tab.url}
                    />
                  </Link>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </List>
        </AccordionDetails>
      </Accordion>
      <Divider />
    </>
  );
}

export default RecentsTabsListItem;