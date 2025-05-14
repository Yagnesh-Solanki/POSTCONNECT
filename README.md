
# 📬 PostConnect

**PostConnect** is a full-stack CRUD application built with **Node.js** and **Express.js**. It allows users to **create**, **read**, **update**, and **delete** posts through a RESTful API. This project is ideal for learning how backend routes, middleware, and HTTP methods work together in a simple content management system.

---

## 🚀 Features

* 📝 Create new posts with form validation.
* 📋 List all posts on the home page.
* 🔍 View individual posts in detail.
* ✏️ Edit and update existing posts.
* ❌ Delete posts with confirmation.
* 📁 Upload and display images (optional).
* 🎨 Styled using `style.css` in the public folder.

---

## 🗂️ Project Structure

```
.
├── node_modules/             # Node.js packages
├── public/                   # Static files
│   ├── uploads/              # Uploaded images
│   ├── image.png             # Example image
│   └── style.css             # Custom styles
├── views/                    # EJS templates
│   ├── edit.ejs              # Edit post view
│   ├── index.ejs             # Home page with list of posts
│   ├── new.ejs               # Form to create new post
│   └── show.ejs              # Single post view
├── index.js                  # Main server file
├── package.json              # Project metadata and dependencies
├── package-lock.json         # Exact dependency versions
└── README.md                 # Project documentation
```

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/postconnect.git
cd postconnect
npm install
```

---

## 🧪 Usage

Start the development server:

```bash
node index.js
```

Visit `http://localhost:8080` in your browser.

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express
* **Templating Engine**: EJS
* **Frontend**: HTML, CSS
* **File Uploads**: Multer (if implemented)
* **Storage**: In-memory or basic array (for simple projects) or a database (MongoDB, SQLite, etc.)

---

## 📌 Notes

* You can easily integrate a database like MongoDB for persistent storage.
* Image upload currently stores files in the `/public/uploads` directory.




