import getProfiles from "../../../../bdd/get/profiles"

export default async (req, res) => {
    const {number} = req.query
    const profiles = await getProfiles(number)
    return res.status(200).json({profiles})
}