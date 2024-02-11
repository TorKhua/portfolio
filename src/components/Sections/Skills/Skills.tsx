import React from 'react'
import Section from '../Section'
import Tag from '@/components/Tag'

function Skills() {
  return (
    <Section title='Habilidades' >
      <div className='flex flex-wrap gap-4 mb-4'>
        <Tag text='Ilustrator' className="dark:bg-orange bg-orange text-xl"/>
        <Tag text='Photoshop' className="dark:bg-blue bg-blue text-xl"/>
        
      </div>
      <div className='flex flex-wrap  gap-4'>
      <Tag text='FireBird' className="dark:bg-l_orange bg-d_orange"/>
        <Tag text='TypeScript' className="dark:bg-l_blue bg-d_blue"/>
        <Tag text='Delphi' className="dark:bg-l_red bg-d_red"/>
        <Tag text='IBExpert' className="dark:bg-l_green bg-d_green"/>
        <Tag text='FireBird' className="dark:bg-l_purple bg-d_purple"/>
        <Tag text='FireBird' className="dark:bg-l_aqua bg-d_aqua"/>
     
        <Tag text='FireBird' className="dark:bg-l_orange bg-d_orange"/>
        <Tag text='TypeScript' className="dark:bg-l_blue bg-d_blue"/>
        <Tag text='Delphi' className="dark:bg-l_red bg-d_red"/>
        <Tag text='IBExpert' className="dark:bg-l_green bg-d_green"/>
        <Tag text='FireBird' className="dark:bg-l_purple bg-d_purple"/>
        <Tag text='FireBird' className="dark:bg-l_aqua bg-d_aqua"/>
      </div>
    </Section>
  )
}

export default Skills