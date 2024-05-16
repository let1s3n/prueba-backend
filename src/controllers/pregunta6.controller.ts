const respuesta4: any = { respuesta: "" };
respuesta4.respuesta = (req: any, res: any) => {
  req.app.locals.db.query(
    `IF OBJECT_ID('tempdb..#VentasPorProductoPorLocal') IS NOT NULL
    DROP TABLE #VentasPorProductoPorLocal; 
    SELECT v.ID_Local, vd.ID_Producto, COUNT(v.ID_Venta) AS VentasTotales
    INTO #VentasPorProductoPorLocal
    FROM Venta v
    INNER JOIN VentaDetalle vd ON v.ID_Venta = vd.ID_Venta
    GROUP BY v.ID_Local, vd.ID_Producto;
    
    IF OBJECT_ID('tempdb..#MaximaVentaPorLocal') IS NOT NULL
    DROP TABLE #MaximaVentaPorLocal;
    SELECT ID_Local, MAX(VentasTotales) AS MaxVentas
    INTO #MaximaVentaPorLocal
    FROM #VentasPorProductoPorLocal
    GROUP BY ID_Local;
    
    SELECT l.Nombre AS LocalNombre, p.Nombre AS ProductoNombre, vpl.VentasTotales AS Ventas
    FROM #VentasPorProductoPorLocal vpl
    INNER JOIN #MaximaVentaPorLocal mvl ON vpl.ID_Local = mvl.ID_Local AND vpl.VentasTotales = mvl.MaxVentas
    INNER JOIN Local l ON vpl.ID_Local = l.ID_Local
    INNER JOIN Producto p ON vpl.ID_Producto = p.ID_Producto
    ORDER BY l.Nombre, vpl.VentasTotales DESC;
    
    DROP TABLE #VentasPorProductoPorLocal;
    DROP TABLE #MaximaVentaPorLocal;`,

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
