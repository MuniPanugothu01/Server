// const { Address } = require("../models/Address.js");

// // Add Address : /api/address/add
// const addAddress = async (req, res) => {
//   try {
//     const {
//       // userId,
//       firstName,
//       lastName,
//       email,
//       street,
//       city,
//       state,
//       zipcode,
//       country,
//       phone,
//     } = req.body;

//     // ✅ Use the userId from the authenticated request
//     const userId = req.userId;

//     await Address.create({
//       userId,
//       firstName,
//       lastName,
//       email,
//       street,
//       city,
//       state,
//       zipcode,
//       country,
//       phone,
//     });

//     res.json({ success: true, message: "Address added successfully 😊" });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

// // get address : /api/address/get
// const getAddress = async (req, res) => {
//   try {
//     // const { userId } = req.query;
//     const userId = req.userId;
//     const addresses = await Address.find({ userId });
//     res.json({ success: true, addresses });
//   } catch (error) {
//     console.log(error.message);
//     res.json({ success: false, message: error.message });
//   }
// };

// module.exports = {
//   addAddress,
//   getAddress,
// };

const { Address } = require("../models/Address.js");

// Add Address : /api/address/add
const addAddress = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zipcode,
      country,
      phone,
    } = req.body;

    // ✅ Get userId from authUser middleware
    const userId = req.user.id;

    await Address.create({
      userId,
      firstName,
      lastName,
      email,
      street,
      city,
      state,
      zipcode,
      country,
      phone,
    });

    res.json({ success: true, message: "Address added successfully 😊" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Get Address : /api/address/get
const getAddress = async (req, res) => {
  try {
    const userId = req.user.id;
    const addresses = await Address.find({ userId });

    res.json({ success: true, addresses });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

module.exports = {
  addAddress,
  getAddress,
};
