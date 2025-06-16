export default ({env}) => ({
  email: {
    config: {
      provider: 'amazon-ses',
      providerOptions: {
	key: env('AWS_ACCESS_KEY_ID'),
	secret: env('AWS_ACCESS_SECRET'),
	amazon: 'https://email.us-east-1.amazonaws.com',
      },
      settings: {
	defaultFrom: 'support@thebiliapp.com',
	defaultReplyTo: 'support@thebiliapp.com',
      },
    },
  },
  'strapi-v5-plugin-populate-deep': {
    config: {
      defaultDepth: 5,
    }
  },
  "strapi-csv-import-export": {
    config: {
      authorizedExports: [
	"api::affirmation.affirmation",
	"api::dn-d.dn-d",
	"api::multiple-choice.multiple-choice",
	"api::story.story",
	"api::story-vocabulary-list.story-vocabulary-list",
	"api::would-do.would-do",
	"api::count-with-me.count-with-me",
	"api::intruder.intruder",
	"api::sel-question.sel-question",
	"api::story-factory.story-factory",
	"api::tell-me-about.tell-me-about"
      ],
    }
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
	s3Options: {
	  credentials: {
	    accessKeyId: env('AWS_ACCESS_KEY_ID'),
	    secretAccessKey: env('AWS_ACCESS_SECRET'),
	  }
	},
	region: env('AWS_S3_REGION'),
	params: {
	  ACL: env('AWS_ACL', 'public-read'),
	  signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
	  Bucket: env('AWS_S3_BUCKET'),
	},
      },
      actionOptions: {
	upload: {},
	uploadStream: {},
	delete: {},
      },
    },
  },
});
