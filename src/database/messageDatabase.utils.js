import { db } from '../firebase';

function addMessage(props) {
    db
        .collection('messages')
        .add(
            {
                fName: props.fName,
                lName: props.lName,
                phone: props.phone,
                email: props.email,
                other: props.other,
                pet: props.pet,
            }
        )
        .then(() => { console.log(`Message added!`) })
}

export { addMessage };