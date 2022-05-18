import React, { useState, useRef } from "react"
import style from "./expandable-text.module.css"

const ExpandableText = ({
	expandText = "Continue reading",
	collapseText = "Collapse",
	initiallyExpanded = false,
	children,
}) => {
	const [expanded, setExpanded] = useState(initiallyExpanded);

  const wrapper = useRef(null)

  const toggle = () => {
    setExpanded(!expanded)
    if (!expanded) {
      wrapper.current.style.maxHeight = `${wrapper.current.firstElementChild.offsetHeight}px`
    } else {
      wrapper.current.removeAttribute("style")
    }
  }

	return (
		<div className={style.expandableText}>
      <div className={`${style.textWrapper} ${expanded && style.expanded}`} ref={wrapper}>
        <div>
          { children }
        </div>
      </div>
			<div className={style.expandButton}>
				<span onClick={toggle}>
					{ expanded ? collapseText : expandText }
				</span>
			</div>
		</div>
	)
}

export default ExpandableText;
