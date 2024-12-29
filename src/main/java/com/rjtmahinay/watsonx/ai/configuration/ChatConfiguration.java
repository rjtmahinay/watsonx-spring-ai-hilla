package com.rjtmahinay.watsonx.ai.configuration;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.watsonx.WatsonxAiChatModel;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ChatConfiguration {

    /**curl
     * This method is used to create a ChatClient bean.
     * @param watsonxAiChatModel The chat model to be used
     * @return The ChatClient bean
     */
    @Bean
    ChatClient watsonxChatClient(WatsonxAiChatModel watsonxAiChatModel) {
        return ChatClient.builder(watsonxAiChatModel)
                .defaultSystem("You are a helpful ai assistant").build();
    }
}
