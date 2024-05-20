import { uuid } from 'uuidv4';
import { db } from "../../../../../config/firebase"
import { doc, setDoc, deleteDoc, updateDoc, writeBatch } from 'firebase/firestore';

const COLLECTION = "dnd-game";

export default {
    beforeCreate(event) {
        event.params.data.uuid = uuid();
    },

    async afterCreate(event) {
        const { result } = event;
        const { createdBy,updatedBy, ...dataToStore } = result; // Exclude createdBy, updatedBy
	const {story, ...data} = await strapi.db.query('api::dn-d-game.dn-d-game')
	      .findOne({
		  where: {
		      id: result.id
		  },
		  populate: ['story', 'pieces']
	      });
        await setDoc(doc(db, COLLECTION, result.uuid), {
            ...dataToStore,
	    story: story.uuid
        });
    },

    async afterUpdate(event) {
	const {story, ...data} = await strapi.db.query('api::dn-d-game.dn-d-game')
	      .findOne({
		  where: {
		      id: event.result.id
		  },
		  populate: ['story', 'pieces']
	      });
	const { result } = event;
        const { createdBy,updatedBy, ...dataToUpdate } = result; // Exclude createdBy, updatedBy
        await setDoc(doc(db, COLLECTION, event.result.uuid), {
            ...dataToUpdate,
	    story: story.uuid
        })

    },

    async afterDelete(event) {
        await deleteDoc(doc(db, COLLECTION, event.result.uuid))
        
    },

    async beforeDeleteMany(event){
        const entries = await strapi.entityService.findMany('api::dn-d-game.dn-d-game', {
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


