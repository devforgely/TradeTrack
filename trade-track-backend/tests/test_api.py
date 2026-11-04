from fastapi.testclient import TestClient

from app.domain.models import HealthResponse
from app.main import app

client = TestClient(app)


def test_health() -> None:
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_health_response_model() -> None:
    assert HealthResponse().model_dump() == {"status": "ok"}
