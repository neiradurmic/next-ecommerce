import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60vh',
    margin: '0 !important',
    fontFamily: 'Roboto',
    backgroundImage: 'url(images/beachSurf.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  colorText: {
    color: '#aa00ff',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '3.5rem',
  },
}));
export default function Hero() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={50}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Surf & Beach Clothes <br />
            Made to <span className={classes.colorText}>Have Fun</span>
          </h1>
        </div>
      </Collapse>
    </div>
  );
}
