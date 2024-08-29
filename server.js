const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/meals', require('./routes/mealRoutes'));

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
