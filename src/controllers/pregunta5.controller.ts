const respuesta4: any = { respuesta: "" };
respuesta4.respuesta = (req: any, res: any) => {
  req.app.locals.db.query(
    "SELECT TOP(1) m.ID_Marca, m.Nombre, SUM(TotalLinea - (Cantidad*p.Costo_Unitario)) AS [Margen de Ganancias] FROM VentaDetalle vd INNER JOIN Producto p ON vd.ID_Producto=p.ID_Producto INNER JOIN Marca m ON p.ID_Marca=m.ID_Marca GROUP BY m.ID_Marca, m.Nombre ORDER BY [Margen de Ganancias] desc",
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
