import { useState } from 'react'
import Wrapper from '../components/UI/Wrapper'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { Form } from 'react-router-dom'
import { Navigate, redirect } from 'react-router-dom'

const Home = () => {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.target.value)
    console.log(redirect)
    return redirect('/grid')
  }

  return (
    <Wrapper>
      <FormControl
        sx={{
          width: '50%',
          marginTop: 20,
          marginLeft: 50,
        }}
      >
        <InputLabel id="form-input">Age</InputLabel>
        <Select
          labelId="form-input"
          id="form-input"
          value={userInput}
          label="input"
          onChange={handleChange}
        >
          <MenuItem value="car-data">Car Data</MenuItem>
          <MenuItem value="phone-data">Phone Data</MenuItem>
          <MenuItem value="bike-data">Bike Data</MenuItem>
        </Select>
      </FormControl>
      {userInput.length !== 0 && <Navigate to="/grid" replace={true} />}
    </Wrapper>
  )
}

export default Home
