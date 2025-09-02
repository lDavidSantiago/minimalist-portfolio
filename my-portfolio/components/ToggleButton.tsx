import { useState } from "react";

export default function ToggleButton() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <label className="group relative flex h-15 w-60 cursor-pointer select-none rounded-full bg-gray-200">
        <input
          type="checkbox"
          className="peer hidden"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <div
          className={`absolute left-0 h-full w-30 rounded-full bg-blue-500 transition-all shadow-md group-hover:shadow-xl ${
            checked ? "translate-x-full" : ""
          }`}
        ></div>
        <span
          className={`relative flex h-full w-30 items-center justify-center font-bold transition ${
            checked ? "text-black" : "text-white"
          }`}
        >
          Buying
        </span>
        <span
          className={`relative flex h-full w-30 items-center justify-center font-bold transition ${
            checked ? "text-white" : "text-black"
          }`}
        >
          Selling
        </span>
      </label>
    </div>
  );
}
