    // ~/strapi-aws-s3/backend/config/plugins.js
    
    module.exports = ({ env }) => ({
        upload: {
          config: {
            provider: 'aws-s3',
            providerOptions: {
              accessKeyId: process.env.AWS_ACCESS_KEY_ID,
              secretAccessKey: process.env.AWS_ACCESS_SECRET,
              region: process.env.AWS_REGION,
              params: {
                ACL: env('AWS_ACL', 'public-read'),
                signedUrlExpires: env('AWS_SIGNED_URL_EXPIRES', 15 * 60),
                Bucket: process.env.AWS_BUCKET,
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