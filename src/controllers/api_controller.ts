import type { Request, Response } from "express";
import data from "../models/camarines_sur.json";
import type { Municipality } from "../types/municipality";

export const api_handler = (req: Request, res: Response) => {
  //get the query parameters
  const { district, municipality } = req.query;

  let result: Municipality[] = []; //array to store the query data

  try {
    //query all the municipality
    let municipalities = data.districts.flatMap(
      (d) => d.municipalities.map((m) => ({ ...m, district: d.name })) //attach the district name to each municipaltiy
    );

    //if only district is being search
    if (district && !municipality) {
      result = municipalities.filter(
        (municipality) =>
          municipality.district.toLowerCase() ===
          district.toString().toLowerCase()
      );
    }

    //if municipality is being search
    else if (municipality && !district) {
      result = municipalities.filter(
        (district) =>
          district.name.toLowerCase() === municipality.toString().toLowerCase()
      );
    }

    //if both municipality and district is being search
    else if (district && municipality) {
      result = municipalities.filter(
        (data) =>
          data.district.toLowerCase() === district.toString().toLowerCase() &&
          data.name.toLowerCase() === municipality.toString().toLowerCase()
      );
    } else {
      res.status(200).json(municipalities);
    }

    result.length === 0
      ? res.status(404).json({ message: "No Data Available" })
      : res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error);
  }
};
