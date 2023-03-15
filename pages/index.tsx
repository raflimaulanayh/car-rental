import Header from './section/Header'
import PopulerCar from './section/PopulerCar'
import Recomendation from './section/Recomendation'
import Footer from './section/Footer'
import Layout from './../components/layout/index';
export default function Home() {
  return (
    <>
      <Layout pageTitle='Home Morent'>
        <div className="bg-[#F6F7F9]">
          <Header />
          <PopulerCar />
          <Recomendation />
          <Footer />
        </div>
      </Layout>
    </>
  )
}
