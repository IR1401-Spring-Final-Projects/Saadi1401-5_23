import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectMenu,
  setCluster,
  setClusterAnimation,
} from "../../app/menuReducer";

// const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const ClusterCheckBox = () => {
  const menu = useAppSelector(selectMenu);
  const dispatch = useAppDispatch();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      dispatch(setCluster(true));
      await new Promise((r) => setTimeout(r, 500));
      dispatch(setClusterAnimation(true));
      return;
    }
    dispatch(setCluster(false));
    dispatch(setClusterAnimation(false));
  };
  return (
    <Stack
      sx={{ px: 2,pr:3, bgcolor: "white", borderRadius: 2  }}
      direction="row"
      
      alignItems="center"
    >
      <Typography sx={{fontFamily: "Lalezar-Regular"}} > خوشه بندی</Typography>

      <Checkbox
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
        checked={menu.cluster}
        onChange={handleChange}
      />
    </Stack>
  );
};