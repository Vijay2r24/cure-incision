import React, { Children, cloneElement, isValidElement } from "react"

const directionMap = {
  up: "fade-up",
  down: "fade-down",
  left: "fade-right",
  right: "fade-left",
  zoom: "zoom-in",
  flip: "flip-up",
  none: "",
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
  animation,
  duration = 800,
  offset,
  as: Component = "div",
  ...props
}) {
  const aosAnimation = animation || directionMap[direction] || "fade-up"
  const delayMs = typeof delay === "number" && delay < 20 ? Math.round(delay * 1000) : delay
  const durationMs = typeof duration === "number" && duration < 20 ? Math.round(duration * 1000) : duration

  return (
    <Component
      className={className}
      data-aos={aosAnimation}
      data-aos-delay={delayMs}
      data-aos-duration={durationMs}
      {...(offset != null ? { "data-aos-offset": offset } : {})}
      {...props}
    >
      {children}
    </Component>
  )
}

export function StaggerGrid({
  children,
  className = "",
  stagger = 0.09,
  as: Component = "div",
  ...props
}) {
  const staggerMs = typeof stagger === "number" && stagger < 20 ? Math.round(stagger * 1000) : stagger

  return (
    <Component className={className} {...props}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child
        const existingDelay = child.props.delay ?? 0
        const existingDelayMs = typeof existingDelay === "number" && existingDelay < 20
          ? Math.round(existingDelay * 1000)
          : existingDelay
        return cloneElement(child, {
          delay: existingDelayMs + index * staggerMs,
        })
      })}
    </Component>
  )
}

export function StaggerItem({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  duration = 700,
  as: Component = "div",
  ...props
}) {
  const delayMs = typeof delay === "number" && delay < 20 ? Math.round(delay * 1000) : delay
  const durationMs = typeof duration === "number" && duration < 20 ? Math.round(duration * 1000) : duration

  return (
    <Component
      className={className}
      data-aos={animation}
      data-aos-delay={delayMs}
      data-aos-duration={durationMs}
      {...props}
    >
      {children}
    </Component>
  )
}
