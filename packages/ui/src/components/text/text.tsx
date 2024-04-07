import React from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../utils/cn'
import type { VariantProps } from 'class-variance-authority'
import type { ClassValue } from 'clsx'

/**
 * Defines variant classes for the Text component using `class-variance-authority`.
 * It enables the application of different text color styles based on the `color` prop.
 * Each color variant corresponds to a CSS variable that should be defined in the global stylesheet or theme.
 *
 * Variants:
 * - primary, secondary, tertiary, positive, negative, etc., each set specific text colors.
 * - `inherit` leaves the text color as inherited from parent components, useful for integrating with existing CSS.
 * - `inverse` and `placeholder` offer additional specific styles for contrast and form-related use cases.
 *
 * Default Variant:
 * - If no color is specified, the `inherit` style is used by default.
 */

const headingVariant = cva('antialiased', {
    variants: {
        color: {
            primary: 'text-[var(--color-fg-primary-depth)]',
            secondary: 'text-[var(--color-fg-primary-base)]',
            tertiary: 'text-[var(--color-fg-primary-subdued)]',
            positive: 'text-[var(--color-fg-positive-emphasis)]',
            negative: 'text-[var(--color-fg-negative-base)]',
            info: 'text-[var(--color-fg-info-base)]',
            caution: 'text-[var(--color-fg-caution-emphasis)]',
            alert: 'text-[var(--color-fg-alert-base)]',
            innovative: 'text-[var(--color-fg-innovative-base)]',
            inherit: '',
            inverse: 'text-[var(--color-fg-primary-inverse)]',
            placeholder: 'text-[var(--form-input-placeholder-default)]',
        },
    },
    defaultVariants: {
        color: 'inherit',
    },
})

/**
 * Text component that renders a paragraph `<p>` element with flexible styling options.
 * This component is designed to integrate seamlessly with a design system using CSS variables.
 *
 * Props:
 * - `children`: ReactNode - The content to display within the paragraph.
 * - `color`: One of the predefined color variants for text styling.
 * - `className`: ClassValue - Optional additional classNames that can be applied to the paragraph for further customization.
 *
 * Example Usage:
 * ```jsx
 * <Text color="primary">Hello, world!</Text>
 * ```
 */

interface TextProps extends VariantProps<typeof headingVariant> {
    children: React.ReactNode
    className?: ClassValue
}

export const Text = ({ children, color, className }: TextProps) => {
    return <p className={cn(className, headingVariant({ color }))}>{children}</p>
}
