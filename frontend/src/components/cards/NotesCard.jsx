import { useState, useEffect } from "react";
import Card from "../ui/Card";
import toast from "react-hot-toast";

function NotesCard() {
 const [note, setNote] = useState("");
const [savedNotes, setSavedNotes] = useState([]);
  const maxCharacters = 500;

  // Load saved note when component starts
  useEffect(() => {
  const notes = JSON.parse(localStorage.getItem("quickNotes")) || [];
  setSavedNotes(notes);
}, []);

  // Save note
  function saveNote() {
  if (!note.trim()) return;

  const updatedNotes = [...savedNotes, note];

  setSavedNotes(updatedNotes);

  localStorage.setItem(
    "quickNotes",
    JSON.stringify(updatedNotes)
  );

  setNote("");

  toast.success("Note Saved Successfully 📝");
}
  return (
    <Card className="bg-white dark:bg-gray-800 transition-all duration-300">

      <h2 className="text-2xl font-bold mb-5 text-gray-800 dark:text-white">
        📝 Quick Notes
      </h2>

      <textarea
  rows="6"
  placeholder="Write your notes..."
  value={note}
  maxLength={maxCharacters}
  onChange={(e) => setNote(e.target.value)}
  className="w-full border border-gray-300 dark:border-gray-600 rounded-xl p-4 md:p-6 lg:p-8 resize-none outline-none bg-white dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400"
/> 
    <div className="flex justify-between mt-2 text-sm text-gray-500 dark:text-gray-400">
  <span>Maximum 500 characters</span>

  <span>
    {note.length}/{maxCharacters}
  </span>
</div>
<button
  disabled={!note.trim()}
        onClick={saveNote}
        className={`mt-5 w-full py-3 rounded-xl font-semibold transition-all duration-300 ${
  note.trim()
    ? "bg-pink-500 hover:bg-pink-600 text-white hover:scale-105"
    : "bg-gray-400 text-gray-200 cursor-not-allowed"
}`}
      >
        💾 Save Note
      </button>
      {savedNotes.length > 0 && (
  <div className="mt-8">

    <h3 className="text-xl font-bold mb-4 dark:text-white">
      📒 Saved Notes
    </h3>

    <div className="space-y-3">

      {savedNotes.map((item, index) => (
        <div
          key={index}
          className="bg-yellow-100 dark:bg-gray-700 rounded-xl p-4 shadow"
        >
          {item}
        </div>
      ))}

    </div>

  </div>
)}

    </Card>
  );
}

export default NotesCard;