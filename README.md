# Django Fruit App

A small practice project created as part of the Developer Akademie. A Django backend serves a list of fruits as JSON, and a plain HTML/JavaScript frontend fetches that list and displays it in the browser. The fruit data is not stored in a database but in a local Python file that every user creates on their own. The project is meant to practice the connection between frontend and backend with `fetch`, a simple JSON endpoint and CORS.

## Quickstart

### Prerequisites

- Python 3 (a version supported by Django 6.1)
- Dependencies from `backend/requirements.txt`: Django 6.1.2, django-cors-headers 4.9.0 and more
- A way to serve the `frontend` folder on port 5500, for example the Live Server extension in VS Code

### Setup

Run these commands from the `backend` folder.

Create and activate a virtual environment (Windows PowerShell):

```powershell
python -m venv .venv
.venv/Scripts/Activate
```

On macOS/Linux, activate it with `source .venv/bin/activate` instead.

Install the dependencies:

```bash
pip install -r requirements.txt
```

### Create the fruit data

The data file `fruits_db.py` is listed in `.gitignore` and is therefore not part of the repository. Create it yourself at `backend/fruit_app/fruits_db.py`. It must contain a list called `fruits`, and each entry needs the keys `name`, `weight` and `color`, which the frontend displays. Example:

```python
fruits = [
    {"name": "Apple", "weight": 0.2, "color": "red"},
    {"name": "Banana", "weight": 0.15, "color": "yellow"},
]
```

## Usage

Start the backend from the `backend` folder:

```bash
python manage.py runserver
```

The list of fruits is now available as JSON at `http://127.0.0.1:8000/fruits/`.

Then serve the `frontend` folder on port 5500 and open `index.html`, for example via Live Server at `http://127.0.0.1:5500`. On load, `script.js` fetches the fruits from the backend and renders each one with its name, weight in kg and color.

## Notes

- The backend only allows cross-origin requests from `http://127.0.0.1:5500` and `http://localhost:5500` (configured with `CORS_ALLOWED_ORIGINS` in `backend/core/settings.py`). The frontend must be served on one of these addresses, otherwise the browser blocks the request.
- The backend URL `http://127.0.0.1:8000/fruits/` is hard-coded in `frontend/script.js`.
- The app has no models and no database tables for the fruits, the data comes entirely from `fruits_db.py`.
