# COVID-19 API Project

## Overview
This is a static web application for exploring historical COVID-19 statistics for India. It presents national totals, a historical archive table, date-range filtering, and a modal view for regional details on each day.

The app fetches data from the public Rootnet India COVID-19 API and caches the response in `localStorage` for faster repeat visits.

## Features
- Displays summary totals for confirmed cases, recoveries, and deaths.
- Shows a historical archive of daily COVID-19 statistics.
- Supports filtering records by date range.
- Opens a modal with regional breakdowns for a selected date.
- Uses Bootstrap for layout and responsive behavior.
- Stores fetched API data in `localStorage` to reduce repeat requests.

## Tech Stack
- HTML5
- CSS3
- JavaScript
- Bootstrap 5
- Font Awesome
- Remix Icon
- Google Fonts

## Project Structure
```text
index.html
assets/
  css/
    bootstrap.min.css
    style.css
  js/
    bootstrap.bundle.min.js
    script.js
```

## Data Source
The app consumes this endpoint:

`https://api.rootnet.in/covid19-in/stats/history`

The response is used to populate the table, the modal, and the summary statistics shown on the page.

## Getting Started
Because this is a static front-end project, no build step is required.

### Prerequisites
- A modern web browser
- Internet access for the API request and external font/icon assets

### Run the Project
1. Open the project folder in VS Code or File Explorer.
2. Open `index.html` in a browser, or use a local static server such as Live Server in VS Code.
3. Wait for the data to load from the API.

## How to Use
1. Open the homepage to see the current summary cards and historical archive.
2. Use the start and end date fields to filter the archive.
3. Click `Filter` to show records in the selected range.
4. Click `Rest Filter` to return to the full dataset.
5. Click `View Details` on any row to open the regional breakdown modal.

## Behavior Notes
- The app saves the API payload in `localStorage` under the key `COVID-19`.
- The date filter only accepts dates between `2020-03-10` and `2021-12-15`.
- The page depends on external CDN assets for icons and fonts.

## Known Limitations
- The data is historical and not live-updating.
- If the API is unavailable, the archive will not load until the request succeeds again.
- Clearing browser storage removes the cached dataset and forces a new API fetch.

## Troubleshooting
- If the page appears blank or incomplete, check your network connection.
- If the API request fails, try refreshing the page after the connection is restored.
- If the table does not update after filtering, make sure both date fields are filled in.

## Contributing
If you want to improve the project, a good place to start is:
- refining the UI and table layout,
- adding better error handling for failed API requests,
- improving accessibility and keyboard navigation,
- or replacing the archived API source if a newer dataset is available.

## Live Link
[CoviStats](https://covistats.vercel.app/)

## License
No license file is included in this project. Add one if you want to define reuse or distribution terms.
