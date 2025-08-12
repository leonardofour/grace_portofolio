import { section } from 'motion/react-client'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about">
        <BentoGrid>
            { gridItems.map
            ((items) => (
                <BentoGridItem
                id={items.id}
                key={items.id}
                title={items.title}
                description={items.description} 
                className={items.className}
                // img={img}
                // imgClassName={imgClassName}
                // spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid