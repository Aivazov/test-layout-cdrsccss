import { motion } from 'framer-motion'

const ServicesSectionAnimation = ({children, delay = 0}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {children}
    </motion.div>
  )
}

export default ServicesSectionAnimation