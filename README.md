# UrbanHarvest

UrbanHarvest is a modern web application designed to help users discover, grow, and manage urban produce. It features user authentication, a dashboard for personalized gardening tips, and a clean, responsive UI built with React and Vite.

## Features

- **User Authentication:** Register, log in, and manage your profile securely.
- **Dashboard:** Personalized dashboard with search functionality for produce and gardening tips.
- **Gardening Tips:** Access helpful tips for urban gardening.
- **Produce Cards:** Browse and learn about different produce items.
- **Map Integration:** (Planned) Visualize local produce and gardens on an interactive map.
- **Modern UI:** Responsive design with reusable React components.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/anandku06/urbanHarvest.git
cd urbanHarvest
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173` by default.

## Project Structure

- `src/` - Main source code
  - `components/` - Reusable React components (Header, Dashboard, AuthModal, etc.)
  - `data/` - Mock data for development
  - `hooks/` - Custom React hooks (e.g., authentication)
  - `types/` - TypeScript type definitions
- `public/` - Static assets
- `index.html` - Main HTML file
- `vite.config.ts` - Vite configuration

## Planned Improvements

- Backend/API integration for real data and authentication
- Map and location features
- User profile management
- Error handling and notifications
- Testing and CI/CD setup

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
