import getBooks from "../../../../bdd/get/getBooks"

export default async (req, res) => {
    const {number} = req.query
    const books = await getBooks(number)
    return res.status(200).json({books})
}