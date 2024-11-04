package org.example.rest;

import io.restassured.response.Response;

public class TagsRestClient extends BaseRestClient{

    String addTagToTaskUrl = "/task/86960qbfu/tag/Tag Name";

    public TagsRestClient(){
        this.setUpRestAssured();
    }

    public Response postTagToTask(){
        return this.requestSpec.post(addTagToTaskUrl);
    }

    public Response deleteTagFromTask(){
        return this.requestSpec.delete(addTagToTaskUrl);
    }

}