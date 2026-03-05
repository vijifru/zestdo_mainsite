# Here are your Instructions
# ZestDo Mainsite

This repository contains the ZestDo web application:

* **frontend/** – React (Create‑React‑App) client
* **backend/**  – FastAPI server serving mock JSON data

## Prerequisites

* Node.js & npm (v18+ recommended)
* Python 3.8+ (use `python3`)
* [Homebrew](https://brew.sh) on macOS is optional but useful

## Frontend setup

1. Open a terminal and change to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install the JavaScript dependencies:

    ```bash
    npm install
    ```

3. (Optional) create a `.env.local` file to override environment variables:

    ```text
    REACT_APP_API_URL=http://127.0.0.1:8000
    ```

   CRA automatically loads `.env*` files. Variables must be prefixed with
   `REACT_APP_`.

4. Run the development server:

    ```bash
    npm start
    ```

   The app will be available at [http://localhost:3000](http://localhost:3000).
   The console output will show compile errors/warnings if any.

## Backend setup

Use a virtual environment to avoid conflicts with system Python.

1. Enter the backend directory and create/activate a venv:

    ```bash
    cd backend
    python3 -m venv venv
    source venv/bin/activate        # macOS/Linux
    ```

2. Install Python dependencies:

    ```bash
    python3 -m pip install --upgrade pip
    python3 -m pip install fastapi uvicorn python-multipart python-dotenv
    ```

3. (Optional) create a `backend/.env` file for configuration:

    ```text
    # backend/.env
    API_HOST=0.0.0.0
    API_PORT=8000
    SECRET_KEY=changeme
    ```

   Load it in `server.py` with `python-dotenv` (already done).

4. Start the server:

    ```bash
    uvicorn server:app --reload
    ```

   The API will listen on [http://127.0.0.1:8000](http://127.0.0.1:8000).
   Visit `/docs` for interactive Swagger UI.

## Using the application

* The React client calls the backend API (e.g. `/api/activities`) to fetch
  mock JSON data located in .
* The scroll‑to‑top behaviour, routing, Redux store, etc. are all configured
  as part of the client code.

## Troubleshooting

* **npm install errors** – remove `node_modules` and  and
  rerun `npm install`. Make sure `package.json` has the correct dependency
  versions (see project history).
* **“externally managed environment” with pip** – use a virtual env as shown
  above.
* **React path alias problems** – ensure `jsconfig.json` exists at the frontend
  root and imports are either aliased (`@/…`) or relative.

## Further development

* Add real persistence (database) – currently all data lives in JSON files.
* Extend API endpoints and Redux slices as the UI expands.
* Add authentication, form validations, tests, etc.

---

You should now be able to clone the repo, install dependencies and run both
servers locally. Happy hacking!