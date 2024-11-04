package org.example.steps;

import org.example.data.SharedTestData;
import org.example.rest.SpacesRestClient;
import org.example.rest.TagsRestClient;

public class BaseSteps {
    protected SpacesRestClient spacesRestClient = new SpacesRestClient();
    protected TagsRestClient tagsRestClient = new TagsRestClient();
    protected static SharedTestData sharedTestData= new SharedTestData();

}
