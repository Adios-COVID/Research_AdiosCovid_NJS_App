import React from 'react';
import Image from 'next/image'
import styles from '@/styles/Data.module.css'
import dataimg1 from '../public/data_img_1.png'
import dataimg2 from '../public/data_img_2.png'

export default function DataPage() {
    return (
        <div class="container" id="data_page">
        <div class="row" id="data_row">
            <div class="media" id="data_media">
                <Image
                    src={dataimg1}
                    alt="Data page First image"
                    className="data_media_img mr-3"
                />

                <div class="media-body">
                    <h2> Cómo Colecionamos La Data </h2>
                    <p>
                        Nuestro equipo coleccionó dos tipos de datos: cualitativos y cuantitativos. Los datos cualitativos se coleccionaron por medio de encuestas y entrevistas centradas en los aspectos sociales que afectan a las personas con Long Covid. Estos datos se anonimizaron para proteger a la privacidad de los participantes, eliminando cualquier indicador identificativo. Los datos cuantitativos se coleccionaron por la técnica llamada web scraping y la agregación de datos demográficos de los condados de Grant, Douglas, Okanogan, Lincoln, Ferry, Stevens y Pend Oreille. Estos datos se obtuvieron principalmente del Censo de EE.UU., el Departamento de Salud del Estado de Washington, la Oficina de Estadísticas Laborales y el Centro de Investigación Pew. Para garantizar la precisión y la coherencia, limpiamos y normalizamos estos conjuntos de datos utilizando Jupyter Notebook.
                    </p>
                </div>
            </div>
        </div>
        <div class="row" id="data_row">
            <div class="media" id="data_media">
                <div class="media-body">
                    <h2> Data y Análisis </h2>
                    <p>
                        Basado en nuestra amplia investigación, hemos determinado que aproximadamente 90,000 Latinos pueden estar sufriendo del Long Covid, representando aproximadamente 9-10% de la población Latina. Personas con condiciones más severas de hospitalización tienen una mayor probabilidad de desarrollar el Long Covid. Los menores de 18 años tienen una menor probabilidad de desarrollar el Long Covid, en cambio, los mayores tienen la probabilidad más alta. Nuestra investigación también indica que las latinas tienen una probabilidad relativamente más alta de desarrollar el Long Covid. Incluso entre los individuos que no fueron hospitalizados, las mujeres tienen aproximadamente un 6% más de probabilidad de experimentar el Long Covid en comparación con los hombres.
                    </p>
                </div>
                <Image
                    src={dataimg2}
                    alt="Data page second image"
                    className="data_media_img mr-3"
                />
            </div>
        </div>
        <div class="row" id="section4">
            <div class="testbox">
                <form action="/">
                    <div class="banner">
                        <h1 id="form-title">Mándanos Su Data</h1>
                    </div>
                    <p>¡Comparte sus propias experiencias con el Long Covid para ayudarnos!</p>
                    <p>
                        Tenemos un formulario de Google que puede rellenar. ¡Su envío de datos nos ayudará mucho en nuestra investigación!
                    </p>
                    <hr/>
                    <fieldset>
                    <legend>Su Información</legend>
                    <div class="item">
                        <div class="name-item">
                        <div>
                        <input type="text" name="code" placeholder="ZIP Code" />
                        </div>
                        </div>
                    </div>
                    <div class="item">
                        <label for="description">¿Cuál es su experiencia con el Long Covid?<span>*</span></label>
                        <input id="description" type="text" name="text" required />
                    </div>
                    </fieldset>
                    <div class="btn-block">
                        <button id="submit_button" type="submit" href="/">ENVIAR</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
}