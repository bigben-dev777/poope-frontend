import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
  article: { title: string; imgUrl?: string; content: string };
}

const BlogTitle = styled(Typography)({
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  width: "full",
});

const BlogContent = styled(Typography)({
  color: "#9F9F9F",
  userSelect: "none",
  fontWeight: 400,
  textOverflow: "ellipsis",
  overflow: "hidden",
  height: "70px",
  width: "full",
});

export default function BlogArticle({ article }: Props) {
  return (
    <Card
      sx={{
        minWidth: 312,
        width: 312,
        height: 400,
        touchAction: "pan-x",
        msTouchAction: "pan-x",
        background: "#ffffff00",
        boxShadow: "none",
      }}
    >
      <CardMedia
        sx={{ height: 200 }}
        image={
          article.imgUrl === undefined ? "./assets/update1.png" : article.imgUrl
        }
      />
      <CardContent
        style={{
          maxWidth: "100%",
        }}
      >
        <BlogTitle gutterBottom variant="h4">
          {article.title}
        </BlogTitle>
        <BlogContent variant="h5">{article.content}</BlogContent>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="contained" size="small">
          READ MORE
        </Button>
      </CardActions>
    </Card>
  );
}
