
// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3068;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const guestbookArray = []

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {
    res.render(`index`);
});
 

app.get("/admin", (req, res) => {
    if (guestbookArray.length === 0) {
        // No submissions yet
        res.render('admin', { contacts: [], hasContacts: false });
    } else {
        // Pass all submissions
        res.render('admin', { contacts: guestbookArray, hasContacts: true });
    }
})

// app.get("/submit", (req, res) => {
//     res.redirect("/confirm");
// })

app.post('/confirmation', (req, res) => {
    const guestbook = {
        fname: req.body.fname,
        lname: req.body.lname,
        jobTitle: req.body.jobTitle,
        company: req.body.company,
        linkedInURL: req.body.linkedInURL,
        emailAddress: req.body.emailAddress,
        howDidWeMeet: req.body.howDidWeMeet,
        other: req.body.other,
        message: req.body.message,
        addToMailList: req.body.addToMailList,
        htmlOrTextRadio: req.body.htmlOrTextRadio,
        timestamp: new Date()
    };
    guestbookArray.push(guestbook);
    console.log(guestbookArray);
    res.render(`confirmation`, { jsonData: guestbook });
})

// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
