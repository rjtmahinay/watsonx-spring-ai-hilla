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

    /**
     * This method is used to generate a response from the chatbot.
     * @param userInput The user's input to the chatbot
     * @return The chatbot's response
     */
    public String generateMessage(String userInput) {
        return watsonxChatClient.prompt().user(userInput).call().content();
    }

    /**
     * This method is used to generate a streaming response from the chatbot.
     * @param userInput The user's input to the chatbot
     * @return The chatbot's response as a stream of strings
     */
    public Flux<String> generateStreamingMessage(String userInput) {
        return watsonxChatClient.prompt().user(userInput).stream().content();
    }
}
