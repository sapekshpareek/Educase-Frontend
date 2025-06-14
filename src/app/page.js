import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      id="home"
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
        <Typography color="#74777b" variant="h6">Lorem ipsum dolor sit amet,</Typography>
        <Typography color="#74777b" variant="h6" mb={4}>
          consectetur adipiscing elit. Proin at.
        </Typography>
        <Link href="/signup" passHref>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{ mb: 2, p: 2 }}
          >
            <Typography fontWeight="bold">Create Account</Typography>
          </Button>
        </Link>
        <Link href="/login" passHref>
          <Button variant="contained"  fullWidth sx={{ p: 2, background: '#cebafb' }}>
            <Typography fontWeight="bold" color="#000000">Already Registered? Login</Typography>
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
