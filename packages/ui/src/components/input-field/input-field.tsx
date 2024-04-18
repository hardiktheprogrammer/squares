import React from 'react'
import { cn } from '@utils/cn'

export const InputFieldContainerVariants = {
    variants: {
        size: {
            md: 'h-[38px] md:h-[40px]',
            sm: 'h-[34px] md:h-[36px]',
        },
    },
}

type InputContextType = {
    isFocused: boolean
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const InputContext = React.createContext<InputContextType>({
    isFocused: false,
})

export const InputLeftElement = ({
    children,
    isDisabled,
}: {
    children: React.ReactNode | React.ReactNode[]
    isDisabled?: boolean
}) => (
    <div
        className={cn(
            isDisabled
                ? 'text-[var(--form-input-fg-disabled)]'
                : 'text-[var(--form-input-fg-default)]',
            'inline-flex gap-2 items-center rounded-l-[8px] ps-3',
        )}
    >
        {children}
    </div>
)

export const InputRightElement = ({
    children,
    isDisabled,
    className,
}: {
    children: React.ReactNode
    isDisabled?: boolean
    className?: string
}) => (
    <div
        className={cn(
            isDisabled
                ? 'text-[var(--form-input-fg-disabled)]'
                : 'text-[var(--form-input-fg-default)]',
            'inline-flex items-center rounded-l-[8px] pe-3',
            className,
        )}
    >
        {children}
    </div>
)

export const InputFieldContainer = ({
    children,
    isError,
    isDisabled,
    size,
    className,
}: {
    children: React.ReactNode
    isDisabled?: boolean
    isError?: boolean
    size: 'md' | 'sm'
    className?: string
}) => {
    const disabledClasses = isDisabled
        ? 'cursor-not-allowed border-[var(--form-input-border-disabled)] bg-[var(--form-input-surface-disabled)]'
        : ''
    const sizeClasses = InputFieldContainerVariants.variants.size[size] || ''
    const focusClasses = isError
        ? 'border border-[var(--form-input-border-error)] hover:border-[var(--form-input-border-error)] ring-4 ring-[var(--color-surface-negative-transparent)] bg-[var(--form-input-surface-error)] text-[var(--form-input-fg-error)]'
        : ''
    const baseClasses =
        'flex rounded-[8px] w-full transition-all bg-[var(--form-input-surface-default)] hover:text-[var(--form-input-fg-hovered)] border hover:ring-4 ring-[var(--color-surface-primary-transparent)] hover:bg-[var(--form-input-surface-hovered)]'

    const combinedClasses = cn(baseClasses, sizeClasses, disabledClasses, focusClasses, className)

    return <div className={combinedClasses}>{children}</div>
}

export const InputField = React.forwardRef<HTMLInputElement, InputProps>(function InputField(
    { className, ...props },
    ref,
) {
    return (
        <input
            className={cn(
                'bg-[var(--form-input-surface-default)] text-[var(--form-input-fg-default)]',
                'disabled:text-[var(--form-input-fg-disabled)] disabled:cursor-not-allowed disabled:opacity-50 disabled:border-[var(--form-input-border-disabled)] disabled:bg-[var(--form-input-surface-disabled)]',
                'block w-full flex-1 rounded-[8px] border-0 p-3 outline-none font-medium text-sm md:text-md',
                'placeholder:text-[var(--form-input-border-default)] placeholder:text-sm placeholder:font-normal',
                className,
            )}
            type="text"
            ref={ref}
            autoComplete="off"
            {...props}
        />
    )
})

InputField.displayName = 'InputField'
