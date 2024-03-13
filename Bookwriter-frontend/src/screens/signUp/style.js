// SignUp/styles.js

export const styles = {
  boxContainer: {
    boxShadow: 3,
    borderRadius: 2,
    px: 4,
    py: 2,
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: (theme) => ({
    fontSize: "2rem",
    fontWeight: "bold",
    color: theme.palette.grey["900"],
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    marginBottom: "20px",
  }),
  form: {
    mt: 1,
  },
  button: {
    mt: 3,
    mb: 2,
  },
};
