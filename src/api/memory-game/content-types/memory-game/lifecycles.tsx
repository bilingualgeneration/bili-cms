// AM
import { uuid } from 'uuidv4';
import { db } from "../../../../../config/firebase"
import { doc, setDoc, deleteDoc, updateDoc, writeBatch } from 'firebase/firestore';

const COLLECTION = "memory-game"

export default {
    beforeCreate(event) {
        event.params.data.uuid = uuid();
    },

    async afterCreate(event) {
        const { result } = event;
        const { createdBy,updatedBy, ...dataToStore } = result; // Exclude createdBy, updatedBy

        await setDoc(doc(db, COLLECTION, result.uuid), {
         ...dataToStore
        });
    },

    async afterUpdate(event) {
        const { result } = event;
        const { createdBy,updatedBy, ...dataToUpdate } = result; // Exclude createdBy, updatedBy

        await setDoc(doc(db, COLLECTION, event.result.uuid), {
            ...dataToUpdate
        })

    },

    async afterDelete(event) {
        await deleteDoc(doc(db, COLLECTION, event.result.uuid))
        
    },

    async beforeDeleteMany(event){
        
        const entries = await strapi.entityService.findMany('api::story-factory-game.story-factory-game', {
            filters: event.params.where,
            fields: ['uuid'],
            limit: 1000
          });

        const batch = writeBatch(db)

        for (const entry of entries) {
            batch.delete(doc(db, COLLECTION, entry.uuid))
        }

        await batch.commit();
    }
}
