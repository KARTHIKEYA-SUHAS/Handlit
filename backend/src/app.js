const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errorMiddleware = require('./middlewares/error.middleware');

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

app.use(cors());
app.use(express.json());
app.use(express .urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/auth", require("./routes/auth.routes"));
app.use('/api', routes);

// error handler (always last)
app.use(errorMiddleware);

module.exports = app;