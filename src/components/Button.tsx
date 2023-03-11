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
  children,
  ...rest
}: ButtonProps) => {
  const buttonClass = classNames(styles.button, `${styles[`${className}`]}`)
  return (
    <button className={buttonClass} type={type} {...rest}>
      {children || `Default`}
    </button>
  )
}

export default Button
