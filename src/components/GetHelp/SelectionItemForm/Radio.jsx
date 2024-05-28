import { useContext, createContext } from "react"

const RadioContext = createContext()

export default function Radio({ children, ...props }) {
  const { value, onChange } = useContext(RadioContext)

  return (
    <label
      className={`
        px-6 py-4 shadow rounded-2xl cursor-pointer text-second font-semibold
        transition-all ${
          value === props.value
            ? " scale-105"
            : "bg-second bg-opacity-25 hover:shadow-md shadow-gray-300"
        }
    `}
    >
      <input
        type="radio"
        className="hidden"
        checked={value === props.value}
        onChange={onChange}
        {...props}
      />
      {children}
    </label>
  )
}

export function RadioGroup({ value, onChange, children }) {
  return (
    <RadioContext.Provider value={{ value, onChange }}>
      {children}
    </RadioContext.Provider>
  )
}