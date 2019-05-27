module.exports = {
  create: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;

    db.create_product([name, price, img])
      .then(products => res.sendStatus(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
        console.log(err);
      });
  },

  getAll: (req, res, next) => {
    const db = req.app.get("db");
    console.log("endpoint hit");
    db.read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Something went wrong." });
        console.log(err);
      });
  },

  update: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, img } = req.body;
    const { id } = req.params;

    db.update_product([id, name, price, img])
      .then(products => res.sendStatus(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Whoops." });
        console.log(err);
      });
  },

  delete: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_product(id)
      .then(products => res.sendStatus(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Yikes" });
        console.log(err);
      });
  }
};
