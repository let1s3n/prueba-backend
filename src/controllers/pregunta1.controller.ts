const respuesta1: any = { respuesta: "" };
respuesta1.respuesta = (req: any, res: any) => {
  req.app.locals.db.query(
    "SELECT SUM(Total) AS [Monto Total], COUNT(*) AS [Cantidad Total de Ventas] FROM Venta WHERE DATEDIFF(day, Fecha, CURRENT_TIMESTAMP) BETWEEN 0 AND 30",
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
export default respuesta1;
