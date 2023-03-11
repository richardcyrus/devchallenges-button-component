import { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from './button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string
  children?: ReactNode
}

const Button = ({ type = 'button', children, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} type={type} {...rest}>
      {children || `Default`}
    </button>
  )
}

export default Button
