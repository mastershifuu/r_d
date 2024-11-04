package org.example.steps;

import io.cucumber.java.en.Then;

public class ResponseSteps extends BaseSteps{

    @Then("Check that status code is {int}")
    public void checkStatus(int status){
        sharedTestData.getResponse().then().statusCode(status);
    }

}
