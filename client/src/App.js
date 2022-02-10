import './App.css';
import { Container } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Media from './Video';
import Form from './CommentForm.js';
import Card from './Grid';
// import Test from './Test';


function App() {
  return (
    <>
       <Typography component="p"  className='header'>
            Musical Training
        </Typography>
    <Container className="App" >
      <Media />
      <Form/>
      <Card/>
     </Container>
      {/* <Test/> */}
     </>
  );
}

export default App;
