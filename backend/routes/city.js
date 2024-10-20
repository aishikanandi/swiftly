const express = require("express");
const cityRoutes = express.Router()
const cityModel = require('../models/city')


//  API to register city data in database.
cityRoutes.post("/cityadd", async (req, res) => {
  try {
    // const citydata = new cityModel(req.body);

      citydata = new cityModel({
        country_id: req.body.country_id,
        city: req.body.city,
        coordinates: req.body.coordinates
      });

    await citydata.save();
    console.log(citydata);

    res.status(201).send({success: true, citydata, message: "City Added Successfully"});

  } catch (error) {
    console.log(error);

    if(error.keyPattern){
      if (error.keyPattern.city) {
        console.log("Country Already Exists")
            return res.status(500).json({success: false, message: "City Already Exists"});
      } 
    }
    res.status(500).json({ success: false, message: error});
  }
});

// --------------------------------GET CITY DATA WITH PAGINATION-----------------------------------//
cityRoutes.get("/citydata", async (req, res) => {
  let page = +req.query.page; 
  let limit = +req.query.limit; 
  let skip = 0; 
  try {
    if (page && limit) {
    const count = await cityModel.countDocuments();

    let totalPage = 1; 
    let aggregatePipeline = [
      { 
        $lookup: {
          from:'countrymodels',
          foreignField:'_id',
          localField:'country_id',
          as:'countryDetails'
        }
      },
      { $unwind: "$countryDetails" },
    ];

      skip = (page - 1) * limit;
      totalPage = Math.ceil(count / limit);

      if (page > totalPage) {
        page = totalPage;
        skip = (page - 1) * limit;
      }
      console.log(page, limit)

      aggregatePipeline.push({ $skip: skip });
      aggregatePipeline.push({ $limit: limit });

      const citydata = await cityModel.aggregate(aggregatePipeline);

      res.json({
        success: true,
        message: "City Data Found",
        citydata,
        page: page || "all",  
        limit: limit || "all",
        totalPage,
        count,
      });
      return;
    }

    const citydata2 = await cityModel.find();
    res.json({
      success: true,
      message: "City Data Found",
      citydata2,
      page: "all",  
      limit: "all"
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error });
  }
});

// --------------------------------GET CITY DATA WITHOUT PAGINATION-----------------------------------//

cityRoutes.get("/citiesdata", async (req, res) => {
  try {
    const citydata = await cityModel.find(); 

    res.status(200).json({
      success: true,
      message: "City Data Found",
      citydata,
    });
  } catch (error) {
    console.error("Error fetching city data:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching city data",
      error: error.message,
    });
  }
});


// API to find registered city and country Name in Mongodb............
// cityRoutes.get("/citydata", async (req, res) => {
//   try {
//     // const citydata = await City_Schema.find();
//     const citydata = await cityModel.aggregate([{
//         $lookup: {
//           from:'countrymodels',
//           foreignField:'_id',
//           localField:'country_id',
//           as:'countryDetails'
//         }
//       },
//       { $unwind: '$countryDetails' }
//     ])
    
//     // const citydata = await cityModel.find({});
//     // // res.json({ citydata });

//     // console.log(citydata);
//     res.send(citydata);
    
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({ success: false, message: error});
//   }      
// })



  //  API to update data of city in database using Angular form.
  cityRoutes.put('/cityupdate/:id', async (req, res) => {
      try {
        const cityId = req.params.id;
        const updatedCity = {
          city: req.body.city,
          coordinates: req.body.coordinates
        };
        console.log(updatedCity.cityupdatedCity.city)
        console.log(updatedCity)
  
        let cityData =  await cityModel.findByIdAndUpdate(cityId, updatedCity, {new:true});
       
      res.json({ success: true, message: "City Updated Successfully" ,cityData});
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: "City Already Exists" });
    }
  });

  //----------------------------API TO FETCH ALL ZONES OF A COUNTRY-------------------------------//
  cityRoutes.get("/coordinates/:countryid", async (req, res) => {
    try {
      const id = req.params.countryid;
      console.log(id)
      const citydata = await cityModel.find({country_id : id})
      // console.log(citydata)
      res.send(citydata);
    } catch (err) {
      res.status(400).send(err.message.split(":")[2]);
    }
  });



module.exports = cityRoutes;

