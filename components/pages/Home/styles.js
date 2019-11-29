export default {
  global: {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    html: {
      background: 'rgb(235, 235, 235)',
    },
  },
  root: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    padding: 40,
    '@media (max-width: 400px)': {
      padding: 20,
    },
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 800,
  },
  card: {
    width: '25%',
    padding: 5,
  },
  cardInner: {
    border: '1px solid rgb(200, 200, 200)',
    borderRadius: 4,
    padding: 20,
    background: 'rgb(250, 250, 250)',
    position: 'relative',
    '&:hover': {
      background: 'white',
    },
  },
  contents: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  sample: {
    height: 30,
    width: 30,
    border: '1px solid rgb(200, 200, 200)',
  },
  label: {
    fontSize: 12,
    marginTop: 15,
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
  back: {
    fontSize: 20,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOver: {
    fontSize: 20,
  },
};
