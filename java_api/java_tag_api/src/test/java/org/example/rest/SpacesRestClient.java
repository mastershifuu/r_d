package org.example.rest;

import io.restassured.response.Response;

public class SpacesRestClient extends BaseRestClient{

    String spaceTagsUrl = "/space/90121486817/tag";
    String spaceTagUrl = "/space/90121486817/tag/Tag Name";

    public SpacesRestClient(){
        this.setUpRestAssured();
    }

    public Response getSpaceTags(){
        return this.requestSpec.get(spaceTagsUrl);
    }

    public Response postSpaceTagFromFile(String payload){
        return this.requestSpec
                .body(payload)
                .post(spaceTagsUrl);
    }

    public Response putSpaceTagFromFile(String payload){
        return this.requestSpec
                .body(payload)
                .put(spaceTagUrl);
    }

    public Response deleteSpaceTagFromFile(String payload){
        return this.requestSpec
                .body(payload)
                .delete(spaceTagUrl);
    }


}
