import getUserInfos from "../../../../bdd/get/getUsers"

export default async (req, res) => {
    const {name} = req.query
    const user = await getUserInfos(name)
    return res.status(200).json({user})
}