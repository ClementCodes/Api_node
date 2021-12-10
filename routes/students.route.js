import express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
    res.send("Get all student")
});

router.get("/:id", (req, res) => {

    const studentId = req.params.id
    res.send(`Get id student ${studentId}`)
});


router.post('/', function (req, res) {
    console.log(req.body);
    const { id, name, location } = req.body
    Object.keys(req.body).map(key => console.log(key, req.body[key]))
    console.log(req.body.location);
    res.send('Got a POST POST POST create a new student /students ');
  });

router.put('/:id', function (req, res) {
    res.send('Got a PUT request at /students/:id');
  });


router.delete('/:id', function (req, res) {
    res.send('Got a DELETE request at /user');
});

  

