const db = require("knex")(require("../../knexfile").development);
const bcrypt = require("bcryptjs");

const SALT_ROUNDS = 8;

module.exports = {
	getUsers() {
		return db("users").select("username");
	},

	addUser(user) {
		return db("users").insert(user);
	},

	login(username) {
		return db("users")
			.where({ username: username })
			.first();
	},

	getUser(id) {
		return db("users")
			.select("username")
			.where("id", id)
			.first();
	},

	updatePassword(id, password) {
		password = bcrypt.hashSync(password, SALT_ROUNDS);
		return db("users")
			.where("id", id)
			.update({
				username: undefined,
				password: password,
			});
	},

	getContent(id) {
		let content = db("content as c")
			.join("users_content as uc", "uc.content_id", "c.id")
			.join("users as u", "u.id", "c.from_id")
			.select(
				"c.title",
				"c.description",
				"c.rating",
				"c.type",
				"u.username as from",
			)
			.where("c.id", id)
			.first();

		let toUsers = db("users_content as uc")
			.join("users as u", "u.id", "uc.to_id")
			.select("u.username", "u.id")
			.where("uc.content_id", id);

		const promises = [content, toUsers];

		return Promise.all(promises).then(response => {
			let [content, toUsers] = response;
			content.to = toUsers;
			return content;
		});
	},

	//First 5 keys in argument are inserted into the content table, 6th key is
	//an array of user ids, all of which are added to the users_content table.
	addContent(content) {
		let { title, description, type, rating, from_id, to_idARR } = content;

		return db("content")
			.insert({ title, description, type, rating, from_id })
			.then(id => {
				let contentId = id[0];

				let recipients = to_idARR.map(to => ({
					to_id: to,
					content_id: contentId,
				}));

				return db("users_content")
					.insert(recipients)
					.then(ids => {
						return contentId;
					});
			})
			.catch(err => console.log(err));
	},

	addRecipients(toArr, content_id) {
		return Promise.all(
			toArr.map(to_id => {
				return Promise.resolve(
					db("users_content").insert({ to_id, content_id }),
				);
			}),
		);
	},

	removeRecipients(toArr, content_id) {
		return Promise.all(
			toArr.map(to_id => {
				return Promise.resolve(
					db("users_content")
						.where({ to_id, content_id })
						.del(),
				);
			}),
		);
	},

	getUserFriends(id) {
		let user = db("users as u")
			.select("u.username")
			.where("u.id", id)
			.first();

		let friends = db("friends as f")
			.join("users as u", "u.id", "f.omega_id")
			.select("u.username", "u.id")
			.where("f.alpha_id", id);

		const promises = [user, friends];
		return Promise.all(promises).then(response => {
			let [user, friends] = response;
			if (friends.length === 0) {
				friends = ["Trevor doesnt have friends"];
			}
			user.friends = friends;
			return user;
		});
	},

	addFriend(id, friendId) {
		return db("friends")
			.insert({ alpha_id: id, omega_id: friendId })
			.then(response => {
				return db("friends").insert({
					alpha_id: friendId,
					omega_id: id,
				});
			});
	},

	removeFriend(id, friendId) {
		return db("friends")
			.where("alpha_id", id)
			.andWhere("omega_id", friendId)
			.del()
			.then(response => {
				return db("friends")
					.where("alpha_id", friendId)
					.andWhere("omega_id", id)
					.del();
			});
	},
};
