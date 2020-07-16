const handleSignin = (req, res, db) => {
	const {email, password} = req.body;
	db.select('email', 'password').from('users')
		.where({email: email})
		.then(data =>	{			
			if (data[0].password === password) {
				return db.select('*').from('users')
				.where({email: email})
				.then(user => {					
					res.json(user[0])
				})
				.catch(err => res.status(400).json('unable to get user'))
			} else {
				res.status(400).json('wrong credentials');
			}
		})
		.catch(err => res.status(400).json('wrong credentials'))
}

module.exports = {
	handleSignin: handleSignin
};