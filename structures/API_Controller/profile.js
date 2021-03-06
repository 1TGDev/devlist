const fetch = require('node-fetch');
require('colors');

module.exports = async function(arg, property){
	if(!arg || isNaN(arg)) throw new TypeError("profile method first argument must be a user ID");
	let url = "https://dlist.dev/api/profile/" + encodeURIComponent(arg);
	let data = await fetch(url).then(res => res.json());
	return data.message ? false : (property ? data[property] : data);
}