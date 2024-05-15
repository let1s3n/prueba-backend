const sql = require("mssql");
const respuesta3: any = { respuesta: "" };
respuesta3.respuesta = (req: any, res: any) => {
  /* const users = await User.find();
  res.json(users); */
  /* console.log("req.app.locals.db: ", req.app.locals.db); */
  req.app.locals.db.query(
    "SELECT * FROM Producto",
    function (err: any, recordset: any) {
      if (err) {
        console.error(err);
        res.status(500).send("SERVER ERROR");
        return;
      }
      let records = recordset.recordset;
      console.log("Records: ", records);
      res.status(200).json(records);
    }
  );
};
export default respuesta3;
