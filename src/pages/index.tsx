import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Productos from '@/pages/productos'
import Orders from '@/pages/orders'

export default function Home() {
  return (
    <div>
      <Productos/>
    </div>
  )
}
