import React from 'react'
import { UserIcon } from '@/utils/Icons'

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactElement
    title: string
    description: string
    key?: number
}

function Step(props: StepProps) {
    return (
        <div className='flex gap-4   w-full h-20   items-center justify-start' {...props}>
            <div className='border rounded-step flex items-center justify-center border-solid border-gray-400 rounded-sm w-12 h-11'>
                {props.icon}
            </div>
            <div className=''>
                <h6 className='font-bold'>{props.title}</h6>
                <p className='text-gray-400'>{props.description}</p>
            </div>
        </div>
    )
}

export default Step