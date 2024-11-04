package org.example.steps;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.restassured.response.Response;
import org.example.utils.RandomData;
import org.example.utils.ResourceUtils;
import org.json.JSONObject;

import java.io.IOException;

public class ApiStepSpaceTag extends BaseSteps {

    @Given("Sent request to get space tags")
    public void sentRequestToGetSpaceTags() {
        Response response = spacesRestClient.getSpaceTags();
        sharedTestData.setResponse(response);
    }

    @When("Create space tag from file {}")
    public void createSpaceTagFromFile(String path) throws IOException {
        RandomData randomData = new RandomData();
        String randomName = "my folder" + randomData.generateRandomString(7);
        String source = "data/" + path;
        JSONObject body = ResourceUtils.readJson(source);
        body.put("name", randomName);
        Response response = spacesRestClient.postSpaceTagFromFile(body.toString());
        sharedTestData.setResponse(response);
    }

    @When("Update space tag from file {}")
    public void updateSpaceTagFromFile(String path) throws IOException {
        String source = "data/" + path;
        JSONObject body = ResourceUtils.readJson(source);
        Response response = spacesRestClient.putSpaceTagFromFile(body.toString());
        sharedTestData.setResponse(response);
    }

    @When("Delete space tag from file {}")
    public void deleteSpaceTagFromFile(String path) throws IOException {
        String source = "data/" + path;
        JSONObject body = ResourceUtils.readJson(source);
        Response response = spacesRestClient.deleteSpaceTagFromFile(body.toString());
        sharedTestData.setResponse(response);
    }

}
