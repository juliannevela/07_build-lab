const pool = require('../utils/pool');

module.exports = class Joke {
	setup;
	punchLine;
	jokeType;
	jokeId;
	userId;

	constructor(row) {
		const { setup, punchline, joke_type, joke_id, linked_user } = row;

		this.setup = setup;
		this.punchLine = punchline;
		this.jokeType = joke_type;
		this.jokeId = joke_id;
		this.userId = linked_user;
	}

	static async insertJoke(jokeId, setup, punchLine, jokeType, userId) {
		const { rows } = await pool.query(
			`INSERT INTO jokes(joke_id, setup, punchline, joke_type, linked_user)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING *`,
			[jokeId, setup, punchLine, jokeType, userId]
		);
		return new Joke(rows[0]);
	}

	static async getAllJokes() {
		const { rows } = await pool.query('SELECT * FROM jokes');
		return rows.map((joke) => new Joke(joke));
	}
};