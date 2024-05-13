import Main from "../components/3-main/Main";
import Hero from "../components/2-hero/Hero";
import BrandSec from "../components/5-BrandSec/BrandSec";
import Container from '@mui/material/Container'
import { Box } from "@mui/material";
const Home = () => {


  return (
    <>
         <Hero/>

     <Box sx={{bgcolor:"rgba(255, 228, 196, 0.15)"}}>
          <Container  maxWidth="lg">
          <BrandSec/>
          </Container>
     </Box>
    

        <Main/>
      
    </>
  )
}

export default Home
