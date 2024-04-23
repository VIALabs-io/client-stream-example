import { DataStreamClient } from "@vialabs-io/node-core/DataStreamClient";
import { IMessage } from "@vialabs-io/node-core/types/IMessage";

const client = new DataStreamClient("http://localhost:3000");

function handleMessage(message: IMessage): void {
    console.log(`Received message of type ${message.type}:`);
    console.log(message);
}

client.connect(handleMessage);
