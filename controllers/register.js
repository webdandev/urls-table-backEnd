const handleRegister = (req, res, db) => {
	const {email, password} = req.body;
	if(!email || !password) {
    return res.status(400).json('something went wrong');
  }
	db('users')
	.returning('*')
	.insert({
		email: email,
		password: password,
		joined: new Date(),
	})
	.then(user => {
		res.json(user[0]);
	})
	.catch(err => res.status(400).json('something went wrong'));
}

module.exports = {
	handleRegister: handleRegister
};