import { Request, Response } from "express";

const respuesta2 = (req: Request, res: Response) => {
  try {
    req.app.locals.db.query(
      "SELECT TOP(1) MAX(Total) AS [Monto de la mayor venta], CONVERT(varchar(10), Fecha, 101) AS Dia, CONVERT(varchar, Fecha, 108) AS Hora FROM Venta GROUP BY ID_Venta, Fecha ORDER BY [Monto de la mayor venta] desc",
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
export default respuesta2;
