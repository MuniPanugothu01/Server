// const jwt = require("jsonwebtoken");

// const authSeller = async (req, res, next) => {
//   const { sellertoken } = req.cookies;
//   if (!sellertoken) {
//     return res.json({ success: true, message: "Not Authorized" });
//   }
//   try {
//     const tokenDecode = jwt.verify(sellertoken, process.env.JWT_SECRET);
//     if (tokenDecode.email === process.env.SELLER_EMAIL) {
//       next();
//     } else {
//       return res.json({ success: false, message: "Not Authorized" });
//     }
//   } catch (err) {
//     console.log("catch auth", err.message);
//     res.json({ success: false, message: err.message });
//   }
// };

// module.exports = {
//   authSeller,
// };

const jwt = require("jsonwebtoken");
const Seller = require("../models/Seller");

const authSeller = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const seller = await Seller.findById(decoded.id);
    if (!seller) {
      return res
        .status(401)
        .json({ success: false, message: "Seller not found" });
    }

    req.seller = seller; // ✅ set for later use
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
};
