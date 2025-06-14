import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box id="home"
      display="flex"
      justifyContent="flex-start"
      alignItems="flex-end"
      minHeight="100dvh"
      minWidth={"100vw"}
      p={2}
      pb={6}
    >
      <Box width="100%" id="home-content">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome to PopX
        </Typography>
        <Typography variant="body1" >Lorem ipsum dolor sit amet,</Typography>
        <Typography variant="body1" mb={4}>
          consectetur adipiscing elit. Proin at.
        </Typography>
        <Link href="/signup" passHref>
          <Button variant="contained" color="secondary" fullWidth sx={{ mb: 2, p: 1.5 }}>
            Create Account
          </Button>
        </Link>
        <Link href="/login" passHref>
          <Button variant="outlined" color="secondary" fullWidth sx={{ p: 2 }}>
            Already Registered? Login
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
