const Contact = require("../models/Contract");


exports.createContactService = async (data) => {
    console.log(data);
    const result = await Contact.create(data);
    return result
};


exports.getContactService = async (filters, queries) => {

    const contacts = await Contact.find(filters)
        .skip(queries.skip)
        .limit(queries.limit)
        .select((queries.fields))
        .sort(queries.sortBy)
    // const totalContact = await Contact.countDocuments(filters)
    // const pageCount = Math.ceil(totalProduct / queries.limit)

    return contacts
};




exports.updateContactService = async (productId, data) => {
    console.log(productId, data);
    // update mathod 1
    const result = await Contact.updateOne({ _id: productId }, { $set: data }, { runValidators: true })

    // update method 2
    // const product = await Product.findById(productId);
    // const result = await product.set(data).save();

    return result;
}




exports.deleteContactService = async (id) => {
    // console.log(id);
    const result = await Contact.deleteOne({ _id: id })
    return result
}


exports.addBulkContacttService = async (data) => {
    const result = await Contact.insertMany(data)
    return result;


}
