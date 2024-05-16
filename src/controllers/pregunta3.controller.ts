import { Request, Response } from "express";

const respuesta3 = (req: Request, res: Response) => {
  try {
    req.app.locals.db.query(
      "SELECT TOP(1) vd.ID_Producto, p.nombre, SUM(TotalLinea) AS [Monto Total de Ventas] FROM VentaDetalle vd INNER JOIN Producto p ON vd.ID_Producto=p.ID_Producto GROUP BY vd.ID_Producto, p.nombre ORDER BY [Monto Total de Ventas] desc",
      function (err: any, recordset: { recordset: [] }) {
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
  } catch (error) {
    console.error(error);
    res.status(500).send("SERVER ERROR");
  }
};
export default respuesta3;
