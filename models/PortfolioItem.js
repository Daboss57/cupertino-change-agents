import mongoose from 'mongoose';

const PortfolioItemSchema = new mongoose.Schema({
  title: String,
  category: String,
  images: [String],
  link: String,
});

export default mongoose.models.PortfolioItem || mongoose.model('PortfolioItem', PortfolioItemSchema);