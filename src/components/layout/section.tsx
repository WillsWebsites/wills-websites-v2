import { type DetailedHTMLProps, type FC, type HTMLAttributes } from 'react'
import { cn } from '~/lib/utils'

const Section: FC<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>> = ({ className, ...props }) => {
  return (
    <section className={cn('relative bg-cover bg-center bg-no-repeat', className)} {...props}>
      {props.children}
    </section>
  )
}

export { Section }
