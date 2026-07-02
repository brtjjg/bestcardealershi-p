# AutoGlobe – World Car Dealership

A fully responsive, modern car dealership website featuring a global inventory of 55+ vehicles from 30+ brands.  
**All prices are displayed in Kenyan Shillings (KES)** using a fixed exchange rate (1 USD = 150 KES).

## 🚀 Live Demo
Deployed on Render: [https://autoglobe-dealership.onrender.com](https://autoglobe-dealership.onrender.com)

## ✨ Features
- **Global Car Inventory** – 55+ cars from all over the world.
- **Price in KES** – All prices converted to Kenyan Shillings.
- **Advanced Filtering** – By make, type, price range, and keyword search.
- **Sorting** – Sort by price, year, or mileage.
- **Modal Detail View** – Click "View Details" for full specs and contact options.
- **Responsive Design** – Works on desktop, tablet, and mobile.
- **Testimonials & Contact Form** – Build trust and capture leads.
- **Newsletter Signup** – Grow your mailing list.

## 🛠️ Technologies Used
- HTML5, CSS3, Vanilla JavaScript
- Font Awesome Icons
- Google Fonts (Inter)
- Unsplash for placeholder images

## 📦 Deploy on Render (Static Site)
1. Push this repository to GitHub.
2. Log in to [Render.com](https://render.com) and click **"New +"** → **"Static Site"**.
3. Connect your GitHub repository.
4. Render will automatically detect the `render.yaml` file – use the settings from it.
5. Alternatively, manually set:
   - **Build Command:** `echo "No build required"`
   - **Publish Directory:** `.` (root)
6. Click **"Create Static Site"**.  
   Your site will be live at `https://<your-service>.onrender.com` within minutes.

## 🔧 Customization
- To change the exchange rate, update the `EXCHANGE_RATE` environment variable in Render’s dashboard or edit the value in `render.yaml` / `script.js`.
- Add or remove cars by modifying the `carDatabase` array in `script.js`.
- Update contact details and social links in `index.html`.

## 📄 License
MIT – free to use and modify for personal or commercial projects.
