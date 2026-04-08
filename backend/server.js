const app = require("./src/app");
const { PORT } = require("./src/config");

const chalk = require("chalk").default;
const boxen = require("boxen").default;

app.listen(PORT, () => {
  const link = `\u001B]8;;http://localhost:${PORT}/api-docs\u0007Open SwaggerUI\u001B]8;;\u0007`;

  const message = `
🚀 Hello Captain, Server running successfully on port!
🌐 ${link}
`;

  console.log(
    boxen(chalk.greenBright(message), {
      padding: 1,
      borderStyle: "round",
      borderColor: "green",
    }),
  );
});
