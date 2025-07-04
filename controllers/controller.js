const { db } = require('../db/query');


const controller = {
    async getMessages(req, res) {
        try{
        const result = await db.getAllMessages();
        console.log(result);
        res.render('indexTemplate', { messages: result});
        } catch(err) {
            res.status(500).send('Error retrieving messages');
        }
    },

    async addMessage(req, res) {
        try{
            const { username, text } = req.body;
            console.log(username, text);
            await db.addNewMessage(text, username, new Date());
            res.redirect('/');
        } catch(err) {
            res.status(500).send('Error adding new message: ' + err);
        }
    }

}

module.exports = controller;
