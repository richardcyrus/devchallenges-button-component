import { ButtonHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'

import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  color?: 'default' | 'primary' | 'secondary' | 'danger'
  disableShadow?: boolean
  endIcon?: string
  size?: 'sm' | 'md' | 'lg'
  startIcon?: string
  variant?: 'outline' | 'text'
}

const Button = ({
  children,
  className,
  color,
  disableShadow,
  endIcon,
  size,
  startIcon,
  type = 'button',
  variant,
  ...rest
}: ButtonProps) => {
  const buttonClass = classNames(styles.button, {
    [`${styles[`${color}`]}`]: typeof color !== 'undefined',
    [`${styles[`${size}`]}`]: typeof size !== 'undefined',
    [`${styles[`${variant}`]}`]: typeof variant !== 'undefined',
    [`${styles['start-icon']}`]: typeof startIcon !== 'undefined',
    [`${styles['end-icon']}`]: typeof endIcon !== 'undefined',
    [`${styles['no-shadow']}`]:
      typeof disableShadow !== 'undefined' && disableShadow,
    [`${styles[`${className}`]}`]: typeof className !== 'undefined',
  })

  return (
    <button className={buttonClass} type={type} {...rest}>
      {typeof startIcon !== 'undefined' ? (
        <span className={styles['material-icons-outlined']}>{startIcon}</span>
      ) : null}
      {children || `Default`}
      {typeof endIcon !== 'undefined' ? (
        <span className={styles['material-icons-outlined']}>{endIcon}</span>
      ) : null}
    </button>
  )
}

export default Button
