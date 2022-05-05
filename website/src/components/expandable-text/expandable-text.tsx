import React, { useState } from "react"
import style from "./expandable-text.module.css"

const ExpandableText = ({
	expandText = "Read More",
	collapseText = "Collapse",
	initiallyExpanded = false,
	children,
}) => {
	const [expanded, setExpanded] = useState(initiallyExpanded);

	return (
		<div className={style.expandableText}>
      { expanded && children }
			<div className={style.expandButton}>
        <span onClick={() => setExpanded(!expanded)}>
				  { expanded ? collapseText : expandText }
        </span>
			</div>
		</div>
	)
}

export default ExpandableText;
