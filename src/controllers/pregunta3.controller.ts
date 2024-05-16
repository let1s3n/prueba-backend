const respuesta3: any = { respuesta: "" };
respuesta3.respuesta = (req: any, res: any) => {
  req.app.locals.db.query(
    "SELECT TOP(1) vd.ID_Producto, p.nombre, SUM(TotalLinea) AS [Monto Total de Ventas] FROM VentaDetalle vd INNER JOIN Producto p ON vd.ID_Producto=p.ID_Producto GROUP BY vd.ID_Producto, p.nombre ORDER BY [Monto Total de Ventas] desc",
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
