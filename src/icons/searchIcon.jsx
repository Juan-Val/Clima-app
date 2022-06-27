import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgSearch(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-2 w-2"
      fill="none"
      style={{width:props.width, height: props.height}}
      color='#565454'
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </Svg>
  )
}

export default SvgSearch
