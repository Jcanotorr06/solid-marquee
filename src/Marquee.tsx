import { createSignal, type Component, onMount, createEffect, JSX, children } from "solid-js"
import { isServer } from "solid-js/web"

import "./styles.css"

type Props = {
  style?: JSX.CSSProperties
  className?: string
  play?: boolean
  pauseOnHover?: boolean
  pauseOnClick?: boolean
  direction?: "left" | "right"
  speed?: number
  delay?: number
  iterations?: number
  onFinish?: () => void
  onCycleComplete?: () => void
  children: JSX.Element
}

const defaultProps = {
  style: {},
  className: "",
  play: true,
  pauseOnHover: true,
  pauseOnClick: false,
  direction: "left",
  speed: 20,
  delay: 0,
  iterations: 0,
  onFinish: () => {},
  onCycleComplete: () => {},
  children: null,
} satisfies Props

const Marquee: Component<Props> = (props = defaultProps) => {
  const {
    style = {},
    className = "",
    play = true,
    pauseOnHover = true,
    pauseOnClick = false,
    direction = "left",
    delay = 0,
    iterations = 0,
    speed = 20,
    onFinish = () => {},
    onCycleComplete = () => {},
  } = props

  let containerRef!: HTMLDivElement
  let marqueeRef!: HTMLDivElement

  const [containerWidth, setContainerWidth] = createSignal(0)
  const [marqueeWidth, setMarqueeWidth] = createSignal(0)
  const [duration, setDuration] = createSignal(0)

  onMount(() => {
    if (isServer) return

    const calculateWidths = () => {
      if (containerRef && marqueeRef) {
        setContainerWidth(containerRef.getBoundingClientRect().width)
        setMarqueeWidth(marqueeRef.getBoundingClientRect().width)
      }
    }

    calculateWidths()

    window.addEventListener("resize", () => {
      calculateWidths()
    })
  })

  createEffect(() => {
    if (marqueeWidth() < containerWidth()) {
      setDuration(containerWidth() / speed)
    } else {
      setDuration(marqueeWidth() / speed)
    }
  })

  createEffect(() => {
    console.log("Duration changed")
    console.log(duration())
  })

  const childrenCopy = children(() => props.children)
  const childrenCopy2 = children(() => props.children)

  if (isServer) return null
  return (
    <div
      ref={containerRef}
      class={`marquee-root ${className}`}
      style={{
        ...style,
        ["--pause-on-hover"]: !play || pauseOnHover ? "paused" : "running",
        ["--pause-on-click"]:
          !play || pauseOnClick || (!pauseOnClick && pauseOnHover) ? "paused" : "running",
      }}
      onAnimationIteration={onCycleComplete}
      onAnimationEnd={onFinish}
    >
      <div
        ref={marqueeRef}
        class="marquee"
        style={{
          ["--play"]: play ? "running" : "paused",
          ["--direction"]: direction,
          ["--duration"]: `${duration()}s`,
          ["--delay"]: `${delay}s`,
          ["--iterations"]: !!iterations ? `${iterations}` : "infinite",
        }}
      >
        {childrenCopy()}
      </div>
      <div
        class="marquee"
        aria-hidden={true}
        style={{
          ["--play"]: play ? "running" : "paused",
          ["--direction"]: direction,
          ["--duration"]: `${duration()}s`,
          ["--delay"]: `${delay}s`,
          ["--iterations"]: !!iterations ? `${iterations}` : "infinite",
        }}
      >
        {childrenCopy2()}
      </div>
    </div>
  )
}

export { Marquee }

export default Marquee
