import { ImgHTMLAttributes } from "react"
import styles from "./Avatar.module.css"

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  borderless?: boolean,
}

export function Avatar({borderless = false, ...props}: AvatarProps) {
  return (
    <img
      className={borderless ? styles.borderlessAvatar : styles.avatar}
      {...props}
    />
  )
}