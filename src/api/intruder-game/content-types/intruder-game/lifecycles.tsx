import {uuid} from 'uuidv4';
// todo: when including this in multile models, it breaks

module.exports = {
    async beforeCreate(event){
	event.params.data.uuid = uuid();
    }
};
