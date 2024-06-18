import type { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import { cn } from '~/lib/utils'

const FormRow: FC<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('flex w-full flex-col gap-6 md:flex-row', className)} {...props}>
      {children}
    </div>
  )
}

export { FormRow }
