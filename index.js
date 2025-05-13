const express = require('express');
const app = express();
const port = 8080;
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override');
const multer = require('multer');
const path = require('path');

// Set up multer storage for image uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [ ];  

// Route to display all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// Route to create a new post (form page)
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// Route to handle the new post submission
app.post("/posts", upload.single('image'), (req, res) => {
    const { username, content } = req.body;
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const id = uuidv4();

    posts.push({ id, username, content, imageUrl });
    res.redirect("/posts");
});

// Route to view a post's details
app.get("/posts/:id", (req, res) => {
    const { id } = req.params;
    const post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

// Route to edit a post (form page)
app.get("/posts/:id/edit", (req, res) => {
    const { id } = req.params;
    const post = posts.find((p) => id === p.id);
    res.render("edit.ejs", { post });
});

// Route to handle the post update (PATCH)
app.patch("/posts/:id", upload.single('image'), (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const post = posts.find((p) => p.id === id);

    if (!post) {
        return res.status(404).send("Post not found");
    }

    post.content = content;

    if (req.file) {
        post.imageUrl = `/uploads/${req.file.filename}`;
    }

    res.redirect("/posts/" + id);
});

// Route to delete a post
app.delete('/posts/:id', (req, res) => {
    const { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});