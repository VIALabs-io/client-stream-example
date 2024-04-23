# Client Data Stream Example

This repository demonstrates a practical implementation of the `DataStreamClient` from the `@vialabs-io/node-core` package. The example shows how to establish a connection, handle incoming messages, and process the realtime data from the validation cloud.

## Getting Started

### Prerequisites

- Node.js installed on your machine (v16.x or higher recommended).

### Installation

1. Clone the repository:

```bash
git clone https://github.com/vialabs-io/client-stream-example
cd client-stream-example
```

2. Install dependencies:

```bash
npm install
```

3. Build the project:

```bash
npm run build
```

### Usage

To run the client application:

```bash
node dist/index.js
```

This will start the client and connect it to a validator node running at `http://localhost:3000`, listening for any messages sent from the server.

## Example Code

Below is the code from the `src/index.ts` file showing how to use the `DataStreamClient`:

```typescript
import { DataStreamClient } from "@vialabs-io/node-core/DataStreamClient";
import { IMessage } from "@vialabs-io/node-core/types/IMessage";

const client = new DataStreamClient("http://localhost:3000");

function handleMessage(message: IMessage): void {
    console.log(`Received message of type ${message.type}:`, message);
}

client.connect(handleMessage);
```

## Features

- Connect to a WebSocket server using the `DataStreamClient`.
- Handle incoming messages dynamically.
- Easily integrate with existing Node.js applications.

## Contributing

If you wish to contribute to this repository, please fork the repository and submit a pull request.

## License

This project is licensed under a Commercial License. See the LICENSE file for details.
