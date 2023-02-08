import styles from './Footer.module.css'
import cn from "classnames"
import { FooterProps } from "./Footer.props"
import { format } from 'date-fns'


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        Hair Club © 2022 - {format(new Date(), 'yyyy')} Все права защищены
      </div>
      <a href="#" target='_blank'>User rules</a>
      <a href="#" target='_blank'>Confidencial politics</a>
    </footer>
  )
}