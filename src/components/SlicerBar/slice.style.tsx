import { Box, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles"; // or '@mui/system'

const FixedTypography = styled(Typography)({
  fontSize: "20px",
  color: "#222", // fixed color, won't change with theme
});

const SliceContainer = styled(Box)(() => ({
  position: "relative",
  marginRight: "10px",
  maxWidth: "100%",
  "& ul": {
    position: "absolute",
    top: 1.31,
    left: 2,
    gap: 1,
  },
}));

type Props = {
  imgUrl: string;
  contents: {
    title: string;
    items: string[];
  }[];
};

export const Slice = ({ imgUrl, contents }: Props) => {
  return (
    <SliceContainer>
      <img src={imgUrl} />
      <Stack component={"div"}>
        {contents.map((content, index) => (
          <Stack component="ul" ml={`${300 * index}px`} key={content.title}>
            {content.items.map((item) => (
              <Stack component="li" key={item}>
                <FixedTypography variant="body2">{item}</FixedTypography>
              </Stack>
            ))}
          </Stack>
        ))}
      </Stack>
    </SliceContainer>
  );
};

export const SliceBarContainer = styled(Box)({
  position: "relative",
  overflowX: "scroll",
  overflowY: "hidden",
  maxWidth: "100vw",
  width: "fit-content",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export const SliceBarRoll = styled(Box)({
  position: "absolute",
  right: "0px",
  top: "50%",
  transform: "translate(0%,-50%)",
});
