import React from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export type MultiStepProps = {
  size: number
  currentStep: number
}

export function MultiStep({ currentStep = 0, size }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ '--steps-size': size }}>
        {Array.from({ length: size }, (_, index) => index + 1).map((step) => (
          <Step key={step} active={step <= currentStep} />
        ))}
      </Steps>
    </MultiStepContainer>
  )
}
