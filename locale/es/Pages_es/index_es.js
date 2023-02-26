import Image from 'next/image'
import { Inter } from '@next/font/google'
import homepic from "../public/homepage.jpg"
import persona from "../public/transparent_personas.png"
import location from "../public/Where.png"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div class="banner_main" id="home_banner">
        <div class="container">
            <div class="row">
              <div class="col-md">
                    <h1 class="home-heading">Efectos del Long Covid</h1>
                    <h3 class="home_sub_heading"> en las comunidades latinas del este de Washington </h3>
                    <p class="home_p"> 
                      Mientras que el Long Covid sigue afectando a los latinos del este de Washington, nosotros estamos aquí para seguir educando e inspirando cambios para las comunidades necesitadas.
                    </p>
              </div>
              <div class="col-md">
              <Image
                src={homepic}
                alt="Homepage Logo"
                className="home_img"
                priority
              />
              </div>
            </div>
            <div class="row">
              <div class="col-md">
              <Image
                src={persona}
                alt="Dibujo animado de una familia latina. La abuela está bordando. La hija lee. La madre ajusta la silla de la abuela. El hijo trae la compra."
                className="home_img"
                priority
              />
              </div>
              <div class="col-md">
                    <h3 class="home_sub_heading"> ¿Quiénes son nuestros participantes?</h3>
                    <p class="home_p"> 
                      El espíritu latino es poderoso, orgulloso, cálido y motivado. Aunque nuestros participantes se han enfrentado a muchas dificultades, poco se puede hacer para evitar que el espíritu latino persevere. Sin embargo, se les pueden hacer las cosas más sencillas. Durante nuestras entrevistas, oímos que nuestros participantes tienen dificultades para conseguir servicios médicos. En el caso de los que sufren con el Long Covid, muchas veces se ven obligados a volver a trabajar antes de tiempo para poder cuidar a sus familias. Esta realidad podría mejorarse, y con nuestra investigación esperamos inspirar una parte de ese cambio.
                    </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md">
                    <h3 class="home_sub_heading"> ¿De dónde son nuestros participantes? </h3>
                    <p class="home_p">
                        El este de Washington tiene algunos de los paisajes más bellos que existen en los Estados Unidos. La característica más notable de este paisaje son sin duda las montañas altas y los ríos anchos. Sin embargo, este bello entorno viene con unas dificultades para sus habitantes. Los fríos inviernos hacen que el trabajo en los huertos y campos sea difícil, y el centro médico más cercano puede estar a varios kilómetros de distancia. Nuestros participantes han demostrado ser personas optimistas a pesar de los retos a los que se enfrentan.
                    </p>
              </div>
              <div class="col-md">
              <Image
                src={location}
                alt="El estado de Washington dividido por condados, con puntos en los condados de Grant, Okanogan y Chelan. En el fondo hay imágenes de distintas ciudades de esos tres condados."
                className="home_img"
                priority
              />
              </div>
            </div>
        </div>
      </div>

    </>
  )
}
