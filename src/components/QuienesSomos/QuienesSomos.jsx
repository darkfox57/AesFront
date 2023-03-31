import React from 'react'
import Button from '../../utils/Button'
import { GridQuienes, QuienesInfo, QuieneSomos } from './QuienesSomos.Styled'

const QuienesSomos = () => {
  return (
    <QuieneSomos>
      <GridQuienes>
        <div>
          <img
            src="https://revistarecursoshumanos.com/wp-content/uploads/2016/08/atención-cliente_2015.jpg"
            alt=""
          />
        </div>
        <QuienesInfo>
          <p>Nuestro trabajo</p>
          <h2>
            ¿Quiénes somos <br /><h2>y qué hacemos?</h2>
          </h2>
          <p>
            Patrocinios Somos una organización sin fines de lucro creada por
            jóvenes multidisciplinarios, quienes en trabajo conjunto con
            profesionales de la salud buscan formar una sólida cultura sanitaria
            en los adolescentes del Perú a través de talleres dinámicos.
          </p>
          <div>
          <Button  type="primary"  text="Contáctenos" size="lg" />
          </div>
        </QuienesInfo>
      </GridQuienes>
    </QuieneSomos>
  )
}

export default QuienesSomos
