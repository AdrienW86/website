import Nav from './components/Nav'
import Intro from './components/Intro'
import Card from './Card'
import Footer from './components/Footer'
import { data } from './data'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
        <section>
        <Intro />
        </section>
   
      <div className={styles.grid}>
       {data.map((el, index) => {
        return <Card 
                id = {index}
                title = {el.title} 
                color = {el.color}
                font = {el.font}
                url = {el.url}
                description = {el.description}
                image = {el.image}
              />
       })}      
      </div>
      <Footer />
    </main>
  )
}
