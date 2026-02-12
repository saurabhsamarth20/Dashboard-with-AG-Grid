# Employee Dashboard (JavaScript)

Professional React Dashboard built with AG Grid and JavaScript.

## Tech Stack
- React 18
- Vite
- AG Grid Community (v33)
- JavaScript (ES Modules)
- CSS Modules / Standard CSS

## Features
- Scalable Employee Grid with 20 mock records.
- **Enterprise Features**:
    - Multi-column Sorting
    - Complex Filtering (Text, Number, Date)
    - Pagination
    - Row Selection
- **Rich UI**:
    - Status Badges
    - Skills Chips
    - Rating Color Indicators
    - Formatted Currency & Dates

## Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Folder Structure
```
src/
 ├── components/       # Reusable UI components
 │    ├── EmployeeGrid.jsx
 │    ├── Header.jsx
 ├── data/            # Mock data source
 │    └── employees.js
 ├── utils/           # Helper functions
 │    └── formatters.js
 ├── App.jsx          # Main layout
 └── main.jsx         # Entry point
```
