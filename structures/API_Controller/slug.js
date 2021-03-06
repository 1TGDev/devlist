const fetch = require('node-fetch');
require('colors');

module.exports = async function(arg){
	if(!arg) throw new TypeError("slug method first argument must be a slug or vanity url");
	arg = arg.split("www.devlist.vip/").join("").split("devlist.vip/").join("").split("https://").join("").split("http://").join("")
	arg = arg.split("www.devlist.me/").join("").split("devlist.me/").join("").split("https://").join("").split("http://").join("")
	arg = arg.split("www.dlist.me/").join("").split("dlist.me/").join("").split("https://").join("").split("http://").join("")
	let data = await fetch("https://dlist.dev/api/slug/" + encodeURIComponent(arg)).then(res => res.json());
	return data.user;
}