import { Box } from "@mui/material";
import Header from "../Header/Header";

function Content({ children }) {
  return (
    <Box
      id="content"
      className="coteudo"
      component="div"
      sx={{ display: "grid" }}
    >
      <Header />
      <Box>
        <main>
          <h1>Aqui é o main</h1>
          {children}
        </main>
      </Box>
    </Box>
  );
}

export default Content;
