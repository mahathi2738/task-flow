import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaGripVertical } from "react-icons/fa";

function SortableTask({ task, children }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: String(task.id),
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative"
    >
      {/* Render the task card */}
      {children}

      {/* Drag Handle */}
      <div
        {...attributes}
        {...listeners}
        className="absolute top-4 right-4 cursor-grab active:cursor-grabbing text-gray-500 hover:text-blue-500"
      >
        <FaGripVertical />
      </div>
    </div>
  );
}

export default SortableTask;