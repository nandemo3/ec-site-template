import { FC, ReactNode } from "react"
import { Box, Typography } from "@mui/material"

type ItemLayoutProps = {
    title: string;
    children?: ReactNode
}

const ItemLayout: FC<ItemLayoutProps> = ({title, children}) => {
 return (
    <Box sx={{mx: 2, my: 8}}>
        <Box sx={{mx: 2, my: 4}}>
            <Typography variant="h5" >{title}</Typography>
        </Box>
        <Box sx={{mx: 2}}>
            {children}
        </Box>
    </Box>
)
}

export default ItemLayout