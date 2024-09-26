# S3rver Mock S3 Server

## Purpose

This project uses the `s3rver` library to set up a local mock S3 server for development and testing purposes. It provides a simulated Amazon S3 environment without requiring an actual AWS S3 account, making it useful for local testing.

## Installation

1. **Clone the Repository:**

   Clone this repository to your local machine:

   ```
   git clone https://github.com/dev-zha/s3rver-mock-server
   cd s3rver-mock-server
   ```

2. **Install dependencies:**

Use npm to install the necessary packages:

```
npm install
```

5. **Run the server:**
   Start the mock S3 server:

```
npm run start
```

By default, the server will run on port `4569`. You can change this by modifying the configuration in the code.

## Usage

When interacting with the mock S3 server, use the following credentials for authentication:

```
{
  accessKeyId: "S3RVER",
  secretAccessKey: "S3RVER",
}
```

Sample S3 Setup

```
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
  accessKeyId: 'S3RVER',
  secretAccessKey: 'S3RVER',
  region: 'us-east-1',
  endpoint: 'http://localhost:4569',
  s3ForcePathStyle: true, // Required for s3rver
});
```

With this configuration, you can perform common S3 operations like creating buckets, uploading files, or retrieving objects.

## Notes:

- `s3ForcePathStyle: true` is required when working with s3rver to ensure correct URL formatting.
- This server is intended for local development and testing only and should not be used in production environments.

For more detailed information on usage and additional configuration options, please refer to the [s3rver documentation](https://github.com/jamhall/s3rver).
