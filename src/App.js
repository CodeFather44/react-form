import './App.css';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <Card sx={{
        maxWidth:300,
        padding:2,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        }}>
      <CardContent sx={{
        display:'flex',
        flexDirection:'column',
        
      }}>
      <Typography variant="h1" sx={{
        fontSize: '20px',
        
        }}>
        React json placeholder
      </Typography>
      <TextField
          id="outlined-multiline-flexible"
          label="title"
          multiline
          maxRows={4}
          sx={{
            marginTop:2,
          }}
        />
        <TextField
          id="outlined-multiline-static"
          label="body"
          multiline
          rows={4}
          defaultValue=""
          sx={{
            marginTop:2,
          }}
        />
        <Button variant="contained"  sx={{
            marginTop:2,
          }}>submit</Button>
        </CardContent>
        </Card>
    </div>
  );
}

export default App;
