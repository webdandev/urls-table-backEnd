const handleAddlink = (req, res, db) => {
	const {name, url, email} = req.body;
	if(!name || !url) {
    return res.status(400).json('something went wrong');
  }
	const date = new Date();
	db('display_links')
	.returning('*')	
	.insert({
		name: name,
		url: url,
		email: email,
		date: date,
	})	
	.then(link => {
		res.json(link);
	})
	.catch(err => res.status(400).json('something went wrong'));
}

module.exports = {
	handleAddlink: handleAddlink
};