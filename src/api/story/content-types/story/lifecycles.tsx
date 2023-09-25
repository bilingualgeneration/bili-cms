const {uuid} = require('uuidv4');

module.exports = {
    async beforeCreate(event){
	console.log(event.params.data);
	event.params.data.uuid = uuid();
    }
};
