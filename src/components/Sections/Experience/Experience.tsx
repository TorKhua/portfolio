import React from 'react'
import Section from '../Section'
import Timeline from '@/components/Timeline/Timeline'

function Experience() {
  return (
    <Section title='Experiencia'>
      <Timeline cargo='jefe' empresa='tecnotac' tiempo='2012-2013' funciones={[{descripcion : 'hola'},{descripcion : 'hola'}]}>
      </Timeline> 
    </Section>
  )
}

export default Experience