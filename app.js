
// Import the express module
import express from 'express';

// Create an instance of an Express application
const app = express();

// Define the port number where our server will listen
const PORT = 3068;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const guestbookArray = []

// Define a default "route" ('/')
// req: contains information about the incoming request
// res: allows us to send back a response to the client
app.get('/', (req, res) => {


    res.sendFile(`${import.meta.dirname}/views/index.html`);


});

app.get("/admin", (req, res) => {
    console.log(guestbookArray);
    res.json({guestbookings : guestbookArray});
    res.sendFile(`${import.meta.dirname}/views/admin.html`);
})


app.post('/submit', (req, res) => {
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
    res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
})
// Start the server and listen on the specified port 
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
}); 
