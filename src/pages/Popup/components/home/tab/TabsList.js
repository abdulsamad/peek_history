import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core/';
import RecentsTabsListItem from './RecentsTabsListItem';
import RecentsWindowsListItem from './RecentsWindowsListItem';
import OtherTabsListItem from './OtherTabsListItem';
import OtherWindowsListItem from './OtherWindowsListItem';

import { usePopupState } from '../../../context/popupContext';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 60,
    bottom: 60,
    width: '100%',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    overflowX: 'hidden',
    overflowY: 'scroll',
  },
  list: {
    width: '100%',
    padding: 0,
  },
}));

function TabsList() {
  const { recentTabs, otherTabs } = usePopupState();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          className='accordion'
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'>
          <Typography className={classes.heading}>Recently Closed Tabs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List component='div' aria-label='Recently Closed Tabs' className={classes.list}>
            {recentTabs.length <= 0 ? (
              <ListItem divider={true}>
                <ListItemText primary={'No records found.'} />
              </ListItem>
            ) : (
              recentTabs.map((recentItem, index) =>
                recentItem.tab ? (
                  <RecentsTabsListItem {...recentItem.tab} key={recentItem.lastModified * index} />
                ) : (
                  <RecentsWindowsListItem
                    {...recentItem.window}
                    key={recentItem.window.sessionId * index}
                  />
                ),
              )
            )}
          </List>
        </AccordionDetails>
      </Accordion>

      {otherTabs.map((device) => (
        <Accordion key={device.deviceName}>
          <AccordionSummary
            className='accordion'
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'>
            <Typography className={classes.heading}>{device.deviceName}</Typography>
          </AccordionSummary>
          <AccordionDetails className={classes.accordionDetails}>
            <List component='div' aria-label='Recently Closed Tabs' className={classes.list}>
              {device.sessions.map((dev) =>
                device.sessions.length <= 0 ? (
                  <ListItem divider={true}>
                    <ListItemText primary={'No records found.'} />
                  </ListItem>
                ) : dev.window.tabs.length === 1 ? (
                  <OtherTabsListItem {...dev.window} key={dev.window.sessionId} />
                ) : (
                  <OtherWindowsListItem {...dev.window} key={dev.window.sessionId} />
                ),
              )}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default TabsList;
