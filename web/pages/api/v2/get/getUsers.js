import getUsers from "../../../../bdd/get/users"

export default async (req, res) => {
    const {number} = req.query
    const users = await getUsers(number)
    return res.status(200).json({users})
}