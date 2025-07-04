const pool = require('./pool');

const db = {

    async getAllMessages() {
        const result = await pool.query("SELECT * FROM messages");
        return result.rows;
    },

    async addNewMessage(text, username, added) {
        await pool.query("INSERT INTO messages (text, username, added) VALUES ($1, $2, $3)",
            [text, username, added]);
    }
}
// add delete message function

module.exports = { db }