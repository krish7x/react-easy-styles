import { VariantProps } from '@react-easy-styles/core'
import React from 'react'
import { StyledFlex } from './Flex'

type RowPrimitiveProps = React.ComponentPropsWithoutRef<typeof StyledFlex>
type RowVariantProps = VariantProps<typeof StyledFlex>

type RowContentProps = RowPrimitiveProps &
  RowVariantProps & {
    as?: string | React.ComponentType<any>
    reverse?: boolean
  }

const Row = React.forwardRef<
  React.ElementRef<typeof StyledFlex>,
  RowContentProps
>(({ reverse, ...rest }, forwardedRef) => {
  return (
    <StyledFlex
      direction={reverse ? 'rowReverse' : 'row'}
      {...rest}
      ref={forwardedRef}
    />
  )
})

Row.displayName = 'Row'

export default Row
