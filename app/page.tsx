import Image from 'next/image'
import styles from './page.module.css'
import LandingPage from './landingPage'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Box>
        <LandingPage />
      </Box>
    </>
  );
}
