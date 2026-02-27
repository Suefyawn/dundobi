# Dundobi - Next.js Website

Custom Next.js website for Dundobi - European Doberman breeding program.

## Features

- **Homepage** - Introduction to Dundobi's breeding philosophy
- **Breeding Dogs** - Showcase of breeding stock with details
- **Past Litters** - Archive of previous litters
- **Reserve Puppy** - Interactive puppy configurator with dynamic pricing and images
- **Responsive Design** - Mobile-first with Tailwind CSS

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: JavaScript/JSX
- **Hosting**: Vercel (ready to deploy)

## Project Structure

```
dundobi/
├── app/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── reserve/
│   │   └── page.jsx        # Reserve page
│   ├── breeding-dogs/
│   │   └── page.jsx        # Breeding dogs listing
│   └── litters/
│       └── page.jsx        # Past litters
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Footer.jsx          # Footer
│   ├── Hero.jsx            # Hero section
│   ├── Philosophy.jsx      # Philosophy section
│   ├── BreedingProgram.jsx # Breeding program details
│   ├── UpcomingLitters.jsx # Upcoming litters info
│   └── ReserveConfigurator.jsx  # Interactive puppy configurator
├── package.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Reserve Page Features

- **Sex Selection**: Male, Female, or Either
- **Color Selection**: Any, Black, Red, or Blue
- **Add-on Services**:
  - Ear Cropping (+$300)
  - Tail Cropping (+$200)
  - Dew Claw Removal (+$150)
  - Advanced Training 24hrs (+$500)
- **Dynamic Pricing**: Automatically updates with selections
- **Image Preview**: Changes based on puppy selection
- **Reservation Form**: Collects customer information
- **Total Calculation**: Shows base price + add-ons

## API Endpoints (Future)

- `POST /api/reservations` - Submit puppy reservation
- `GET /api/breeding-dogs` - Fetch breeding dogs data
- `GET /api/litters` - Fetch litters data

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## Deployment

Deploy to Vercel with one click:

```bash
vercel
```

Or push to GitHub and connect to Vercel dashboard.

## License

All rights reserved - Dundobi 2026
