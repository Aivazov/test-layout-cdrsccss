import { motion } from 'framer-motion'

const SwipingAnimation = ({children, delay = 0.3, duration = 0.6}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }}   
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  )
}

export default SwipingAnimation