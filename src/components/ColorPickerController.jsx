import React, { useState } from 'react'
import ColorPicker from 'react-best-gradient-color-picker'


export default function ColorPickerController({hideController=false}) {
  const [color, setColor] = useState('rgba(255,255,255,1)');

  return (
    <div>
      <ColorPicker value={color} onChange={setColor} 
      hideControls={hideController}
      hideEyeDrop hideAdvancedSliders hideColorGuide hideInputType
      />

    </div>
  )
}
