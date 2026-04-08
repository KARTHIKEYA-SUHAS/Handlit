const app = require("./src/app");
const { PORT } = require("./src/config");

const chalk = require("chalk").default;
const boxen = require("boxen").default;

app.listen(PORT, () => {
  const message = `
🚀 Server running
🌐 http://localhost:${PORT}/api-docs
`;

  console.log(
    boxen(chalk.greenBright(message), {
      padding: 1,
      borderStyle: "round",
      borderColor: "green",
    }),
  );
});
