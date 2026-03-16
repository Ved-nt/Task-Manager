import { Link } from "react-router-dom";
import TaskList from "../components/TaskList";

const Tasks = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div>
          <p className="text-xs font-mono uppercase tracking-[0.14em] text-yellow-400 mb-1">
            ◈ Overview
          </p>
          <h1 className="text-5xl font-extrabold tracking-tight text-white">
            All Tasks
          </h1>
        </div>
        <Link
          to="/add-task"
          className="px-5 py-2.5 rounded-xl bg-yellow-400/10 text-yellow-400 border border-yellow-400/25 text-sm font-semibold hover:bg-yellow-400/20 hover:-translate-y-0.5 transition-all"
        >
          + Add Task
        </Link>
      </div>

      <TaskList />
    </div>
  );
};

export default Tasks;