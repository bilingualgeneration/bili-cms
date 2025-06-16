module.exports = {
    apps: [
	{
	    name: 'strapi-develop',
	    script: 'yarn',
	    args: 'develop',
	    env: {
		NODE_ENV: 'development',
	    },
	    exp_backoff_restart_delay: 100,
	},
    ],
}
