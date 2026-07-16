const marketStocks = require("../data/marketStocks.json");

// GET /api/market
const getMarketStocks = async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;

    const search = (req.query.search || "").toLowerCase();
    const sector = req.query.sector || "";
    const marketCap = req.query.marketCap || "";

    let filteredStocks = [...marketStocks];

    // Search by symbol or company name
    if (search) {
      filteredStocks = filteredStocks.filter(
        (stock) =>
          stock.symbol.toLowerCase().includes(search) ||
          stock.company.toLowerCase().includes(search),
      );
    }

    // Filter by sector
    if (sector) {
      filteredStocks = filteredStocks.filter(
        (stock) => stock.sector === sector,
      );
    }

    // Filter by Market Cap
    if (marketCap) {
      filteredStocks = filteredStocks.filter(
        (stock) => stock.marketCap === marketCap,
      );
    }

    const totalStocks = filteredStocks.length;
    const totalPages = Math.ceil(totalStocks / limit);

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const stocks = filteredStocks.slice(startIndex, endIndex);

    res.status(200).json({
      success: true,
      page,
      totalPages,
      totalStocks,
      stocks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch market data.",
    });
  }
};

// GET /api/market/:symbol
const getStockBySymbol = async (req, res) => {
  try {
    const symbol = req.params.symbol.toUpperCase();

    const stock = marketStocks.find((item) => item.symbol === symbol);

    if (!stock) {
      return res.status(404).json({
        success: false,
        message: "Stock not found",
      });
    }

    res.status(200).json({
      success: true,
      stock,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to fetch stock details.",
    });
  }
};

module.exports = {
  getMarketStocks,
  getStockBySymbol,
};
