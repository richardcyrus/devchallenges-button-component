import { ButtonHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'

import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
  children?: ReactNode
}

const Button = ({
  type = 'button',
  className,
  variant,
  children,
  ...rest
}: ButtonProps) => {
  const buttonClass = classNames(styles.button, {
    [`${styles[`${variant}`]}`]: typeof variant !== 'undefined',
    [`${styles[`${className}`]}`]: typeof className !== 'undefined',
  })
  return (
    <button className={buttonClass} type={type} {...rest}>
      {children || `Default`}
    </button>
  )
}

export default Button
