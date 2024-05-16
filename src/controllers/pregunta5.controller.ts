import { Request, Response } from "express";

const respuesta5 = (req: Request, res: Response) => {
  try {
    req.app.locals.db.query(
      "SELECT TOP(1) m.ID_Marca, m.Nombre, SUM(TotalLinea - (Cantidad*p.Costo_Unitario)) AS [Margen de Ganancias] FROM VentaDetalle vd INNER JOIN Producto p ON vd.ID_Producto=p.ID_Producto INNER JOIN Marca m ON p.ID_Marca=m.ID_Marca GROUP BY m.ID_Marca, m.Nombre ORDER BY [Margen de Ganancias] desc",
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
export default respuesta5;
