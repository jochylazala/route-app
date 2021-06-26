const express = require('express');
const router = express.Router();

const pool = require('../database');

router.get('/add',(req, res) => {
	res.render('links/add');
});

router.post('/add', async (req, res) =>{
	const { username, password, usertype } = req.body;
	const newUser = {
		username,
		password,
		usertype
	};
	console.log(newUser);
	await pool.query('insert into employee set ?', [newUser]);
	res.send('received');
});

router.get('/',async (req, res) => {
	const data = await pool.query('select * from employee');
	console.log(data);
	res.render('links/list', { data })

})

module.exports = router;