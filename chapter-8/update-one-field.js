const collectionRef = db.collection('myCollection').doc('myDocument');
await collectionRef.update({fieldOne: 'newValueOne'});