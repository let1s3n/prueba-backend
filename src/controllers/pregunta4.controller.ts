import { Request, Response } from "express";

const respuesta4 = (req: Request, res: Response) => {
  try {
    req.app.locals.db.query(
      "SELECT TOP(1) v.ID_Local, l.Nombre, SUM(Total) AS [Monto de Ventas] FROM Venta v INNER JOIN Local l ON v.ID_Local=l.ID_Local GROUP BY v.ID_Local, l.Nombre ORDER BY [Monto de Ventas] desc",
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
export default respuesta4;
