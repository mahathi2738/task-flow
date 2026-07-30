import Card from "../ui/Card";
import { quotes } from "../../data/quotes";
import { tips } from "../../data/tips";

const quote =
  quotes[Math.floor(Math.random() * quotes.length)];
const randomTip =
  tips[Math.floor(Math.random() * tips.length)];


function ProgressCard({
  totalTasks,
  completedTasks,
}) {
  const progress =
  totalTasks === 0
    ? 0
    : Math.round(
        (completedTasks / totalTasks) * 100
      );

  return (
    <Card className="bg-white dark:bg-gray-800 transition-all duration-300">

      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
        📈 Daily Progress
      </h2>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-5 overflow-hidden">
        <div
          className="bg-gradient-to-r from-pink-500 to-purple-500 h-5 rounded-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-between mt-4">
        <p className="text-gray-600 dark:text-gray-300">
          Progress
        </p>

        <p className="font-bold text-pink-600 dark:text-pink-400">
          {progress}%
        </p>
      </div>

      <p className="mt-4 text-green-600 dark:text-green-400 font-semibold">
  {completedTasks} of {totalTasks} tasks completed
</p>
      <div className="mt-6 border-t pt-4">
  <h3 className="font-semibold text-pink-500">
    💡 Quote of the Day
  </h3>

  <p className="italic mt-2 text-sm">
    "{quote.text}"
  </p>

  <p className="text-right mt-2 text-xs text-gray-400">
    — {quote.author}
  </p>
</div>

<div className="mt-6 border-t pt-4">
  <h3 className="font-semibold text-blue-500">
    💪 Productivity Tip
  </h3>


<p className="mt-2">
  {randomTip.icon} {randomTip.text}
</p>
</div>

<div className="mt-6 border-t pt-4">
  <h3 className="font-semibold text-green-500">
    🔥 Today's Challenge
  </h3>

  <p className="mt-2">
  Complete {Math.max(totalTasks - completedTasks, 0)} more task(s) today!
</p>
</div>

    </Card>
  );
}

export default ProgressCard;