import React, { forwardRef } from 'react'
import { CreateIcon } from '../../utils/create-icon'

interface Props extends React.SVGProps<SVGSVGElement> {
    color?: string
}

const IconComponent: React.ForwardRefRenderFunction<SVGSVGElement, Props> = (
    { color, ...props },
    ref,
) => {
    // Assuming CreateIcon returns a ReactElement
    const IconElement = CreateIcon({
        displayName: 'PresentationBarGraphFilled',
        paths: [
            {
                d: 'M12 1C12.5523 1 13 1.44772 13 2H15.6428C16.7266 1.99999 17.6007 1.99998 18.3086 2.05782C19.0375 2.11737 19.6777 2.24318 20.27 2.54497C21.2108 3.02433 21.9757 3.78924 22.455 4.73005C22.7568 5.32234 22.8826 5.96253 22.9422 6.69138C23 7.39923 23 8.27334 23 9.35707V11.6428C23 12.7266 23 13.6008 22.9422 14.3086C22.8826 15.0375 22.7568 15.6777 22.455 16.27C21.9757 17.2108 21.2108 17.9757 20.27 18.455C19.6777 18.7568 19.0375 18.8826 18.3086 18.9422C18.0913 18.9599 17.8583 18.9722 17.6084 18.9808L18.8944 21.5528C19.1414 22.0468 18.9412 22.6474 18.4472 22.8944C17.9532 23.1414 17.3526 22.9412 17.1056 22.4472L15.382 19H8.61804L6.89443 22.4472C6.64744 22.9412 6.04677 23.1414 5.55279 22.8944C5.05881 22.6474 4.85858 22.0468 5.10557 21.5528L6.39158 18.9808C6.14167 18.9722 5.90869 18.9599 5.69138 18.9422C4.96253 18.8826 4.32234 18.7568 3.73005 18.455C2.78924 17.9757 2.02434 17.2108 1.54497 16.27C1.24318 15.6777 1.11737 15.0375 1.05782 14.3086C0.999983 13.6007 0.99999 12.7266 1 11.6428V9.35719C0.99999 8.27341 0.999983 7.39925 1.05782 6.69138C1.11737 5.96253 1.24318 5.32234 1.54497 4.73005C2.02434 3.78924 2.78924 3.02433 3.73005 2.54497C4.32234 2.24318 4.96253 2.11737 5.69138 2.05782C6.39926 1.99998 7.27341 1.99999 8.35719 2H11C11 1.44772 11.4477 1 12 1ZM13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V7ZM18 10C18 9.44772 17.5523 9 17 9C16.4477 9 16 9.44772 16 10V14C16 14.5523 16.4477 15 17 15C17.5523 15 18 14.5523 18 14V10ZM8 12C8 11.4477 7.55229 11 7 11C6.44772 11 6 11.4477 6 12V14C6 14.5523 6.44772 15 7 15C7.55229 15 8 14.5523 8 14V12Z',
                fill: true,
                stroke: false,
            },
        ],
        viewBox: '0 0 24 24',
        color,
        ...props,
    })

    // If you need to pass a ref to the CreateIcon result, you must handle it inside CreateIcon.
    // This example assumes CreateIcon does not use the ref.
    return <IconElement />
}

export const PresentationBarGraphFilled = forwardRef(IconComponent)
