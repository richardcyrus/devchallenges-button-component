import { ButtonHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'

import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'text'
  children?: ReactNode
  disableShadow?: boolean
}

const Button = ({
  type = 'button',
  className,
  variant,
  disableShadow,
  children,
  ...rest
}: ButtonProps) => {
  const buttonClass = classNames(styles.button, {
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
