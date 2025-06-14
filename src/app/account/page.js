import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";

export default function Account() {
  return (
    <Box minHeight="100dvh" width={"100vw"} background="#f7f8f9">
      <AppBar position="static" color="white" sx={{ p: 1 }}>
        <Toolbar>
          <Typography variant="h6">Account Settings</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{p:2}}>
        <Box display="flex" alignItems="center" gap={2} p={2}>
          <Avatar sx={{ width: 64, height: 64 }}>M</Avatar>
          <Box>
            <Typography variant="h6">Marry Doe</Typography>
            <Typography color="text.secondary">Marry@GmaiLCom</Typography>
          </Box>
        </Box>
        <Box>
          <Typography mt={2}>
            Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elitr. Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat Sed Diam
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
