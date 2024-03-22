import * as React from 'react';
import {cn} from "../../lib/utils";

type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    classNames?: string
}

export const Input: React.FC<TInputProps> = React.forwardRef<HTMLInputElement, TInputProps>(({ classNames, ...props }, ref) => {
    return (
        <input ref={ref} className={cn("py-1 px-2 min-w-20 bg-white border rounded-md text-sm w-full duration-300", classNames)} {...props} />
    );
});