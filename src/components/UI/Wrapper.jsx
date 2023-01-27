import { Box } from '@mui/material'
// import { width } from '@mui/system';

function Wrapper({ children }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </Box>
  )
}
export default Wrapper
