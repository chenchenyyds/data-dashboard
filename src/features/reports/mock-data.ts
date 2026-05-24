export interface ReportRow {
  id: string
  date: string
  customer: string
  product: string
  category: string
  quantity: number
  price: number
  total: number
  status: 'Completed' | 'Pending' | 'Refunded'
}

export const mockReports: ReportRow[] = Array.from({ length: 35 }, (_, i) => {
  const categories = ['Electronics', 'Clothing', 'Food', 'Books', 'Sports'];
  const products: Record<string, string[]> = {
    Electronics: ['Laptop Pro', 'Wireless Mouse', 'USB-C Hub', 'Monitor 4K'],
    Clothing: ['Cotton T-Shirt', 'Denim Jacket', 'Running Shoes', 'Wool Scarf'],
    Food: ['Organic Tea', 'Dark Chocolate', 'Almond Butter', 'Protein Bar'],
    Books: ['React Handbook', 'TypeScript Deep Dive', 'Design Patterns', 'Clean Code'],
    Sports: ['Yoga Mat', 'Resistance Bands', 'Water Bottle', 'Jump Rope'],
  };
  const cat = categories[i % categories.length];
  const catProducts = products[cat];
  const qty = Math.floor(Math.random() * 5) + 1;
  const price = Math.floor(Math.random() * 200) + 10;
  const statuses: ReportRow['status'][] = ['Completed', 'Completed', 'Completed', 'Pending', 'Refunded'];

  const d = new Date(2026, 0, 1);
  d.setDate(d.getDate() + i * 3);

  return {
    id: `RPT-${String(i + 1).padStart(4, '0')}`,
    date: d.toISOString().slice(0, 10),
    customer: `Customer ${String.fromCharCode(65 + (i % 26))}`,
    product: catProducts[i % catProducts.length],
    category: cat,
    quantity: qty,
    price,
    total: qty * price,
    status: statuses[i % statuses.length],
  };
});
