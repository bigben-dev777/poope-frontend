import { DeleteOutlineOutlined, FileUploadOutlined } from "@mui/icons-material";
import { Button, Paper, Stack, Typography } from "@mui/material";
import FormInput from "../FormInput";

const ProfileCard = () => {
  return (
    <Paper
      sx={(theme) => ({
        [theme.breakpoints.down("md")]: {
          background: "transparent",
        },
      })}
    >
      <Stack
        flex={1}
        sx={{
          flexDirection: "row",
          gap: "14px",
          flexWrap: "wrap",
          padding: "24px",
          justifyContent: "center",
        }}
      >
        <Stack sx={{ width: "100%" }}>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Inter",
            }}
          >
            Account info
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Update your photo and personal details here
          </Typography>
        </Stack>
        <Stack
          sx={{
            border: "1px solid #ECECEC",
            borderRadius: "16px",
            padding: "16px",
            gap: "24px",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <img src="./assets/user2.png" width="150px" height="150px" />
          </Stack>
          <Stack direction="row" justifyContent="space-between" gap="24px">
            <Button
              color="inherit"
              variant="contained"
              startIcon={<FileUploadOutlined />}
            >
              UPLOAD
            </Button>
            <Button
              color="inherit"
              variant="contained"
              startIcon={<DeleteOutlineOutlined />}
            >
              DELETE
            </Button>
          </Stack>
        </Stack>
        <Stack flex={1}>
          <FormInput label="Full name" />
          <FormInput label="Email" />
          <Stack flexDirection="row" justifyContent="flex-end">
            <Button color="primary" variant="contained" size="large">
              SAVE CHANGES
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ProfileCard;
