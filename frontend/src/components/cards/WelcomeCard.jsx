import { motion } from "framer-motion";

function WelcomeCard() {
  const hour = new Date().getHours();

  let greeting = "Good Evening 🌙";

  if (hour < 12) {
    greeting = "Good Morning 🌅";
  } else if (hour < 17) {
    greeting = "Good Afternoon ☀️";
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-3xl shadow-xl p-8"
    >
      <h1 className="text-3xl font-bold">
        {greeting}, Mahathi 👋
      </h1>

      <p className="mt-3 text-lg opacity-90">
        Stay focused and complete your goals today.
      </p>

      <div className="mt-6 flex gap-6">

        <div>
          <h2 className="text-2xl font-bold">
            🚀
          </h2>

          <p>Keep Learning</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            💻
          </h2>

          <p>Keep Coding</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            🎯
          </h2>

          <p>Achieve Goals</p>
        </div>

      </div>

    </motion.div>
  );
}

export default WelcomeCard;