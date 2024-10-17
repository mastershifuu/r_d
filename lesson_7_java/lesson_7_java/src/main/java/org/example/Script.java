package org.example;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.File;
import java.io.IOException;

public class Script {

    public static JsonNode readJsonFile(String filePath) throws IOException {
        ObjectMapper objectMapper = new ObjectMapper(); // Створюємо об'єкт ObjectMapper
        return objectMapper.readTree(new File(filePath)); // Читаємо JSON-файл і повертаємо JsonNode
    }

    public static void main(String[] args) throws IOException {
        JsonNode rootNode = readJsonFile("spaces.json");
        JsonNode folders = rootNode.path("folders");
        for (JsonNode folder : folders) {
            JsonNode lists = folder.path("lists");
            
            for (JsonNode list : lists) {
                System.out.println("List ID: " + list.path("id").asText());
            }

            for (JsonNode list : lists) {
                String listName = list.path("name").asText();
                if (listName.toLowerCase().startsWith("test")) {
                    String spaceName = list.path("space").path("name").asText();
                    String spaceId = list.path("space").path("id").asText();
                    System.out.println("Space Name: " + spaceName + ", Space ID: " + spaceId);
                }
            }
        }
    }
}
