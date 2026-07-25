# WanderStay 🧭

A full-stack traveling & hotel room booking web application — an Airbnb-inspired platform where users can browse, list, and review stays around the world.

**Live Demo:** [wanderstay-4tsv.onrender.com](https://wanderstay-4tsv.onrender.com)

---

## ✨ Features

- 🏠 Browse property listings by category (Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms, Arctic, Domes, Boats)
  > Note: the search bar and category-filter browsing are UI-complete but not yet wired up to backend queries.
- 📝 Full CRUD on listings — create, view, edit, and delete, built on the MVC pattern (Models / Views / Controllers)
- ⭐ Add, view, and delete reviews on listings
- 🔐 Authentication via Passport.js (Local Strategy), with passwords hashed and salted — no plaintext credentials ever stored
- 🔒 Authorization checks — only the logged-in owner of a listing can edit/delete it, and only logged-in users can add listings or reviews
- 🍪 Persistent login sessions using express-session and cookies
- 💬 Flash messages (via connect-flash) for success/error feedback after actions
- 🧭 Custom Express routers to keep listings, reviews, and user routes organized
- 🛡️ Centralized error handling with a custom `ExpressError` class and `wrapAsync` middleware wrapper for async routes
- ✅ Server-side and client-side form validation, with Bootstrap validation styling on invalid fields
- 🗺️ Interactive map on each listing's page, with geocoding (address → coordinates) and rendering handled through Mapbox
- 🧾 "Display total after taxes" toggle switch on the listings page
- 📱 Responsive layout and navbar built with Bootstrap
- 🗄️ Data persisted in MongoDB Atlas via Mongoose schemas

---

## 🛠️ Tech Stack

**Backend**

- Node.js
- Express.js (routing, middleware pipeline)
- MongoDB Atlas with Mongoose (schemas/models)
- MVC architecture (Models, Views, Controllers)

**Frontend**

- EJS (Embedded JavaScript templates)
- CSS3 & Bootstrap (responsive layout, form validation styling)
- Client-side JavaScript
- Mapbox GL JS (map rendering + geocoding)

**Authentication & Security**

- Passport.js (Local Strategy) with password hashing & salting
- express-session for session management
- Cookies for persisting login state
- connect-flash for one-time success/error messages
- Custom authorization middleware (route-level access control)

**Error Handling & Validation**

- Custom `ExpressError` class for centralized error responses
- `wrapAsync` middleware to catch async errors in routes
- Server-side schema validation + Bootstrap client-side validation

**Deployment**

- Render (hosting)
- MongoDB Atlas (cloud database)

---

## 📁 Project Structure

```
WanderStay/
├── controllers/       # Route logic for listings, reviews, users
├── init/              # Database seeding scripts
├── models/            # Mongoose schemas (Listing, Review, User)
├── public/            # Static assets (CSS, JS, images)
├── routes/            # Express route definitions
├── utils/             # Helper utilities (ExpressError, wrapAsync)
├── views/             # EJS templates
│   ├── includes/      # Reusable partials (navbar, footer, flash)
│   ├── layouts/       # Boilerplate layout
│   ├── listings/      # Listing views (index, show, new, edit)
│   └── users/         # Auth views
├── app.js             # Application entry point
├── cloudConfig.js      # Cloudinary configuration
├── middleware.js       # Custom middleware (auth checks, validation)
└── .env               # Environment variables (not committed)
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- A Mapbox account (for map tokens)
- A Cloudinary account (for image uploads)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/Abhishek-2428/WanderStay.git
   cd WanderStay
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   ATLASDB_URL=your_mongodb_connection_string
   MAP_TOKEN=your_mapbox_access_token
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   SECRET=your_session_secret
   ```

4. (Optional) Seed the database with sample listings

   ```bash
   node init/index.js
   ```

5. Start the server

   ```bash
   node app.js
   ```

6. Visit `http://localhost:8080` in your browser

---

## 🌐 Deployment

This project is deployed on [Render](https://render.com). When deploying:

- Add all environment variables from your `.env` file to Render's **Environment** tab — Render does not read local `.env` files.
- Ensure your MongoDB Atlas cluster allows connections from Render's IP addresses (or `0.0.0.0/0` for simplicity).
- Set the start command to `node app.js`.

---

## 📌 Roadmap / Future Improvements

- [ ] Booking and payment integration
- [ ] Wishlist / saved listings
- [ ] Advanced search filters (price range, amenities)
- [ ] Email notifications
- [ ] Admin dashboard

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Feel free to check the [issues page](https://github.com/Abhishek-2428/WanderStay/issues).

---

## 📄 License

This project is open source and available for personal and educational use.

---

## 👤 Author

**Abhishek**
GitHub: [@Abhishek-2428](https://github.com/Abhishek-2428)

---

<p align="center">© WanderStay Private Limited</p>
