import { db } from '../firebase';

async function fetchData() {
    let petData = [];
    const pets = await db
        .collection('pets')
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(documentSnapshot => {
                let item = {
                    id: documentSnapshot.id,
                    title: documentSnapshot.data().title,
                    age: documentSnapshot.data().age,
                    breed: documentSnapshot.data().breed,
                    image: documentSnapshot.data().image,
                }
                petData.push(item);
            });
        });
    return petData;
}

export { fetchData };