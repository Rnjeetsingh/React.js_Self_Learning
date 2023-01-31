import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';




function App() {
const [form, setForm] = useState({});
const [data, setData] = useState([]);

const addData = () => {
  setData([...data,form])
  setForm(form); 
}


const removeItem = (index ) => {
   let arr = data
   arr.splice(index, 1)
   setData([...arr])
}

  return (
    <div className="App">
      <Header />

      
      <div className='form'>
      <Stack  direction="row" spacing={2}>
      <TextField value={form.name} onChange={(event) => setForm({...form, name: event.target.value})} id="outlined-basic" label="Name" variant="outlined" />
      <TextField value={form.email} onChange={(event) => setForm({...form, email: event.target.value})} id="outlined-basic" label="Email" variant="outlined" />
      <Button onClick={addData} variant="contained" color='success'>ADD</Button>
      </Stack> 
      </div>

      <div className='data'>
        <div className='data_val'>
        <h4>Name</h4>
        <h4>Email</h4>
        <h4>Remove</h4>
        </div> 
         {
          data.map((el,index) => {
            return(
              <div key={index} className='data_val'>
              <h4>{el.name}</h4>
              <h4>{el.email}</h4>
              <Stack>
              <Button onClick={() => removeItem(index)} variant="contained" color="error">
              <DeleteIcon />
              </Button>
             </Stack>
              </div>
            )
          })
         }
      </div>
    </div>
  );
}

export default App;
