const app = require('./src/app');
const { PORT } = require('./src/config');

app.listen(PORT, () => {
  console.log(`🚀 Server running on port http://localhost:${PORT}/api-docs`);
});