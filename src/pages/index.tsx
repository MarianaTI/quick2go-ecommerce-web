import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'semantic-ui-react'
import styles from '@/styles/Home.module.css'
import Productos from '@/pages/productos'

export default function Home() {
  return (
    <div>
      <Productos/>
    </div>
  )
}
