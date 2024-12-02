# watsonx-spring-ai-hilla

This is a demonstration of creating a simple chatbot using watsonx.ai and Spring AI. This
chatbot includes basic chat and streaming chat.

## JDK
The following project uses JDK 21.

### Chatbot Environment Variables

The chatbot needs to connect to watsonx.ai platform using an API Key and Project ID. These 2 properties is hidden and
is declared in _env_vars.properties_

* Under the root project folder (watsonx-spring-ai-hilla), create a folder named _config_
* Create a file named _env_vars.properties_ under the config folder
* Define the properties below in the file:

```properties
API_KEY=
PROJECT_ID=
```

## How to Run
### Recommended

* Find in the project directory the class called <i>WatsonxSpringAiHillaApplication</i>
* Right-click and choose _Run_

#### Running the Application

* Access in your browser the following URLs
  * Basic Chat: http://localhost:8080/chat
  * Streaming Chat: http://localhost:8080/streaming-chat
* It should display a chatbot view

#### Optional Only: Terminal

The terminal approach assumes that you have a JAVA_HOME environment variable in your laptop and it is pointing
in JDK 21.

For people who are inclined to start an application via terminal, please run the command below:

* In your terminal, change directory to this project (watsonx-spring-ai-hilla)
* Run the following command
  * Windows
  ```shell
  gradlew bootRun
  ```
  * Linux and Mac
  ```shell
    ./gradlew bootRun
  ```
     OR
  ```shell
    sh ./gradlew.sh bootRun
  ```

## Documentations

* Spring AI: https://docs.spring.io/spring-ai/reference/
* Hilla Framework by Vaadin: https://vaadin.com/docs/latest/hilla/guides
* watsonx.ai SaaS: https://dataplatform.cloud.ibm.com/docs/content/wsj/getting-started/welcome-main.html?context=wx&audience=wdp