

const expressApp = require("express")()
const port = 8572

expressApp.get("/", (req, res) => {
    res.send("HELLO WORLD!")
})

expressApp.listen(port, () => {
    console.log("Example app listenting")
})
