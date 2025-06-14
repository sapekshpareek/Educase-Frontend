import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from "@mui/material";

export default function Account() {
  return (
    <Box minHeight="100dvh" width={"100vw"} background="#f7f8f9">
      <AppBar position="static" elevation={0} color="default" sx={{ p: 1 }}>
        <Toolbar>
          <Typography variant="h6">Account Settings</Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" gap={2} position="relative">
          <Avatar
          src="https://randomuser.me/api/portraits/women/79.jpg" 
          sx={{ width: 80, height: 80 }}>M</Avatar>
          <IconButton
            size="2px"
            color="secondary"
            sx={{
              position: "absolute",
              left: 55,
              bottom: 0,
              color: "#ffffff",
              bgcolor: "secondary.main",
              border: "2px solid",
              borderColor: "secondary.main",
              zIndex: 1,
              p: 0.5
            }}
          >
            <CameraAltIcon fontSize="small" sx={{ zIndex: 2 }}/>
          </IconButton>
          <Box>
            <Typography variant="h6">Marry Doe</Typography>
            <Typography color="text.secondary">Marry@GmaiLCom</Typography>
          </Box>
        </Box>
        <Box>
          <Typography mt={2} variant="body2">
            Lorem Ipsum Dolor Sit Amet. Consetetur Sadipscing Elitr. Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat Sed Diam
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
