import { Box, Button, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <Box p={3} minHeight="100dvh" width={"100vw"} display="flex" flexDirection="column" justifyContent="start">
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Signin to your PopX account
      </Typography>
      <Typography variant="body2" mb={3}>
        Lorem ipsum dolor sit amet. consectetur adipiscing elit.
      </Typography>
      <Box component="form" display="flex" flexDirection="column" gap={2}>
        <TextField color="secondary" required label="Email Address" placeholder="Enter email address" fullWidth />
        <TextField color="secondary" required type="password" label="Password" placeholder="Enter password" fullWidth />
        <Button type="submit" variant="contained" color="secondary" sx={{ mt: 2, p:2 }} fullWidth href="/account">
          <Typography fontWeight="bold">
          Login
            </Typography>
        </Button>
      </Box>
    </Box>
  );
}