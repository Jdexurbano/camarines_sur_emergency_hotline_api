import type { Request, Response } from "express";
import data from "../models/camarines_sur.json";
import type { Municipality } from "../types/municipality";

export const api_handler = (req: Request, res: Response) => {
  //get the query parameters
  const { district, municipality } = req.query;

  try {
    //query all the municipality
    let municipalities = data.districts.flatMap(
      (d) => d.municipalities.map((m) => ({ ...m, district: d.name })) //attach the district name to each municipaltiy
    );

    let result: Municipality[] = municipalities; //array to store the query data

    //if only district is being search
    if (district) {
      result = result.filter(
        (municipality) =>
          municipality.district.toLowerCase() ===
          district.toString().toLowerCase()
      );
    }

    //if municipality is being search
    if (municipality) {
      result = result.filter(
        (district) =>
          district.name.toLowerCase() === municipality.toString().toLowerCase()
      );
    }

    if (result.length === 0) {
      return res.status(404).json({
        message: "No Data Available",
      });
    }

    return res.status(200).json(result);
  } catch (error) {
    res.status(400).json({
      error: "Invalid Request",
      details: (error as Error).message,
    });
  }
};
