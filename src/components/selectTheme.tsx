import React from 'react'

import { Button, Grid, TextField, Typography } from "@mui/material";

type Props = {}

export default function selectTheme({ }: Props) {
    return (
        <div>
            <Grid sx={{ p: 4 }} container>
                <Grid xl={12} lg={12} md={12} xs={12}>
                    <Typography variant="h3">BUTTON</Typography>
                    <Button variant="outlined">BUTTON</Button>
                    <Button sx={{ m: 2 }} color="primary" variant="contained">BUTTON</Button>
                    <Button color="secondary" variant="contained">BUTTON</Button>
                    <Button color="info" variant="contained">BUTTON</Button>
                    <Button color="success" variant="contained">BUTTON</Button>
                    <Button color="error" variant="contained">BUTTON</Button>
                    <Button sx={{ m: 2, p: 1 }} color="warning" variant="contained">BUTTON</Button>
                    <TextField color="primary" label="Name" />
                    <TextField margin="dense" color="primary" label="Name" />
                </Grid>
                <Grid>
                    <Typography color="secondary" variant="h1">Heading</Typography>
                    <Typography variant="h2">Heading</Typography>
                    <Typography variant="h3">Heading</Typography>
                    <Typography>Heading</Typography>
                </Grid>
            </Grid>
        </div>
    )
}