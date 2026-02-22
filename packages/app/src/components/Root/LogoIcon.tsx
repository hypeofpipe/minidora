import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 28,
  },
  path: {
    fill: '#7df3e1',
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    <svg
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <g className={classes.path}>
        <path d="M 100 70 A 60 60 0 1 0 100 190 A 60 60 0 1 0 100 70 Z M 100 95 A 35 35 0 1 1 100 165 A 35 35 0 1 1 100 95 Z" />
        <circle cx="100" cy="58" r="6" />
        <circle cx="75" cy="62" r="6" />
        <circle cx="125" cy="62" r="6" />
        <polygon points="96,46 104,46 100,10" />
        <polygon points="71,50 79,50 55,18" />
        <polygon points="121,50 129,50 145,18" />
      </g>
    </svg>
  );
};

export default LogoIcon;
