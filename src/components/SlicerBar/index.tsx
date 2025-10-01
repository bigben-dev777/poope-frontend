import { Stack } from "@mui/material";
import { Slice, SliceBarContainer, SliceBarRoll } from "./slice.style";

type Props = {
  data: {
    imgUrl: string;
    content: {
      title: string;
      items: string[];
    }[];
  }[];
};

export const SlicerBar = ({ data }: Props) => {
  return (
    <Stack
      sx={{
        position: "relative",
        alignItems: "flex-end",
        mt: "50px",
      }}
    >
      <SliceBarContainer>
        <Stack
          sx={{
            flexDirection: "row",
            width: "fit",
          }}
        >
          {data.map((slice) => (
            <Stack
              key={slice.imgUrl + slice.content[0].title}
              sx={{
                userSelect: "none",
              }}
            >
              <Slice imgUrl={slice.imgUrl} contents={slice.content} />
            </Stack>
          ))}
        </Stack>
      </SliceBarContainer>
      <SliceBarRoll>
        <img src="./assets/paper-roll.png" />
      </SliceBarRoll>
    </Stack>
  );
};
