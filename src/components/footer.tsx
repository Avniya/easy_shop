// src/componetns/Footer.tsx

import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography, Button, makeStyles } from "@mui/material";
import NextLink from "next/link";
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';




export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        position: "absolute",
        backgroundColor: "secondary.dark",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <NextLink href="/about" passHref style={{ textDecoration: "none" }}>
              <Button variant="text" style={{ color: "#fafafa" }}>About US</Button>
            </NextLink>
            <NextLink href="/about" passHref style={{ textDecoration: "none" }}>
              <Button variant="text" color="primary" style={{ color: "#fafafa" }}>Contact US</Button>
            </NextLink>
          </Grid>
          <Grid item xs={12}>
            <Stack direction="row" spacing={1}>
              <NextLink href="https://github.com/orgs/Avniya/dashboard" passHref style={{ textDecoration: "none" }}>
                <IconButton aria-label="add to shopping cart">
                  <GitHubIcon sx={{
                    color: "secondary.light"
                  }} />
                </IconButton>
              </NextLink>
            </Stack>
            {/* <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Router`}
            </Typography> */}
          </Grid>
          <Grid item xs={12}>
            <Typography color="text.primary" variant="subtitle1">
              {`${new Date().getFullYear()} All rights reserved`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;