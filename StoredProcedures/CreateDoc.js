function SPCreateDoc(n) {

  var context = getContext();
  var container = context.getCollection();
  var collectionLink = container.getSelfLink();
  var fName = '';
  var lName = '';
  var shipAddress = '';
  var tracNumber = '';
  var numItems = '';
  var sendFirstName = '';
  var sendLastName = '';
  var sendAddress = '';

  var id = Math.floor(Math.random() * 100000) + 999999 + "";
  var jason =
   {
    'id': id,
    'size': n,
    'packages':[]
  };

  for(var i = 0 ; i<n ;i++){
    fName = getRandomFirstName();
    lName = getRandomLastName();
    shipAddress =  getRandomAdressName();
    tracNumber = Math.floor(Math.random() * 1000000) + 9999999;
    numItems = Math.floor(Math.random() * 7) + 1;
    sendFirstName = getRandomFirstName();
    sendLastName = getRandomLastName();
    sendAddress = getRandomAdressName();
    var package = {
      'firstName': fName,
      'lastName': lName,
      'shippingAddress': shipAddress,
      'trackingNumber': tracNumber,
      'numberOfItems': numItems,
      'senderFirstName': sendFirstName,
      'senderLastName': sendLastName,
      'senderAddress': sendAddress
    };
    jason.packages.push(package);
  }
  var accepted = container.createDocument(container.getSelfLink(),
         jason, callback);

     if (!accepted) return;

    // // This is called when collection.createDocument is done and the document has been persisted.
     function callback(err, doc, options) {
         if (err) throw err;

         // One more document has been inserted, increment the count.


         else
             // If we have created all documents, we are done. Just set the response.
             getContext().getResponse().setBody('Document(s) created!');

    }



  function getRandomFirstName(){

    var FirstName = ['Arron','Daniel','Curt','Anderson','Chuck','Gary','Brice','Lewis','Johnathon','Jason','Brent','Jefferson',
    'Milton','Eddy',' Bart','Andres','Allan','Marco','Antony','Michel','Matthew','Adrian','Leo','Darrick','Jordan','Darrell' ,
    'Federico','Brian','Chad','Mark','Lucia','Theressa','Jeanett','Irina','Hannah','Kourtney','Sheila','Cassi','Jodie','Carla',
    'Kathie','Daniella','April','Lisabeth','Tam','Alena','Fannie','Claudine','Fredricka','Arminda','Zella','Debora','Joana',
    'Lelia','Jacquelin','Rosalie','Monica','Alica','Malika','Charlyn'];

    return FirstName[Math.floor(Math.random()*59)];
  }
  function getRandomLastName(){
    var FirstName = [ 'Murillo','Ford','Ramirez','Page','Powers','Hendrix','Riley','Weeks','Keith','Conrad','Weber','Gilbert',
    'Perkins','Fuentes','Rush','Spence','Bailey','Graham','Neal','Shelton','Hull','Santana','Decker','Dorsey','Boyd','Romer','Kim',
    'Carter','Savage','Pierce','Norman','Fernandez','Buck','Knox','Elliott','Bates','Odom','Bishop','Dean','Mccoy','Malon',
    'Moreno','Cherry','Cordova','Poole','Clements','Velez','Harrell','Shah','Dalton','Bonilla','Frey','Graves','Harding',
    'Mcneil','Mckenzie','Hendricks','Porter','Herman'];

    return FirstName[Math.floor(Math.random()*59)];
  }
  function getRandomAdressName(){

    var Adress = ['10642 Anglo Hill Rd Cockeysville, Maryland(MD), 21030','7400 Mistwood Dr White Lake, Michigan(MI), 48383',
    '18 Adams Blvd Silver Bay, Minnesota(MN), 55614','1222 Skyline Dr Warrior, Alabama(AL), 35180',
    '17 Acres Dr Beaufort, South Carolina(SC), 29902','8214 Carter Ln Mechanicsville, Virginia(VA), 23111',
    '22250 Derrick Rd Pass Christian, Mississippi(MS), 39571','6461 Bastogne Dr Colorado Springs, Colorado(CO), 80902',
    '202 N Fairview St Madisonville, Texas(TX), 77864','18739 Swains Private Rd Lincoln, Delaware(DE), 19960',
    '409 N 1st St Marmaduke, Arkansas(AR), 72443','3045 Strickland St Baltimore, Maryland(MD), 21223',
    '1577 Catherine Lk Rd Jacksonville, North Carolina(NC), 28540','4112 Westbrook Dr #14 Ames, Iowa(IA), 50014',
    '721 Gaissert Rd Newborn, Georgia(GA), 30056','549 463rd Hwy ST rumann, Arkansas(AR), 72472',
    '1492 Cain Ct Douglasville, Georgia(GA), 30134','2947 Concord Blvd Concord, California(CA), 94519',
    '311 Kenilworth Rd Bay Village, Ohio(OH), 44140','103 W Bend St Farmerville, Louisiana(LA), 71241',
    '1005 Magnolia St Waynesboro, Mississippi(MS), 39367','6933 Stardust Trl Roscoe, Illinois(IL), 61073',
    '25 Russell St Carlisle, Massachusetts(MA), 01741','706 E Briar Ln Green Bay, Wisconsin(WI), 54301',
    '30047 278th Hwy W Nettleton, Mississippi(MS), 38858','520 North Rd #54B Kennedale, Texas(TX), 76060',
    '703 W Market St Bloomington, Illinois(IL), 61701 ','1051 Baumgardner Rd South Fork, Pennsylvania(PA), 15956',
    '3016 Catlett Rd Pleasant Grove, California(CA), 95668','1636 10th St Martin, Michigan(MI), 49070',
    '20654 S Farris Ct Colton, Oregon(OR), 97017','1535 W Thatcher Blvd Safford, Arizona(AZ), 85546',
    '6 158th Pl Calumet City, Illinois(IL), 60409','336181 E 950th Rd Wellston, Oklahoma(OK), 74881',
    '4543 Trail St Norco, California(CA), 92860','9445 Night Harbor Dr SE Leland, North Carolina(NC), 28451',
    '20654 S Farris Ct Colton, Oregon(OR), 97017','1535 W Thatcher Blvd Safford, Arizona(AZ), 85546',
    '6 158th Pl Calumet City, Illinois(IL), 60409','336181 E 950th Rd Wellston, Oklahoma(OK), 74881',
    '4543 Trail St Norco, California(CA), 92860','9445 Night Harbor Dr SE Leland, North Carolina(NC), 28451'];

    return Adress[Math.floor(Math.random()*41)];

}
}
