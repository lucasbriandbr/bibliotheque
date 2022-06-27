import getProfiles from "../../../../bdd/get/getProfiles"

export default async (req, res) => {
    const {number} = req.query
    const profiles = await getProfiles(number)
    return res.status(200).json({profiles})
}