import { VariantProps } from '@react-easy-styles/core'
import React from 'react'
import { StyledFlex } from './Flex'

type ColumnPrimitiveProps = React.ComponentPropsWithoutRef<typeof StyledFlex>
type ColumnVariantProps = VariantProps<typeof StyledFlex>

type ColumnContentProps = ColumnPrimitiveProps &
  ColumnVariantProps & {
    as?: string | React.ComponentType<any>
    reverse?: boolean
  }

const Column = React.forwardRef<
  React.ElementRef<typeof StyledFlex>,
  ColumnContentProps
>(({ reverse, ...rest }, forwardedRef) => {
  return (
    <StyledFlex
      direction={reverse ? 'columnReverse' : 'column'}
      {...rest}
      ref={forwardedRef}
    />
  )
})

Column.displayName = 'Column'

export default Column
