import { Box, Grid } from "@mui/material";

function PageCliente(){
    return (
        <Box component='main'>
            <Grid container spacing={0}>
            <Grid item xs={12} sx={{backgroundColor:'black', height: '100px'}}>
                <h1>Olá aqui é PageClietne</h1>
            </Grid>
            </Grid>
        </Box>
    )
}

export default PageCliente