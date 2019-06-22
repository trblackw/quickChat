const router = require('express').Router();

router.get('/test', (req: any, res: any): void => {
   res.json({ name: 'tucker', age: 23 });
});

module.exports = router;
