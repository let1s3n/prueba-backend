const sql = require("mssql");
const respuesta4: any = { respuesta: "" };
respuesta4.respuesta = (req: any, res: any) => {
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
export default respuesta4;
