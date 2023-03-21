import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Productos from '@/pages/productos'
import Orders from '@/pages/orders'
import { NavigationDrawer } from '@/components/Navigation'
import LoginPage from './api/account/CreateAccount'

export default function Home() {
  return (
    <div>
      <NavigationDrawer/>
      {/* <LoginPage/> */}
    </div>
  )
}
