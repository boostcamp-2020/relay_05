import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';

import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import ChatIcon from '@material-ui/icons/Chat';
import AddIcon from '@material-ui/icons/Add';
import PeopleIcon from '@material-ui/icons/People';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 220,
    width: '100vw',
    height: '99vh',
    backgroundColor: 'gray',
    color: 'white',
    position: 'block',
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  nestedListSubheader: {
    color: '#e9e9e9',
    fontSize: '18px',
    fontWeight: 'bold',
  }
}));

export default function MainMenu() {
  const classes = useStyles();
  const [openChannel, setOpenChannel] = React.useState(false);
  const [openMessage, setOpenMessage] = React.useState(false);

  const handleClickChannel = () => {
    setOpenChannel(!openChannel);
  };

  const handleClickMessage = () => {
    setOpenMessage(!openMessage);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader"
          className={classes.nestedListSubheader}>
          다모여
        </ListSubheader>
      }
      className={classes.root}
    >
      <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>

      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="My Page" />
      </ListItem>

      <ListItem button onClick={handleClickChannel}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="My Channel" />
        {openChannel ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={openChannel} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="부캠고등학교" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary="채널 검색" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClickMessage}>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Message" />
        {openMessage ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openMessage} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="김부캠" />
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="박부캠" />
          </ListItem>

          <Link to='/chat/new' style={{ textDecoration: 'none', color: 'white' }}>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              <ListItemText primary="채팅시작" />
            </ListItem>
          </Link>
        </List>
      </Collapse>

    </List>
  );
}
