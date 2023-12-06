import { uuid } from 'uuidv4';
import { db } from "../../../../../config/firebase"
import { doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore';

const COLLECTION = "story-factory-game"

export default {
    beforeCreate(event) {
        event.params.data.uuid = uuid();
    },

    async afterCreate(event) {
        const { result } = event;

        await setDoc(doc(db, COLLECTION, result.uuid), {
            handle: result.handle,
            pack_name: result.pack_name,
            word_group: result.word_group,
        });
    },

    async afterUpdate(event) {
        const { result } = event;
        await updateDoc(doc(db, COLLECTION, event.result.uuid), {
            handle: result.handle,
            pack_name: result.pack_name,
            word_group: result.word_group,
        })
        
    },

    async afterDelete(event) {
        await deleteDoc(doc(db, COLLECTION, event.result.uuid))
    }
}
