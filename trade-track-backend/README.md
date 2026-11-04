# TradeTrack Backend (Python)

FastAPI service for TradeTrack. Python is the default stack here for quantitative workflows, market data scraping, and model integration.

Tooling: **[uv](https://docs.astral.sh/uv/)**, **Pydantic**, **Ruff**, **pytest**.

## Layout

| Package | Role |
|---------|------|
| `app/api` | HTTP routes and OpenAPI |
| `app/application` | Use cases and orchestration |
| `app/domain` | Entities and value objects |
| `app/infrastructure` | DB, brokers, scrapers, ML runtime |

## Setup

Requires [uv](https://docs.astral.sh/uv/getting-started/installation/) and Python 3.11+ (`requires-python` in `pyproject.toml`).

```bash
cd trade-track-backend
copy .env.template .env   # Windows (use cp on Unix)
uv sync --all-groups
```

## Run

```bash
uv run uvicorn app.main:app --reload --host 127.0.0.1 --port 5205
```

- API: http://127.0.0.1:5205  
- OpenAPI UI: http://127.0.0.1:5205/docs  

Configuration lives in `.env` (gitignored). Start from **`.env.template`**, which lists all variables (prefix `TRADETRACK_`):

- `TRADETRACK_HOST`, `TRADETRACK_PORT`, `TRADETRACK_LOG_LEVEL`
- `TRADETRACK_CORS_ORIGINS` — JSON array, e.g. `["http://localhost:5173"]`

## Lint & test

```bash
uv run ruff check .
uv run ruff format --check .
uv run pytest
```
