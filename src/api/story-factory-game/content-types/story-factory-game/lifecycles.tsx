import {uuid} from 'uuidv4';

module.exports = {
    async beforeCreate(event){
	event.params.data.uuid = uuid();
    }
};
