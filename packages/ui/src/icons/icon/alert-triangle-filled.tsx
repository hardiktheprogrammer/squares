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
        displayName: 'AlertTriangleFilled',
        paths: [
            {
                d: 'M13.7815 2.3636C12.6424 1.8788 11.3575 1.8788 10.2184 2.3636C9.73333 2.57004 9.24717 2.93813 8.79256 3.35235C8.32488 3.77847 7.83236 4.30774 7.33585 4.89852C6.34217 6.08085 5.28986 7.5606 4.33501 9.07767C3.38021 10.5947 2.50789 12.1727 1.88176 13.5566C1.56899 14.2479 1.31031 14.9067 1.13443 15.4956C0.964728 16.0638 0.845902 16.6505 0.88124 17.1656C0.972824 18.5004 1.63448 19.7323 2.69867 20.5391C3.1304 20.8663 3.72489 21.0901 4.32906 21.2565C4.9579 21.4298 5.70239 21.5682 6.50987 21.6766C8.12667 21.8937 10.0706 22 11.9999 22C13.9293 22 15.8732 21.8937 17.49 21.6766C18.2975 21.5682 19.042 21.4298 19.6708 21.2565C20.275 21.0901 20.8696 20.8662 21.3014 20.539C22.3655 19.7322 23.027 18.5003 23.1187 17.1656C23.154 16.6505 23.0352 16.0638 22.8654 15.4956C22.6896 14.9067 22.4309 14.2479 22.1181 13.5566C21.492 12.1727 20.6196 10.5947 19.6648 9.07767C18.71 7.56061 17.6577 6.08085 16.664 4.89853C16.1675 4.30775 15.675 3.77847 15.2073 3.35235C14.7527 2.93813 14.2666 2.57004 13.7815 2.3636ZM13 16.3762C13 16.9285 12.5523 17.3762 12 17.3762C11.4477 17.3762 11 16.9285 11 16.3762V16.3751C11 15.8228 11.4477 15.3751 12 15.3751C12.5523 15.3751 13 15.8228 13 16.3751V16.3762ZM13 13.0001C13 13.5524 12.5523 14.0001 12 14.0001C11.4477 14.0001 11 13.5524 11 13.0001V9.0001C11 8.44781 11.4477 8.0001 12 8.0001C12.5523 8.0001 13 8.44781 13 9.0001V13.0001Z',
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

export const AlertTriangleFilled = forwardRef(IconComponent)
