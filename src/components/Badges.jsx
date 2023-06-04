const Badges = ({ keys }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {keys.map((key, i) => (
        <div
          key={i}
          className="z-20 mt-1 rounded-full bg-light-300/60 px-2 text-xs text-light-50 dark:bg-dark-300/60 dark:text-light-200"
        >
          {key}
        </div>
      ))}
    </div>
  )
}

export default Badges
