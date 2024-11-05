import json

import pytest
from faker import Faker
from pytest_steps import test_steps

from helpers.session import Session

fake = Faker()

import requests


goal_url = '/team/9012463084/goal'
session = Session()

@pytest.fixture
def create_goal():
    body = {
        "name": fake.name(),
        "due_date": 1568036964079,
        "description": fake.text(10),
        "color": "#32a852"
    }
    response = session.post(f'{goal_url}', data=body)
    return response

def test_get_goals():
    response = session.get(f'{goal_url}')
    assert  response.status_code == 200, f"Request failed with body {response.text}"

def test_post_goal_from_file():
    with open('TestData/create_goal.json', 'r') as file:
        data = json.load(file)
    response = session.post(f'{goal_url}', data=data)
    assert  response.status_code == 200, f"Request failed with body {response.text}"

@test_steps('Create new goal', 'Get goal')
def test_get_goal():
    body = {
        "name": fake.name(),
        "due_date": 1568036964079,
        "description": fake.text(10),
        "color": "#32a852"
    }
    response = session.post(f'{goal_url}', data=body)
    yield
    goal_id = response.json()['goal']['id']
    response = session.get(f'/goal/{goal_id}')
    assert  response.status_code == 200, f"Request failed with body {response.text}"
    yield

@pytest.mark.parametrize('parameter_name, status', [
    (fake.name(), 200),
    ("   ", 200),
])

def test_put_goal(create_goal,parameter_name, status):
    goal_id = create_goal.json()['goal']['id']
    new_body = {
        "name": parameter_name,
        "due_date": 1568036964079,
        "description": fake.text(10),
        "color": "#32a852"
    }
    response = session.put(f'/goal/{goal_id}',data=new_body)
    assert  response.status_code == status, f"Request failed with body {response.text}"

def test_delete_goal(create_goal):
    goal_id = create_goal.json()['goal']['id']
    response = session.delete(f'/goal/{goal_id}')
    assert  response.status_code == 200, f"Request failed with body {response.text}"

def test_post_goals_key(create_goal):
    key_body = {
        "name": fake.name(),
        "type": "number",
        "steps_start": 0,
        "steps_end": 10,
        "unit": "km",
        "task_ids": [],
        "list_ids": []
    }
    goal_id = create_goal.json()['goal']['id']
    response = session.post(f'/goal/{goal_id}/key_result', data=key_body)
    assert  response.status_code == 200, f"Request failed with body {response.text}"

def test_put_goals_key(create_goal):
    key_body = {
        "name": fake.name(),
        "type": "number",
        "steps_start": 0,
        "steps_end": 10,
        "unit": "km",
        "task_ids": [],
        "list_ids": []
    }
    new_key_body = {
        "name": fake.name(),
        "type": "number",
        "steps_start": 0,
        "steps_end": 10,
        "unit": "km",
        "task_ids": [],
        "list_ids": []
    }
    goal_id = create_goal.json()['goal']['id']
    response = session.post(f'/goal/{goal_id}/key_result', data=key_body)
    key_id = response.json()['key_result']['id']
    response = session.put(f'/key_result/{key_id}', data=new_key_body)
    assert  response.status_code == 200, f"Request failed with body {response.text}"

def test_delete_goals_key(create_goal):
    key_body = {
        "name": fake.name(),
        "type": "number",
        "steps_start": 0,
        "steps_end": 10,
        "unit": "km",
        "task_ids": [],
        "list_ids": []
    }
    goal_id = create_goal.json()['goal']['id']
    response = session.post(f'/goal/{goal_id}/key_result', data=key_body)
    key_id = response.json()['key_result']['id']
    response = session.delete(f'/key_result/{key_id}')
    assert  response.status_code == 200, f"Request failed with body {response.text}"