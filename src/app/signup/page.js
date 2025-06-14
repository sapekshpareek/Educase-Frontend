import {
    Box,
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
    Typography,
} from "@mui/material";

export default function Signup() {
  return (
    <Box
      p={3}
      minHeight="100dvh"
      minWidth={"100vw"}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Typography variant="h4" fontWeight="bold">
          Create your
        </Typography>
        <Typography variant="h4" fontWeight="bold" mb={3}>
          PopX account
        </Typography>
        <Box component="form" display="flex" flexDirection="column" gap={2}>
          <TextField
            required
            color="secondary"
            label="Full Name"
            placeholder="Marry Doe"
            fullWidth
          />
          <TextField
            required
            color="secondary"
            label="Phone Number"
            placeholder="9999999999"
            fullWidth
          />
          <TextField
            required
            color="secondary"
            label="Email Address"
            placeholder="email@example.com"
            fullWidth
          />
          <TextField
            required
            color="secondary"
            label="Password"
            placeholder="********"
            type="password"
            fullWidth
          />
          <TextField
            required
            color="secondary"
            label="Company Name"
            placeholder="PopX Inc."
            fullWidth
          />
          <FormControl required color="secondary">
            <FormLabel color="secondary">Are you an Agency?</FormLabel>
            <RadioGroup row>
              <FormControlLabel value="yes" control={<Radio color="secondary"/>} label="Yes" />
              <FormControlLabel value="no" control={<Radio color="secondary"/>} label="No" />
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
      <Box>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2, p: 2 }}
          fullWidth
          href="/account"
          color="secondary"
        >
          <Typography fontWeight="bold">Create Account</Typography>
        </Button>
      </Box>
    </Box>
  );
}
