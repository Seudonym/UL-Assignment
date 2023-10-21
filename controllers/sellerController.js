// POST /api/seller/create-catalog
// GET /api/seller/orders

export const createCatalog = async (req, res) => {
  res.send("POST: Create catalog");
}

export const orders = async (req, res) => {
  res.send("GET: Orders");
}
