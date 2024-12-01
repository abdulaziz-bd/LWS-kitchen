# LWS Kitchen - Recipe Website

A dynamic recipe website built with Next.js and Tailwind CSS that showcases various recipes across different categories.

## Features

### Home Page

- **Hero Section**
  - Displays a featured recipe
  - "View Recipe" button links to recipe details
- **Super Delicious Section**
  - Shows top 3 recipes based on rating count
  - Clickable cards leading to recipe details
- **Popular Categories Section**
  - Displays 6-8 categories with highest recipe counts
  - Clicking categories leads to category-specific recipe listings
  - "View All" button redirects to categories page
- **Hand-Picked Collections**
  - Showcases 2 curated recipes
- **Latest Recipes Section**
  - Features 4 most recent recipes
  - Date-based sorting
  - Clickable cards leading to recipe details

### Navigation & Routing

- Dynamic routing structure: `domain.com/:category/:recipe`
- Category navigation through navbar and "Popular Categories" section
- Comprehensive category listing page
- Recipe listing page showing category-specific recipes with count

### Recipe Details Page

- Dynamic content including:
  - Recipe title
  - Author name
  - Publication date
  - Recipe image
- "You might also like" section featuring 4 related recipes from the same category
- Related recipes are clickable and lead to their respective detail pages

### Data Management

- All recipe data stored in structured JSON format
- Local data parsing from 'dist/data' folder
- No external API calls

## Technical Implementation

### Data Structure

```
dist/
  └── data/
      └── recipes.json
      └── categories.json
      └── ...
```

### Key Pages

- Home (`/`)
- Categories (`/categories`)
- Category Recipes (`/recipes`)
- Recipe Details (`/:category/:recipe`)

## Installation

1. Clone the repository

```bash
git clone https://github.com/abdulaziz-bd/LWS-kitchen.git
```

2. Install dependencies

```bash
cd lws-kitchen
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With

- Next.js
- Tailwind CSS
- React

## Project Structure

```
src/
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── categories/
│   │   └── page.js
│   └── [category]/
│       └── [recipe]/
│           └── page.js
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── RecipeCard/
│   └── ...
└── lib/
    └── data.js
```

## 👤 Author

**Md Abdul Aziz**

- Github: [@abdulaziz-bd](https://github.com/abdulaziz-bd)
- LinkedIn: [abdulazizfahad](https://linkedin.com/in/abdulazizfahad)

## 📝 License

This project is [MIT](./LICENSE) licensed.
