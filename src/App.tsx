import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { Services } from './components/Services/Services'
import { Pricing } from './components/Pricing/Pricing'
import { Gallery } from './components/Gallery/Gallery'
import { MapSection } from './components/MapSection/MapSection'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Gallery />
      <MapSection />
      <Contact />
      <Footer />
    </>
  )
}

export default App