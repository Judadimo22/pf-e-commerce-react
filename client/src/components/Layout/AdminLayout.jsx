import NavBar from "../NavBar/NavBar";
import { Box,Typography } from "@mui/material"



export const AdminLayout = ({children, title, subTitle, icon }) => {
  return (
    <>
        <nav>
        <NavBar/>
        </nav>


        <main style={{
                margin: '0px auto',
                maxWidth: '1440px',
                padding: '0px 20px'
            }}>
                <Box display="flex" alignItems="flex-start" flexDirection="column">
                    <Typography variant="h1" component="h1">
                        {icon}
                        {title}
                    </Typography>
                    <Typography variant="h2" sx={{ mb:1 }}>
                        {subTitle}
                    </Typography>
                </Box>

                <Box className="fadeIn">
                    { children }
                </Box>
        </main>

    </>
  )
}
