const Contact = require("../models/Contract")
const { createContactService, getContactService, updateContactService, deleteContactService, addBulkContacttService } = require("../services/contact.services")


exports.createContact = async (req, res, next) => {
    try {
        const result = await createContactService(req.body)

        res.status(200).json({
            status: true,
            message: "contact Insertade true",
            data: result
        })

    } catch (error) {
        res.status(400).json({
            status: false,
            message: "contact is not inseted",
            error: error.message,
        })
        console.log(error.message.name)
    }

}




exports.getContact = async (req, res, next) => {

    try {

        let filters = { ...req.query };
        // console.log(filters);
        const exclidefildes = ["sort", "page", "limit"]
        exclidefildes.forEach(field => delete filters[field])


        const queries = {}

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            queries.sortBy = sortBy;
            console.log(sortBy);
        }
        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            queries.fields = fields;
            console.log(fields);
        }
        if (req.query.page) {
            const { page = 1, limit = 2 } = req.query;
            const skip = (page - 1) * parseInt(limit)
            queries.skip = skip;
            queries.limit = parseInt(limit)
        }
        console.log(queries);


        const contact = await getContactService(filters, queries)
        res.status(200).json({
            status: true,
            message: "Successfully get data",
            data: contact
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Can't get the contact",
            error: error.message
        })
    }
}





exports.updateContact = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await updateContactService(id, req.body);
        res.status(200).json({
            status: true,
            message: "Successfully contact updated",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Contact cant't  update ",
            error: error.message
        })

    }
};


module.exports.getAContact = async (req, res) => {
    try {
        const { id } = req.params
        // console.log(id);
        const contact = await Contact.findById(id);
        res.status(200).json({
            status: true,
            message: "Successfully get data",
            data: contact
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Can't get the contact",
            error: error.message
        })
    }


}





exports.deleteAContact = async (req, res, next) => {
    try {
        const { id } = req.params
        const result = await deleteContactService(id);
        if (!result.deletedCount) {
            return res.status(400).json({
                status: false,
                error: "Couldn't delete the contact"
            })
        }

        res.status(200).json({
            status: true,
            message: "Successfully contact deleted",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "contact Cant't  deleted",
            error: error.message
        })

    }
};



exports.addBulkContact = async (req, res, next) => {
    try {
        // console.log(req.body, "this is bullk contact");
        const result = await addBulkContacttService(req.body);
        res.status(200).json({
            status: true,
            message: "Successfully Bulk contact added",
            result: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Bulk contact can't added",
            error: error.message
        })

    }
};
