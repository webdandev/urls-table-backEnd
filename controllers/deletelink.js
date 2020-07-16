const handleDelete = (req, res, db) => {
	const {url} = req.body;
	db('display_links').where('url', url).del()	
	.then(deleteresponse => {
		res.json(deleteresponse);
	})
	.catch(err => res.status(400).json('something went wrong'));	
}

module.exports = {
	handleDelete: handleDelete
};