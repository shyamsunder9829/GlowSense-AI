GlowSense-AI/
│
├── client/                         # FRONTEND (Vite + React)
│   ├── public/
│   │   └── favicon.svg
│   │
│   ├── src/
│   │   ├── assets/                 # Images, icons, bg images
│   │   │   ├── hero-bg.png
│   │   │   ├── scan-bg.png
│   │   │   └── logo.svg
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── BackToTop.jsx
│   │   │   ├── ScanningEffect.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── Loader.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Scan.jsx
│   │   │   └── Contact.jsx
│   │   │
│   │   ├── services/               # API calls (axios)
│   │   │   ├── api.js
│   │   │   ├── scanService.js
│   │   │   └── contactService.js
│   │   │
│   │   ├── utils/
│   │   │   ├── productData.js       # Skin-based products
│   │   │   └── scrollToSection.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css               # Tailwind base
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   └── package-lock.json
│
├── server/                         # BACKEND (Node + Express + MongoDB)
│   ├── uploads/                    # Uploaded images (TEMP)
│   │   └── .gitkeep
│   │
│   ├── config/
│   │   ├── db.js                   # MongoDB connection
│   │   └── multer.js               # Image upload config
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── scanController.js
│   │   └── contactController.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Scan.js
│   │   └── Contact.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── scanRoutes.js
│   │   └── contactRoutes.js
│   │
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── package.json                    # Optional (root scripts)
