import { motion } from 'framer-motion'

const SwipingFromLeftAnimation = ({children, delay = 0, duration = 0.6}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }} 
      animate={{ opacity: 1, x: 0 }}   
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  )
}

export default SwipingFromLeftAnimation