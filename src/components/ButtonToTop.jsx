import { KeyboardArrowUp } from "@mui/icons-material";
import { Zoom, Box, Fab, useScrollTrigger } from "@mui/material";
import { useCallback } from "react";

const ButtonToTop = () => {
  // Use `window` instead of `body` as `document` will be `undefined` when the
  // hooks first runs. By default, useScrollTrigger will attach itself to `window`.
  const trigger = useScrollTrigger({
    // Number of pixels needed to scroll to toggle `trigger` to `true`.
    threshold: 100,
  });

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Zoom in={trigger}>
        <Box
          role="presentation"
          // Place the button in the bottom right corner.
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            zIndex: 5,
          }}
        >
          <Fab
            onClick={scrollToTop}
            color="primary"
            size="small"
            aria-label="Scroll back to top"
          >
            <KeyboardArrowUp fontSize="medium" />
          </Fab>
        </Box>
      </Zoom>
    </>
  );
};

export default ButtonToTop;
