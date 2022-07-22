import { getName } from '../../../../../bdd/get/user/getName'

export default async (req, res) => {
    const {string} = req.query
    const user = await getName(string)
    return res.status(200).json(user)
}