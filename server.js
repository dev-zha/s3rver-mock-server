const S3rver = require('s3rver');
const path = require('path');

const s3rver = new S3rver({
  port: 4569, // Port for the server to run on
  address: '127.0.0.1',
  region: 'us-east-1',
  directory: path.join(__dirname, 's3-mock-data'), // Directory to store mock S3 data
  silent: false, // Show logs or not
  configureBuckets: [
    {
      name: 'my-mock-bucket', // Mock bucket name
      configs: [],
    },
  ],
});

// Start the server
s3rver
  .run()
  .then((serverInstance) => {
    console.log(
      `S3rver is running on http://${serverInstance.address}:${serverInstance.port}`
    );
  })
  .catch((err) => {
    console.error('Error starting server:', err);
  });
