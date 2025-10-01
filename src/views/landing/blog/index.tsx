import { Box, Container, Stack, Typography } from "@mui/material";

import BlogArticle from "@/components/BlogCard";

import { initData } from "./blog.constant";
import { BlogGrid, BlogStack } from "./blog.style";

const Blog = () => {
  return (
    <Box component="section" id="community">
      <Container maxWidth="xl">
        <BlogStack
          sx={{
            padding: { xs: "50px 0px", lg: "150px 0px", xl: "150px 0px" },
          }}
        >
          <Stack component="h2" direction="row">
            <Typography component="span" variant="h2">
              STAY&nbsp;
            </Typography>
            <Typography component="span" variant="h2" color="textHighlight">
              UPDATE
            </Typography>
          </Stack>
          <BlogGrid container wrap="nowrap">
            {initData.articles.map((article) => (
              <BlogArticle article={article} key={article.title} />
            ))}
          </BlogGrid>
        </BlogStack>
      </Container>
    </Box>
  );
};
export default Blog;
