// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
// import Productos from '@/pages/productos'
// import Orders from '@/pages/orders'
import SideNavigation from "../pages/body/index";
import Container from "../pages/container/index";

export default function Home() {
  return (
    <div className="container">
      <Container />
      <SideNavigation />
    </div>
  );
}
