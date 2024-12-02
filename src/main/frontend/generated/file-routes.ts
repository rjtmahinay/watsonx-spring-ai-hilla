import type { AgnosticRoute } from "@vaadin/hilla-file-router/types.js";
import { createRoute } from "@vaadin/hilla-file-router/runtime.js";
import * as Page0 from "../views/@index.js";
import * as Page1 from "../views/chat/ChatView.js";
import * as Page2 from "../views/chat/StreamingChatView.js";
const routes: readonly AgnosticRoute[] = [
    createRoute("", false, Page0),
    createRoute("chat", false, [
        createRoute("ChatView", false, Page1),
        createRoute("StreamingChatView", false, Page2)
    ])
];
export default routes;
