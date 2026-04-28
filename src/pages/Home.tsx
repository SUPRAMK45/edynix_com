import {motion} from 'motion/react';
import { FadingVideo } from '../components/FadingVideo';
import { BlurText } from '../components/BlurText';

export const Home = () => {
    return (
        <div className="bg-black text-white min-h-screen">
          <section className="relative h-screen w-full overflow-hidden">
            <motion.div 
                animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0"
            >
                <FadingVideo 
                  src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
                  className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top"
                  style={{ width: "120%", height: "120%" }}
                />
            </motion.div>
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 pt-24 text-center">
              <motion.div initial={{filter: 'blur(10px)', opacity: 0, y: 20}} animate={{filter: 'blur(0px)', opacity: 1, y: 0}} transition={{delay: 0.4, duration: 0.8}} className="liquid-glass rounded-full flex items-center gap-3 pr-3 text-sm">
                 <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold">New</span>
                 <span>Next-Gen AI Receptionists Now Live</span>
              </motion.div>
              
              <BlurText text="Elevating Digital Intelligence Past Known Horizons" className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] max-w-2xl mt-6 tracking-[-4px]" />
              
              <motion.p initial={{filter: 'blur(10px)', opacity: 0, y: 20}} animate={{filter: 'blur(0px)', opacity: 1, y: 0}} transition={{delay: 0.8, duration: 0.8}} className='mt-4 text-sm md:text-base text-white/90 max-w-2xl font-body font-light'>Edynix delivers elite AI and engineering solutions to accelerate growth for forward-thinking enterprises.</motion.p>
              
              <motion.div initial={{filter: 'blur(10px)', opacity: 0, y: 20}} animate={{filter: 'blur(0px)', opacity: 1, y: 0}} transition={{delay: 1.1, duration: 0.8}} className='flex gap-6 mt-6'>
                <button className='liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white flex items-center gap-2'>Discover Services ↗</button>
                <button className='flex items-center gap-2'>Watch AI Demo ▶</button>
              </motion.div>
    
              <motion.div initial={{filter: 'blur(10px)', opacity: 0, y: 20}} animate={{filter: 'blur(0px)', opacity: 1, y: 0}} transition={{delay: 1.3, duration: 0.8}} className='flex gap-4 mt-8'>
                 {[ {label: 'Projects Delivered', val: '10+', icon: '🚀'}, {label: 'AI Agents Integrated', val: '5+', icon: '🤖'} ].map((stat, i) => (
                     <div key={i} className='liquid-glass p-5 w-[220px] rounded-[1.25rem]'>
                         <div className='text-xl'>{stat.icon}</div>
                         <div className='font-heading italic text-4xl leading-none mt-2'>{stat.val}</div>
                         <div className='text-xs text-white/80 font-body font-light mt-2'>{stat.label}</div>
                     </div>
                 ))}
              </motion.div>
            </div>
          </section>
          
          <section className="min-h-screen py-24 flex items-center justify-center px-8 text-center">
              <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl"
              >
                  <motion.h2 
                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                    whileInView={{ opacity: 1, filter: 'blur(0px)' }}
                    transition={{ delay: 0.2, duration: 1 }}
                    className="font-heading italic text-white text-5xl md:text-7xl tracking-[-2px]"
                  >
                      Intelligence that scales<br/>with your vision.
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-8 text-xl text-white/70 font-body font-light"
                  >
                      From initial ideation to full-scale digital deployment, we ensure every step is optimized for impact.
                  </motion.p>
              </motion.div>
          </section>
        </div>
    )
}
