const handleDisplay = (req, res, db) => {
	const {email} = req.body;
	db.select('*').from('display_links')
		.where({email: email})
		.then(userlinks => {					
			res.json(userlinks);
		})
		.catch(err => res.status(400).json('something went wrong'));
}

module.exports = {
	handleDisplay: handleDisplay
};