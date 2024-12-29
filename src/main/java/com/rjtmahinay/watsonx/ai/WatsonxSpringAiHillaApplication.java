package com.rjtmahinay.watsonx.ai;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.component.page.AppShellConfigurator;

/**
 * The entry point of the Spring Boot application.
 *
 * Use the @PWA annotation make the application installable on phones, tablets
 * and some desktop browsers.
 *
 */
@SpringBootApplication
@Theme("my-theme")
public class WatsonxSpringAiHillaApplication implements AppShellConfigurator {

    public static void main(String[] args) {
        SpringApplication.run(WatsonxSpringAiHillaApplication.class, args);
    }
}
