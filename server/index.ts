const express = require('express');
const path = require("path");
const port: string | number = process.env.PORT || 8080;

express().use(express.static(path.join(__dirname, 'client/public')))

express().get('/', (req: any, res: any): void => {
   res.send('Hello world');
});

express().listen(port, (): void => {
   console.log(`server running on port ${port}`);
});
