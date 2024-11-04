package org.example.rest;

import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import net.serenitybdd.rest.SerenityRest;

public abstract class BaseRestClient {
    private String token = "pk_2144460532_2SPIKO31DEIQHJM0RMIPY6311W96U1MR";
    private String baseURL = "https://api.clickup.com/api/v2";

    protected RequestSpecification requestSpec;

    public void setUpRestAssured() {
        this.requestSpec = SerenityRest.given()
                .baseUri(this.baseURL)
                .header("Authorization", token)
                .contentType(ContentType.JSON);
    }
}
