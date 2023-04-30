import React from 'react'
import { motion } from 'framer-motion'

export default function Carousel({ recipe }: any): JSX.Element {
  return (
    <motion.div whileTap={{ cursor: 'grabbing' }}>
      <img src={ recipe.strMealThumb } />
      <p>{ recipe.strMeal }</p>
    </motion.div>
  )
}
