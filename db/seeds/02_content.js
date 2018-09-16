exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex("content")
		.del()
		.then(function() {
			// Inserts seed entries
			return knex("content").insert([
				{
					title: "Brazil",
					description: "Best movie of all time",
					type: "movie",
					rating: 5,
					from_id: 1,
				},
				{
					title: "The Idiot",
					description: "Best book of all time",
					type: "book",
					rating: 5,
					from_id: 1,
				},
				{
					title: "Blood on the Tracks",
					description: "Best album of all time",
					type: "album",
					rating: 5,
					from_id: 1,
				},
				{
					title: "Inception",
					description: "Best movie of all time",
					type: "movie",
					rating: 5,
					from_id: 2,
				},
				{
					title: "Da Vinci Code",
					description: "Best book of all time",
					type: "book",
					rating: 5,
					from_id: 2,
				},
				{
					title: "Ghost Story",
					description: "Best album of all time",
					type: "album",
					rating: 5,
					from_id: 2,
				},
				{
					title: "ERASED",
					description: "Best movie of all time",
					type: "movie",
					rating: 5,
					from_id: 3,
				},
				{
					title: "Orlando",
					description: "Best book of all time",
					type: "book",
					rating: 5,
					from_id: 3,
				},
				{
					title: "Doolittle",
					description: "Best album of all time",
					type: "album",
					rating: 5,
					from_id: 3,
				},
				{
					title: "Bachelor in Paradise",
					description: "Best movie of all time",
					type: "movie",
					rating: 5,
					from_id: 4,
				},
				{
					title:
						"Some philsophy stuff Trevor thinks is a waste of time",
					description: "Best book of all time",
					type: "book",
					rating: 5,
					from_id: 4,
				},
				{
					title: "Postman Postman Postman",
					description: "Best album of all time",
					type: "album",
					rating: 5,
					from_id: 4,
				},
			]);
		});
};
