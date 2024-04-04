import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> {
  children: string
}

export function NavLink({children: textContent, ...props}: NavLinkProps) {
  return <a {...props} className="font-medium text-sm">{textContent}</a>
}
