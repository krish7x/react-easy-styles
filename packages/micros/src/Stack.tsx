import React from 'react'
import { Children, isValidElement, Fragment } from 'react'
import { CSS, styled, VariantProps } from '@react-easy-styles/core'
import { CoreBox } from './Box'

export const CoreStack = styled(CoreBox, {
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'column',

  variants: {
    gap: {
      1: {
        gap: '$1',
      },
      2: {
        gap: '$2',
      },
      3: {
        gap: '$3',
      },
      4: {
        gap: '$4',
      },
      5: {
        gap: '$5',
      },
      6: {
        gap: '$6',
      },
      7: {
        gap: '$7',
      },
      8: {
        gap: '$8',
      },
      9: {
        gap: '$9',
      },
    },
  },
  defaultVariants: {
    gap: '2',
  },
})

type StackPrimitiveProps = React.ComponentPropsWithoutRef<typeof CoreStack>

type StyledStackProps = StackPrimitiveProps &
  VariantProps<typeof CoreStack> & {
    as?: string | React.ComponentType<any>
    seperator?: React.ReactNode
  }

const Stack = ({ css, children, seperator, ...rest }: StyledStackProps) => {
  let lg: CSS = {
    flexDirection: 'row',
  }
  if (css && css['@lg']) {
    lg = {
      ...lg,
      ...(css['@lg'] as CSS),
    }
  }

  const StyledStack = styled(CoreStack, {
    ...css,
    '@lg': lg,
  })

  if (isValidElement(seperator)) {
    return (
      <StyledStack {...rest}>
        {Children.toArray(children).map((child, index, self) => {
          return (
            <Fragment key={'child' + index}>
              {child}
              {seperator && index !== self.length - 1 && seperator}
            </Fragment>
          )
        })}
      </StyledStack>
    )
  }

  return <StyledStack {...rest}>{children}</StyledStack>
}

export default Stack
