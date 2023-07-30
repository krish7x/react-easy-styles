import { styled } from '@react-easy-styles/core'
import React from 'react'

export const CoreBox = styled('div', {
  // Reset
  boxSizing: 'border-box',
})

type BoxPrimitiveProps = React.ComponentPropsWithoutRef<typeof CoreBox>

export type BoxContentProps = BoxPrimitiveProps & {
  as?: string | React.ComponentType<any>
}

const Box = React.forwardRef<React.ElementRef<typeof CoreBox>, BoxContentProps>(
  (props, forwardedRef) => {
    return <CoreBox {...props} ref={forwardedRef} />
  },
)

Box.displayName = 'Box'

export default Box
