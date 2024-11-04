package org.example.steps;

import io.cucumber.java.en.When;
import io.restassured.response.Response;

public class ApiStepTaskTag extends BaseSteps {

    @When("Add tag to task")
    public void addTagToTaskFromFile() {
        Response response = tagsRestClient.postTagToTask();
        sharedTestData.setResponse(response);
    }

    @When("Remove tag from task")
    public void removeTagFromTaskFromFile() {
        Response response = tagsRestClient.deleteTagFromTask();
        sharedTestData.setResponse(response);
    }
}
