export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
	useDefaults: true,
	directives: {
	  'connect-src': ["'self'", 'https:'],
	  'img-src': [
	    "'self'",
	    'data:',
	    'blob:',
	    `${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com`,
	  ],
	  'media-src': [
	    "'self'",
	    'data:',
	    'blob:',
	    `${process.env.AWS_S3_BUCKET}.s3.${process.env.AWS_S3_REGION}.amazonaws.com`,	    
	  ],
	  upgradeInsecureRequests: null,
	}
      }
    }
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
