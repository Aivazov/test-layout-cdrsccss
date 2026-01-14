import { motion } from 'framer-motion'

const AppearingAnimation = ({children, delay = 0, duration = .6}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }} 
      animate={{ opacity: 1, y: 0 }}   
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  )
}

export default AppearingAnimation