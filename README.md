# Class of Grit Awards Night

**Class of Grit** is a comprehensive web application designed for the "Class of Grit Awards Night". It provides a modern, interactive platform for students to nominate peers, vote for awards, view event galleries, and generate digital tickets for the event.

## Features

- **Live Voting & Nominations**: Students can identify themselves using their Matric Number and submit nominations or cast votes across various categories.
- **Real-Time Analytics Dashboard**: Visualizes voting distributions using interactive bar and pie charts.
- **Digital Ticketing**: Generates personalized digital tickets with QR codes for event entry.
- **Event Gallery & Highlights**: View photos and videos from past events or related highlights.
- **Responsive & Premium UI**: Built with a sleek, glassmorphic design, smooth animations, and dark mode support.

## Tech Stack

- **Frontend**: React 19, Vite, TailwindCSS (v4), Framer Motion, Lucide React, Recharts
- **Backend**: Express.js (integrated with Vite via middleware), TypeScript
- **Icons & UI**: Lucide React for consistent iconography and TailwindCSS for styling.

## Installation

To run this project locally, ensure you have Node.js installed, then follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ridbay/mit-class-of-grit.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd mit-class-of-grit
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Set up environment variables**:
   Copy the example environment file and configure any necessary variables.

   ```bash
   cp .env.example .env
   ```

4. **Start the development server**:

   ```bash
   npm run dev
   ```
   The application will start concurrently with the Vite frontend middleware and express backend at `http://localhost:3000`.

## Scripts

- `npm run dev` - Starts the development server using `tsx`.
- `npm run build` - Builds the Vite application for production.
- `npm run preview` - Previews the production build locally.
- `npm run lint` - Runs TypeScript type checking.
- `npm run clean` - Removes the `dist` directory.

## Contributing

We welcome contributions to make the Class of Grit Awards Night even better!

To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Commit your changes with clear, descriptive messages:

   ```bash
   git commit -m "feat: add new gallery component"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request detailing your changes.

### Development Guidelines

- Ensure your code passes TypeScript checks by running `npm run lint`.
- Follow the existing design language (Tailwind classes, glassmorphism patterns).
- Test UI changes in both Light and Dark modes.

## License

This project is private and intended explicitly for the Class of Grit Awards Night.
