'use client'

import { createRef, forwardRef } from 'react'
import { IMaskInput } from 'react-imask'
import { commonInputStyles } from '.'

interface MaskInputProps {
  onChange: (event: { target: { name: string; value: string } }) => void
  mask: string
  type?: string
  name: string
  placeholder?: string
  autoComplete?: string
  className?: string
}

const MaskedInput = forwardRef<HTMLInputElement, MaskInputProps>((props, inputRef) => {
  const { onChange, mask, ...other } = props
  const ref = createRef()

  return (
    <IMaskInput
      {...other}
      inputRef={inputRef as React.Ref<HTMLInputElement> | undefined}
      ref={ref}
      mask={mask}
      className={commonInputStyles()}
      onAccept={(value: string) => {
        onChange({ target: { name: other.name, value } })
      }}
    />
  )
})

MaskedInput.displayName = 'Masked Input'

export { MaskedInput }
