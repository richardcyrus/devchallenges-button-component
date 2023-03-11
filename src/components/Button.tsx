import { ButtonHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'

import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  color?: 'default' | 'primary' | 'secondary' | 'danger'
  disableShadow?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'outline' | 'text'
}

const Button = ({
  children,
  className,
  color,
  disableShadow,
  size,
  type = 'button',
  variant,
  ...rest
}: ButtonProps) => {
  const buttonClass = classNames(styles.button, {
    [`${styles[`${color}`]}`]: typeof color !== 'undefined',
    [`${styles[`${size}`]}`]: typeof size !== 'undefined',
    [`${styles[`${variant}`]}`]: typeof variant !== 'undefined',
    [`${styles['no-shadow']}`]:
      typeof disableShadow !== 'undefined' && disableShadow,
    [`${styles[`${className}`]}`]: typeof className !== 'undefined',
  })
  return (
    <button className={buttonClass} type={type} {...rest}>
      {children || `Default`}
    </button>
  )
}

export default Button
