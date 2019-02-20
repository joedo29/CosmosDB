function numberOfItems(input){
  const context = getContext();
  const collection = context.getCollection();
  const collectionLink = collection.getSelfLink();
  let response = context.getResponse();

  const querySpec = {
    // query: 'SELECT * FROM TestingCollection tc WHERE tc.id ="'+ input + '" and tc.Records.NumberOfItems < 5'
    // query: 'SELECT arr FROM TestingCollection tc JOIN arr IN tc.Records WHERE tc.id = "' +  udf.split(input) + '" AND arr.TrackingNumber = 524126151'
    query: 'SELECT arr FROM TestingCollection tc JOIN arr IN tc.Records WHERE tc.id = udf.splitInt("' +  input + '")[0] AND arr.NumberOfItems < udf.splitInt("' +  input + '")[1]'
  };


  collection.queryDocuments(collectionLink, querySpec, {}, (err, res) => {
  response.setBody({
      documents: res
    });
      })
}
