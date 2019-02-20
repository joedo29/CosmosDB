// IMPORTANT NOTES:
// 25 packages maximum
function updateJoe(id, fName, update) {
    var collection = getContext().getCollection();
    var collectionLink = collection.getSelfLink();
    var response = getContext().getResponse();

    tryQueryAndUpdate();

    function tryQueryAndUpdate(continuation) {
        var query = {query: 'SELECT * FROM root r WHERE r.id = ("' +  id + '")', parameters: [{name: "@id", value: id}]};
        var requestOptions = {continuation: continuation};

        var isAccepted = collection.queryDocuments(collectionLink, query, requestOptions, function (err, documents, responseOptions) {
            if (err) throw err;

            if (documents.length > 0) {
                console.log(documents[0]);
                tryUpdate(documents[0]);
            } else {
                throw new Error("Document not found.");
            }
        });
    }

    function tryUpdate(document) {
        var requestOptions = {etag: document._etag};

        var newAddress, i;

        newAddress = Object(update);
        for(var i = 0; i < document['size']; i++){
            if (document['Records'][i].ReceiverFirstName == fName)
                document['Records'][i].ShippingAddress = newAddress;

        }

        var isAccepted = collection.replaceDocument(document._self, document, requestOptions, function (err, updatedDocument, responseOptions) {
            if (err) throw err;
            response.setBody(updatedDocument);
        });
    }
}
