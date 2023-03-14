import { ButtonHTMLAttributes, ReactNode } from 'react'

import classNames from 'classnames'

import styles from './button.module.css'

export type ButtonColor = 'default' | 'primary' | 'secondary' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'
export type ButtonVariant = 'default' | 'outline' | 'text'
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  color?: ButtonColor
  disableShadow?: boolean
  endIcon?: string
  size?: ButtonSize
  startIcon?: string
  variant?: ButtonVariant
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
  variant = 'default',
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
        <span
          data-testid="startIcon"
          className={styles['material-icons-outlined']}
        >
          {startIcon}
        </span>
      ) : null}
      {children || `Default`}
      {typeof endIcon !== 'undefined' ? (
        <span
          data-testid="endIcon"
          className={styles['material-icons-outlined']}
        >
          {endIcon}
        </span>
      ) : null}
    </button>
  )
}

export default Button
