import styles from './page.module.css'
import Slider from '@/components/slider/Slider'
import data from '@/utils/mockData'

export default function Home() {
  return (
    <main className={styles.main}>
      <Slider data={data}/>
    </main>
  )
}
