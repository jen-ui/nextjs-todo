import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface MaxI{
    className?: string,
    children:ReactNode,
}

const MaxWidthWrapper = ({className,children}:MaxI) => {
    return (
        <div className={cn("w-full mx-auto max-w-screen-xl px-2.5 md:px-15",className)}>
            {children}
        </div>
    )
}
export default MaxWidthWrapper