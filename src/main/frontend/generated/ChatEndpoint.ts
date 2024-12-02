import { EndpointRequestInit as EndpointRequestInit_1, Subscription as Subscription_1 } from "@vaadin/hilla-frontend";
import client_1 from "./connect-client.default.js";
async function generateMessage_1(userInput: string | undefined, init?: EndpointRequestInit_1): Promise<string | undefined> { return client_1.call("ChatEndpoint", "generateMessage", { userInput }, init); }
function generateStreamingMessage_1(userInput: string | undefined): Subscription_1<string | undefined> { return client_1.subscribe("ChatEndpoint", "generateStreamingMessage", { userInput }); }
export { generateMessage_1 as generateMessage, generateStreamingMessage_1 as generateStreamingMessage };
