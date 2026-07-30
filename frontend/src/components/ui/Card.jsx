import { motion } from "framer-motion";

function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        y: -5,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
      className={`
backdrop-blur-xl
bg-white/10
border
border-white/20
rounded-3xl
shadow-2xl
p-6
text-white
transition-all
duration-300
hover:scale-[1.02]
hover:shadow-pink-500/20
${className}
`}
    >
      {children}
    </motion.div>
  );
}

export default Card;