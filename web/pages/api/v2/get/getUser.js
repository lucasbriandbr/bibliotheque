import getUserInfos from "../../../../bdd/get/getUsers"

export default async (req, res) => {
    const {number} = req.query
    const user = await getUserInfos(number)
    return res.status(200).json({user})
}