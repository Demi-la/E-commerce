import Image from 'next/image'
import styles from './page.module.css'
import Pages from "@/components/pages";
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <>
      <Box>
        <Pages />
      </Box>
    </>
  );
}
