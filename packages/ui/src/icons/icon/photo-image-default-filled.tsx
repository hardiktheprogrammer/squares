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
        displayName: 'PhotoImageDefaultFilled',
        paths: [
            {
                d: 'M9.95624 2C8.5932 1.99999 7.50917 1.99999 6.63458 2.07144C5.73898 2.14462 4.97531 2.29768 4.27606 2.65396C3.14709 3.2292 2.2292 4.14709 1.65396 5.27606C1.29768 5.97531 1.14462 6.73898 1.07144 7.63458C0.999986 8.50917 0.999992 9.5932 1 10.9562V13.0438C0.999992 14.4068 0.999986 15.4908 1.07144 16.3654C1.14462 17.261 1.29768 18.0247 1.65396 18.7239C2.2292 19.8529 3.14709 20.7708 4.27606 21.346C4.97531 21.7023 5.73898 21.8554 6.63458 21.9286C7.50914 22 8.59314 22 9.95613 22H14.0438C15.4068 22 16.4909 22 17.3654 21.9286C18.261 21.8554 19.0247 21.7023 19.7239 21.346C20.8529 20.7708 21.7708 19.8529 22.346 18.7239C22.7023 18.0247 22.8554 17.261 22.9286 16.3654C23 15.4908 23 14.4068 23 13.0438V10.9562C23 9.5932 23 8.50917 22.9286 7.63458C22.8554 6.73898 22.7023 5.97531 22.346 5.27606C21.7708 4.14709 20.8529 3.2292 19.7239 2.65396C19.0247 2.29768 18.261 2.14462 17.3654 2.07144C16.4908 1.99999 15.4068 1.99999 14.0438 2H9.95624ZM16.7131 8.7786C16.8964 8.96192 17.153 9.03161 17.4083 8.95663C17.6636 8.88166 17.8655 8.67543 17.9426 8.41971C18.0197 8.16398 17.9576 7.88602 17.7786 7.7131L15.523 5.45748C15.3494 5.28219 15.0706 5.21981 14.8154 5.29476C14.5601 5.36972 14.3536 5.57243 14.2786 5.82765C14.2036 6.08287 14.266 6.3617 14.4403 6.536L16.7131 8.7786ZM11.2131 13.2786C11.3964 13.4619 11.653 13.5316 11.9083 13.4566C12.1636 13.3817 12.3655 13.1754 12.4426 12.9197C12.5197 12.6639 12.4576 12.386 12.2786 12.2131L10.023 9.95748C9.84941 9.78219 9.57056 9.71981 9.31537 9.79476C9.06014 9.86972 8.85363 10.0724 8.77865 10.3276C8.70367 10.5829 8.76606 10.8617 8.94037 11.036L11.2131 13.2786ZM8.7131 8.7786C8.89641 8.96192 9.153 9.03161 9.40829 8.95663C9.66357 8.88166 9.8655 8.67543 9.94258 8.41971C10.0197 8.16398 9.95764 7.88602 9.77865 7.7131L7.52302 5.45748C7.34943 5.28219 7.07057 5.21981 6.81537 5.29476C6.56015 5.36972 6.35364 5.57243 6.27865 5.82765C6.20366 6.08287 6.26606 6.3617 6.44037 6.536L8.7131 8.7786ZM11 18C11 17.4477 11.4477 17 12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18ZM9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10ZM14 15C14 14.4477 14.4477 14 15 14C15.5523 14 16 14.4477 16 15C16 15.5523 15.5523 16 15 16C14.4477 16 14 15.5523 14 15Z',
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

export const PhotoImageDefaultFilled = forwardRef(IconComponent)
