import getPosts from "../../../../bdd/posts"

export default async (req, res) => {
    const {number} = req.query
    const posts = await getPosts(number)
    return res.status(200).json({posts})
}