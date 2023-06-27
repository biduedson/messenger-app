const { default: axios } = require('axios')
const authenticate = async (req, res) => {
    const { username } = req.body
    try {
        const r = await axios.put('https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "941bebf9-17d5-4836-9937-e7031b8d6dbe" } }
        )
        return res.status(r.status).json(r.data)
    } catch (err) {
        return res.status(err.response.status).json(err.response.data)
    }
}

module.exports = authenticate