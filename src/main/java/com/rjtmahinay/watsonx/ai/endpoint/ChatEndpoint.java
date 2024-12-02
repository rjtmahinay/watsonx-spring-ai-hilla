package com.rjtmahinay.watsonx.ai.endpoint;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.Endpoint;
import lombok.RequiredArgsConstructor;
import org.springframework.ai.chat.client.ChatClient;
import reactor.core.publisher.Flux;

@Endpoint
@AnonymousAllowed
@RequiredArgsConstructor
public class ChatEndpoint {

    private final ChatClient watsonxChatClient;

    public String generateMessage(String userInput) {
        return watsonxChatClient.prompt().user(userInput).call().content();
    }

    public Flux<String> generateStreamingMessage(String userInput) {
        return watsonxChatClient.prompt().user(userInput).stream().content();
    }
}
