import './global.css'

import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import { Header } from '../components/header'

export default function HomeLayout() {
  return (
    <>
      <StatusBar />
      <Header />
      <Slot />
    </>
  )
}
