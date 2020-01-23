/* eslint-disable */
const express = require('express');

const PORT = process.env.PORT || 3000;
const sourceDir = 'dist';
const app = express();

app.use(express.static(sourceDir));

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
  console.log(`Serving content from /${sourceDir}/`);
});