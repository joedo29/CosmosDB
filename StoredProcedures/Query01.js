function getPackage(input){
    const context = getContext();
    const collection = context.getCollection();
    const collectionLink = collection.getSelfLink();
    let response = context.getResponse();


    const querySpec = {
      query:'SELECT arr FROM TestingCollection tc JOIN arr IN tc.Records WHERE tc.id = udf.splitStr("' +  input + '")[0] AND CONTAINS(arr.ShippingAddress, udf.splitStr("' +  input + '")[1])'

    };
    collection.queryDocuments(collectionLink, querySpec, {}, (err, res) => {
    response.setBody({
        documents: res
      });
       })
}
