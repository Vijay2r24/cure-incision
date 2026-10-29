import { useEffect, useState } from "react"

export default function Typewriter({
  text = "",
  phrases,
  speed = 65,
  deleteSpeed = 35,
  pauseMs = 2600,
  loop = true,
  className = "",
  cursorClassName = "",
  as: Component = "span",
  splitAt = ", ",
  highlightClassName = "text-gradient",
}) {
  const list = phrases && phrases.length > 0 ? phrases : [text]
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const currentPhrase = list[index % list.length] || ""
  const shouldLoop = loop && list.length > 1

  useEffect(() => {
    if (isFinished) return
    let timer

    if (!isDeleting && displayed === currentPhrase) {
      if (!shouldLoop) {
        setIsFinished(true)
        return
      }
      timer = setTimeout(() => setIsDeleting(true), pauseMs)
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false)
      setIndex((prev) => (prev + 1) % list.length)
    } else {
      timer = setTimeout(() => {
        setDisplayed((prev) =>
          isDeleting
            ? currentPhrase.slice(0, Math.max(0, prev.length - 1))
            : currentPhrase.slice(0, prev.length + 1)
        )
      }, isDeleting ? deleteSpeed : speed)
    }

    return () => clearTimeout(timer)
  }, [displayed, isDeleting, currentPhrase, shouldLoop, speed, deleteSpeed, pauseMs, isFinished, list.length])

  // Split at comma (or custom delimiter) so prefix is plain ink text and remainder is brand gradient
  const splitIndex = splitAt ? displayed.indexOf(splitAt) : -1
  const hasSplit = splitIndex !== -1
  const prefix = hasSplit ? displayed.slice(0, splitIndex + splitAt.length) : displayed
  const highlighted = hasSplit ? displayed.slice(splitIndex + splitAt.length) : ""

  return (
    <Component className={className} aria-label={currentPhrase}>
      <span>{prefix}</span>
      {highlighted ? (
        <span className={highlightClassName}>{highlighted}</span>
      ) : null}
      <span
        className={`ml-1 inline-block w-[0.12em] animate-cursor-blink rounded-sm bg-brand-blue align-[-0.08em] ${cursorClassName}`}
        style={{ height: "0.9em" }}
        aria-hidden="true"
      />
    </Component>
  )
}
