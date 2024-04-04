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
        displayName: 'Home',
        paths: [
            {
                d: 'M3 12.7587C3 11.7418 3 11.2334 3.11866 10.7571C3.22385 10.3349 3.39721 9.93275 3.63191 9.56641C3.89667 9.15313 4.26632 8.80402 5.00561 8.1058L7.60561 5.65025C9.15211 4.18966 9.92537 3.45937 10.8075 3.18385C11.584 2.94132 12.416 2.94132 13.1925 3.18385C14.0746 3.45937 14.8479 4.18966 16.3944 5.65025L18.9944 8.1058C19.7337 8.80402 20.1033 9.15313 20.3681 9.56641C20.6028 9.93275 20.7761 10.3349 20.8813 10.7571C21 11.2334 21 11.7418 21 12.7587V16.3333C21 17.4183 21 17.9608 20.8807 18.4059C20.5571 19.6137 19.6137 20.5571 18.4059 20.8807C17.9608 21 17.4183 21 16.3333 21C16.0233 21 15.8683 21 15.7412 20.9659C15.3961 20.8735 15.1265 20.6039 15.0341 20.2588C15 20.1316 15 19.9766 15 19.6667V17C15 16.5355 15 16.3032 14.9692 16.1089C14.7998 15.0392 13.9608 14.2002 12.8911 14.0308C12.6968 14 12.4645 14 12 14C11.5355 14 11.3032 14 11.1089 14.0308C10.0392 14.2002 9.20021 15.0392 9.03078 16.1089C9 16.3032 9 16.5355 9 17V19.6667C9 19.9766 9 20.1316 8.96593 20.2588C8.87346 20.6039 8.60391 20.8735 8.25882 20.9659C8.13165 21 7.97666 21 7.66667 21C6.5817 21 6.03922 21 5.59413 20.8807C4.38631 20.5571 3.44289 19.6137 3.11926 18.4059C3 17.9608 3 17.4183 3 16.3333V12.7587Z',
                fill: false,
                stroke: true,
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

export const Home = forwardRef(IconComponent)
