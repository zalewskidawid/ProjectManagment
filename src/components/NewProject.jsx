import Input from "./Input";
import { useRef } from "react";

export default function NewProject({onAdd}) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();

  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDate = dateRef.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={titleRef} label="Title"></Input>
        <Input ref={descriptionRef} label="Description" textarea></Input>
        <Input type="date" ref={dateRef} label="Due Date"></Input>
      </div>
    </div>
  );
}
