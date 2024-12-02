import {useState} from 'react';
import {MessageInput, MessageList, MessageListItem, VerticalLayout} from '@vaadin/react-components';

import aiIcon from '/images/ai.png';
import userIcon from '/images/business-man.png';
import './chat.css';
import {ChatEndpoint} from "Frontend/generated/endpoints";

interface Message {
    id: string;
    sender: string;
    content: string | undefined;
}

const ChatView = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const getMessageStyles = (isAI: boolean) => ({
        textAlign: isAI ? 'right' : 'left',
        '--vaadin-message-list-item-alignment': isAI ? 'flex-end' : 'flex-start',
    });

    const formatMessages = (messages: Message[]): MessageListItem[] => {
        return messages.map(message => {
            const isAI = message.sender === 'ai';
            return {
                text: message.content,
                userName: isAI ? 'AI Assistant' : 'You',
                userColorIndex: isAI ? 1 : 0,
                time: new Date().toLocaleTimeString(),
                userImg: isAI ? aiIcon : userIcon,
                theme: isAI ? 'ai-message' : 'user-message',
                style: getMessageStyles(isAI),
            };
        });
    };

    const handleSubmit = async (event: CustomEvent) => {
        const inputMessage = event.detail.value;
        if (inputMessage.trim() === '') return;

        const newUserMessage: Message = {
            id: Date.now().toString(),
            sender: 'user',
            content: inputMessage,
        };

        setMessages(prevMessages => [...prevMessages, newUserMessage]);
        setIsLoading(true);

        try {
            const response = await ChatEndpoint.generateMessage(inputMessage);

            console.info('AI response:', response);

            const aiResponse: Message = {
                id: (Date.now() + 1).toString(),
                sender: 'ai',
                content: response,
            };
            setMessages((prevMessages) => [...prevMessages, aiResponse]);
        } catch (error) {
            console.error('Error sending message:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-title">
                <h2>watsonx Chat</h2>
            </div>

            <div className="chat-box">
                <VerticalLayout
                    className="chat-layout"
                    style={{
                        height: '100%',
                        gap: '1rem'
                    }}
                >
                    <MessageList
                        items={formatMessages(messages)}
                        style={{
                            flexGrow: 1,
                            minHeight: 0,
                        }}
                        theme="icons"
                        className="message-list"
                    />

                    {isLoading && (
                        <div className="typing-indicator">
                            AI is typing...
                            <img
                                src={aiIcon}
                                alt="AI typing"
                                className="typing-avatar"
                            />
                        </div>
                    )}

                    <div className="input-container">
                        <MessageInput
                            className="message-input"
                            onSubmit={handleSubmit}
                            disabled={isLoading}
                            theme="icons"
                        />
                    </div>
                </VerticalLayout>
            </div>
        </div>
    );
};

export default ChatView;
