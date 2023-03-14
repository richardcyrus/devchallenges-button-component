import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import type { ButtonSize, ButtonColor, ButtonVariant } from './Button'

import Button from './Button'

describe('Button variants', () => {
  it.each(['default', 'outline', 'text'])(
    'should have a %s variant',
    (variant) => {
      render(<Button variant={variant as ButtonVariant} />)
      const variantButton = screen.getByRole('button', { name: /default/i })
      expect(variantButton).toHaveClass(variant)
    }
  )
})

describe('Button without a shadow', () => {
  it("should be able to disable the button's shadow", () => {
    render(<Button disableShadow />)
    const noShadowButton = screen.getByRole('button', { name: /default/i })
    expect(noShadowButton).toHaveClass('no-shadow')
  })
})

describe('Button disabled', () => {
  it('should honor a disabled state', () => {
    render(<Button disabled />)
    const disabledButton = screen.getByRole('button', { name: /default/i })
    expect(disabledButton).toBeDisabled()
  })
})

describe('Button sizes', () => {
  it.each(['sm', 'md', 'lg'])('should render at size %s', (size) => {
    render(<Button size={size as ButtonSize} />)
    const sizedButton = screen.getByRole('button', { name: /default/i })
    expect(sizedButton).toHaveClass(size)
  })
})

describe('Button colors', () => {
  it.each(['default', 'primary', 'secondary', 'danger'])(
    'should render with color: %s',
    (color) => {
      render(
        <Button color={color as ButtonColor}>
          {color.toLocaleUpperCase()}
        </Button>
      )
      const colorButton = screen.getByRole('button', {
        name: color.toLocaleUpperCase(),
      })
      expect(colorButton).toHaveClass(color)
    }
  )
})

describe('Button with standard attributes', () => {
  it('should pass through `className= (class=)`', () => {
    render(<Button className="hover" />)
    const hoverButton = screen.getByRole('button', { name: /default/i })
    expect(hoverButton).toHaveClass('hover')
  })

  it('should pass through `name=`', () => {
    render(<Button name="_action" />)
    const actionButton = screen.getByRole('button', { name: /default/i })
    expect(actionButton).toHaveAttribute('name', '_action')
  })

  it('should pass through `type="reset"`', () => {
    render(<Button type="reset" />)
    const resetButton = screen.getByRole('button', { name: /default/i })
    expect(resetButton).toHaveAttribute('type', 'reset')
  })
})

describe('Button: left icon', () => {
  it('should show an icon on the left', () => {
    render(<Button startIcon="add_shopping_cart" />)

    const descendent = screen.getByTestId('startIcon')
    const iconButton = screen.getByRole('button', { name: /default/i })
    expect(iconButton).toContainElement(descendent)
  })
})

describe('Button: right icon', () => {
  it('should show an icon on the right', () => {
    render(<Button endIcon="add_shopping_cart" />)

    const descendent = screen.getByTestId('endIcon')
    const iconButton = screen.getByRole('button', { name: /default/i })
    expect(iconButton).toContainElement(descendent)
  })
})
