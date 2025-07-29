import React from 'react'
import Personaje from "../../assets/Personaje.png"
import Logo from "../../assets/Logo.png"
import {motion} from "framer-motion"
import { slideUp, slipeInFromSide } from '../../utility/animation'

const Hero = () => {
  return (
    <section className='mt-36'>
      <div className='grid grid-cols-1 md:grid-cols-2'>

        <div className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'> 
          <motion.img 
          src={Logo} 
          alt="Logo" 
          variants={slideUp(0.2)}
          initial="initial"
          animate="animate"
          />

          <motion.p 
          className='py-12 px-8 text-white text-justify leading'
          variants={slideUp(0.3)}
          initial="initial"
          animate="animate"
          >
            Magic Quest: Tu Aventura Épica Comienza Aquí
            Embárcate en un mundo de fantasía donde la magia fluye en tus venas y cada decisión marca tu destino. Magic Quest te invita a explorar reinos olvidados, dominar poderes ancestrales y enfrentarte a criaturas legendarias.
            ¿Serás el héroe que restaure la paz... o el arquimago que desate el caos? El camino es tuyo, y la aventura, inolvidable.
            ¡Prepárate! La leyenda está por escribirse.
            </motion.p>

        <motion.div 
        className='flex justify-center gap-4'
        variants={slideUp(1)}
          initial="initial"
          animate="animate"
        >

          <a className='bg-purple-600 py-2 px-12  rounded-3xl text-white hover:text-black transition-all 
          duration-300 items-center cursor-pointer' href="">Jugar ahora 
            <i className="bi bi-controller text-xl ml-2"></i>
            </a>
          <a className='text-white flex items-center cursor-pointer' href="">Ver GamePlay 
            <i className="bi bi-play-circle-fill text-xl ml-2"></i>
            </a>
        </motion.div>

        </div>


        <motion.div 
        className='p-10 sm:p-10 md:p-15 lg:p-30 xl:p-36'
         variants={slipeInFromSide("rigth", 0.5)}
          initial="initial"
          animate="animate"
        >
          <img src={Personaje} alt="Personaje"/>
        </motion.div>

      </div>


    </section>
  )
}

export default Hero