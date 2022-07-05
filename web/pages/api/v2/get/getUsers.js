import getUsers from "../../../../bdd/get/getUsers"

export default async (req, res) => {
    const {name} = req.query
    const users = await getUsers(name)
    return res.status(200).json({users})
}