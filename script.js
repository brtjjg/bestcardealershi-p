// ============================================================
//  CONFIGURATION
// ============================================================
const EXCHANGE_RATE = 150; // 1 USD = 150 KES

// ============================================================
//  CAR DATA — 55+ cars from around the world (prices in USD)
// ============================================================
const carDatabase = [
    { id: 1, make: 'Toyota', model: 'Camry', year: 2024, price: 29500, mileage: 150, fuel: 'Hybrid', transmission: 'CVT', type: 'sedan', origin: 'Japan', description: 'The 2024 Toyota Camry Hybrid delivers exceptional fuel efficiency and a smooth, quiet ride.', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Silver' },
    { id: 2, make: 'BMW', model: 'X5', year: 2024, price: 65900, mileage: 80, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'Germany', description: 'The BMW X5 combines sporty handling with luxury and practicality.', image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Black' },
    { id: 3, make: 'Honda', model: 'Civic', year: 2023, price: 22800, mileage: 8200, fuel: 'Gasoline', transmission: 'CVT', type: 'sedan', origin: 'Japan', description: 'The Honda Civic is a compact sedan known for its reliability, fuel efficiency, and sporty design.', image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Blue' },
    { id: 4, make: 'Ford', model: 'F-150', year: 2023, price: 53500, mileage: 5400, fuel: 'Gasoline', transmission: 'Automatic', type: 'truck', origin: 'USA', description: 'The Ford F-150 is America\'s best-selling truck. Built for work and play.', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Red' },
    { id: 5, make: 'Mercedes-Benz', model: 'C-Class', year: 2024, price: 48900, mileage: 300, fuel: 'Gasoline', transmission: 'Automatic', type: 'sedan', origin: 'Germany', description: 'The Mercedes-Benz C-Class offers a perfect blend of luxury, performance, and advanced technology.', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'White' },
    { id: 6, make: 'Audi', model: 'e-tron GT', year: 2024, price: 105900, mileage: 120, fuel: 'Electric', transmission: 'Automatic', type: 'electric', origin: 'Germany', description: 'The Audi e-tron GT is a stunning all-electric grand tourer. Blazing fast and beautifully designed.', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Gray' },
    { id: 7, make: 'Chevrolet', model: 'Corvette Z06', year: 2023, price: 112000, mileage: 2400, fuel: 'Gasoline', transmission: 'Automatic', type: 'sports', origin: 'USA', description: 'The Corvette Z06 is an American supercar with a flat-plane crank V8.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Yellow' },
    { id: 8, make: 'Toyota', model: 'RAV4', year: 2023, price: 31800, mileage: 12500, fuel: 'Hybrid', transmission: 'CVT', type: 'suv', origin: 'Japan', description: 'The Toyota RAV4 Hybrid is a practical and efficient compact SUV.', image: 'https://images.unsplash.com/photo-1623869674365-a7a1e12395fd?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Green' },
    { id: 9, make: 'Honda', model: 'Accord', year: 2022, price: 27200, mileage: 18400, fuel: 'Gasoline', transmission: 'Automatic', type: 'sedan', origin: 'Japan', description: 'The Honda Accord is a mid-size sedan that excels in comfort, safety, and driving dynamics.', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&auto=format', featured: false, sold: true, color: 'Silver' },
    { id: 10, make: 'BMW', model: 'i4 M50', year: 2024, price: 66900, mileage: 200, fuel: 'Electric', transmission: 'Automatic', type: 'electric', origin: 'Germany', description: 'The BMW i4 M50 is an all-electric gran coupe with M performance.', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Blue' },
    { id: 11, make: 'Ford', model: 'Mustang GT', year: 2023, price: 42500, mileage: 5200, fuel: 'Gasoline', transmission: 'Manual', type: 'sports', origin: 'USA', description: 'The Ford Mustang GT is an iconic American muscle car with a roaring V8.', image: 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Red' },
    { id: 12, make: 'Audi', model: 'Q5', year: 2023, price: 46800, mileage: 9800, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'Germany', description: 'The Audi Q5 is a compact luxury SUV with a refined interior and responsive handling.', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'White' },
    { id: 13, make: 'Tesla', model: 'Model 3', year: 2024, price: 44900, mileage: 80, fuel: 'Electric', transmission: 'Automatic', type: 'electric', origin: 'USA', description: 'The Tesla Model 3 is the best-selling electric car worldwide.', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'White' },
    { id: 14, make: 'Porsche', model: '911 Carrera', year: 2024, price: 118000, mileage: 50, fuel: 'Gasoline', transmission: 'Automatic', type: 'sports', origin: 'Germany', description: 'The Porsche 911 Carrera is a legendary sports car with rear-engine perfection.', image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Silver' },
    { id: 15, make: 'Volkswagen', model: 'Golf GTI', year: 2023, price: 31800, mileage: 6200, fuel: 'Gasoline', transmission: 'Manual', type: 'sedan', origin: 'Germany', description: 'The VW Golf GTI is the original hot hatch. Fun to drive and practical.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Red' },
    { id: 16, make: 'Nissan', model: 'GT-R', year: 2023, price: 115000, mileage: 1800, fuel: 'Gasoline', transmission: 'Automatic', type: 'sports', origin: 'Japan', description: 'The Nissan GT-R is a Japanese supercar icon known as "Godzilla".', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Blue' },
    { id: 17, make: 'Lexus', model: 'RX 350', year: 2023, price: 49500, mileage: 9200, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'Japan', description: 'The Lexus RX 350 is a luxury SUV known for its smooth ride and impeccable build quality.', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Silver' },
    { id: 18, make: 'Ferrari', model: '488 GTB', year: 2022, price: 235000, mileage: 3400, fuel: 'Gasoline', transmission: 'Automatic', type: 'sports', origin: 'Italy', description: 'The Ferrari 488 GTB is a mid-engine V8 supercar with breathtaking speed.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Red' },
    { id: 19, make: 'Lamborghini', model: 'Huracán', year: 2023, price: 265000, mileage: 1200, fuel: 'Gasoline', transmission: 'Automatic', type: 'sports', origin: 'Italy', description: 'The Lamborghini Huracán is a V10 supercar with aggressive styling and spine-tingling exhaust.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Yellow' },
    { id: 20, make: 'Jaguar', model: 'F-PACE', year: 2023, price: 52800, mileage: 7600, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'UK', description: 'The Jaguar F-PACE is a sports car in SUV clothing. Sharp handling and elegant design.', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Green' },
    { id: 21, make: 'Maserati', model: 'Ghibli', year: 2022, price: 72800, mileage: 15200, fuel: 'Gasoline', transmission: 'Automatic', type: 'sedan', origin: 'Italy', description: 'The Maserati Ghibli is an Italian luxury sedan with a distinctive exhaust note.', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'White' },
    { id: 22, make: 'Hyundai', model: 'IONIQ 5', year: 2024, price: 41900, mileage: 100, fuel: 'Electric', transmission: 'Automatic', type: 'electric', origin: 'Korea', description: 'The Hyundai IONIQ 5 is a retro-futuristic electric crossover with ultra-fast charging.', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Cyan' },
    { id: 23, make: 'Kia', model: 'EV6', year: 2023, price: 42900, mileage: 4800, fuel: 'Electric', transmission: 'Automatic', type: 'electric', origin: 'Korea', description: 'The Kia EV6 is a sleek electric crossover with bold styling and fast charging.', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Silver' },
    { id: 24, make: 'Volvo', model: 'XC90', year: 2023, price: 56800, mileage: 8400, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'Sweden', description: 'The Volvo XC90 is a premium SUV with Scandinavian design and world-class safety.', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Gray' },
    { id: 25, make: 'Subaru', model: 'Outback', year: 2023, price: 34800, mileage: 11200, fuel: 'Gasoline', transmission: 'CVT', type: 'wagon', origin: 'Japan', description: 'The Subaru Outback is a rugged wagon with standard AWD and great ground clearance.', image: 'https://images.unsplash.com/photo-1623869674365-a7a1e12395fd?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Green' },
    { id: 26, make: 'Mazda', model: 'MX-5 Miata', year: 2023, price: 29800, mileage: 4200, fuel: 'Gasoline', transmission: 'Manual', type: 'convertible', origin: 'Japan', description: 'The Mazda MX-5 Miata is the world\'s best-selling sports car. Lightweight and pure driving joy.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Red' },
    { id: 27, make: 'Porsche', model: 'Taycan', year: 2024, price: 98700, mileage: 60, fuel: 'Electric', transmission: 'Automatic', type: 'electric', origin: 'Germany', description: 'The Porsche Taycan is a high-performance electric sports sedan.', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'White' },
    { id: 28, make: 'Dodge', model: 'Challenger SRT', year: 2023, price: 62500, mileage: 6800, fuel: 'Gasoline', transmission: 'Automatic', type: 'sports', origin: 'USA', description: 'The Dodge Challenger SRT is a retro-styled muscle car with a supercharged V8.', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Black' },
    { id: 29, make: 'Land Rover', model: 'Range Rover', year: 2024, price: 112000, mileage: 200, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'UK', description: 'The Range Rover is the ultimate luxury SUV with unmatched off-road capability.', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Black' },
    { id: 30, make: 'Aston Martin', model: 'DB11', year: 2022, price: 183000, mileage: 5600, fuel: 'Gasoline', transmission: 'Automatic', type: 'sports', origin: 'UK', description: 'The Aston Martin DB11 is a grand tourer with timeless elegance and a powerful V8.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Silver' },
    { id: 31, make: 'Toyota', model: 'Land Cruiser', year: 2023, price: 87900, mileage: 3200, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'Japan', description: 'The Toyota Land Cruiser is a legendary off-road SUV built to conquer the toughest terrains.', image: 'https://images.unsplash.com/photo-1623869674365-a7a1e12395fd?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Silver' },
    { id: 32, make: 'Mercedes-Benz', model: 'G-Class', year: 2024, price: 149000, mileage: 80, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'Germany', description: 'The Mercedes G-Class (G-Wagen) is an iconic off-roader with military heritage.', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Gray' },
    { id: 33, make: 'Nissan', model: 'Rogue', year: 2023, price: 29600, mileage: 15400, fuel: 'Gasoline', transmission: 'CVT', type: 'suv', origin: 'Japan', description: 'The Nissan Rogue is a compact SUV with a comfortable ride and spacious interior.', image: 'https://images.unsplash.com/photo-1623869674365-a7a1e12395fd?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Blue' },
    { id: 34, make: 'Chevrolet', model: 'Silverado', year: 2023, price: 51800, mileage: 9200, fuel: 'Gasoline', transmission: 'Automatic', type: 'truck', origin: 'USA', description: 'The Chevrolet Silverado is a full-size pickup truck with powerful engine options.', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Red' },
    { id: 35, make: 'BMW', model: '3 Series', year: 2023, price: 43800, mileage: 6800, fuel: 'Gasoline', transmission: 'Automatic', type: 'sedan', origin: 'Germany', description: 'The BMW 3 Series is the benchmark for sporty sedans with sharp handling.', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Blue' },
    { id: 36, make: 'Audi', model: 'A6', year: 2023, price: 56900, mileage: 7200, fuel: 'Gasoline', transmission: 'Automatic', type: 'sedan', origin: 'Germany', description: 'The Audi A6 is a mid-size luxury sedan with a refined interior and Quattro AWD.', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Black' },
    { id: 37, make: 'Tesla', model: 'Model Y', year: 2024, price: 48900, mileage: 60, fuel: 'Electric', transmission: 'Automatic', type: 'electric', origin: 'USA', description: 'The Tesla Model Y is a compact electric SUV with impressive range.', image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'White' },
    { id: 38, make: 'Ford', model: 'Bronco', year: 2023, price: 43800, mileage: 5600, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'USA', description: 'The Ford Bronco is a rugged off-road SUV with retro styling and serious trail capability.', image: 'https://images.unsplash.com/photo-1623869674365-a7a1e12395fd?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Blue' },
    { id: 39, make: 'Honda', model: 'Pilot', year: 2023, price: 39200, mileage: 13200, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'Japan', description: 'The Honda Pilot is a three-row SUV with spacious seating and Honda reliability.', image: 'https://images.unsplash.com/photo-1623869674365-a7a1e12395fd?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Silver' },
    { id: 40, make: 'Porsche', model: 'Cayenne', year: 2023, price: 78500, mileage: 4800, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'Germany', description: 'The Porsche Cayenne is a high-performance SUV with sports car dynamics.', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'White' },
    { id: 41, make: 'McLaren', model: '720S', year: 2022, price: 285000, mileage: 2800, fuel: 'Gasoline', transmission: 'Automatic', type: 'sports', origin: 'UK', description: 'The McLaren 720S is a British supercar with a twin-turbo V8 and dihedral doors.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Orange' },
    { id: 42, make: 'Lexus', model: 'ES 350', year: 2023, price: 43800, mileage: 8600, fuel: 'Gasoline', transmission: 'Automatic', type: 'sedan', origin: 'Japan', description: 'The Lexus ES 350 is a luxury sedan with a serene ride and premium materials.', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Silver' },
    { id: 43, make: 'Jeep', model: 'Wrangler', year: 2023, price: 34800, mileage: 14200, fuel: 'Gasoline', transmission: 'Manual', type: 'suv', origin: 'USA', description: 'The Jeep Wrangler is an off-road legend with a removable top and doors.', image: 'https://images.unsplash.com/photo-1623869674365-a7a1e12395fd?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Green' },
    { id: 44, make: 'Volkswagen', model: 'ID.4', year: 2023, price: 39900, mileage: 5200, fuel: 'Electric', transmission: 'Automatic', type: 'electric', origin: 'Germany', description: 'The VW ID.4 is an all-electric crossover with a spacious interior and practical range.', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Blue' },
    { id: 45, make: 'Alfa Romeo', model: 'Giulia', year: 2023, price: 46200, mileage: 9200, fuel: 'Gasoline', transmission: 'Automatic', type: 'sedan', origin: 'Italy', description: 'The Alfa Romeo Giulia is a sporty Italian sedan with breathtaking design.', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Red' },
    { id: 46, make: 'Subaru', model: 'Forester', year: 2023, price: 30800, mileage: 16400, fuel: 'Gasoline', transmission: 'CVT', type: 'suv', origin: 'Japan', description: 'The Subaru Forester is a compact SUV with standard AWD and excellent visibility.', image: 'https://images.unsplash.com/photo-1623869674365-a7a1e12395fd?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Gray' },
    { id: 47, make: 'Cadillac', model: 'Escalade', year: 2024, price: 82500, mileage: 120, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'USA', description: 'The Cadillac Escalade is a full-size luxury SUV with a commanding presence.', image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Black' },
    { id: 48, make: 'Peugeot', model: '3008', year: 2023, price: 35900, mileage: 8800, fuel: 'Gasoline', transmission: 'Automatic', type: 'suv', origin: 'France', description: 'The Peugeot 3008 is a stylish French SUV with a futuristic interior.', image: 'https://images.unsplash.com/photo-1623869674365-a7a1e12395fd?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'White' },
    { id: 49, make: 'Renault', model: 'Megane', year: 2022, price: 27800, mileage: 18600, fuel: 'Gasoline', transmission: 'Manual', type: 'sedan', origin: 'France', description: 'The Renault Megane is a compact hatchback with distinctive styling.', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Blue' },
    { id: 50, make: 'Fiat', model: '500', year: 2023, price: 19800, mileage: 4200, fuel: 'Gasoline', transmission: 'Manual', type: 'sedan', origin: 'Italy', description: 'The Fiat 500 is a charming Italian city car with retro styling.', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Yellow' },
    { id: 51, make: 'Mitsubishi', model: 'Outlander', year: 2023, price: 32800, mileage: 11200, fuel: 'Gasoline', transmission: 'CVT', type: 'suv', origin: 'Japan', description: 'The Mitsubishi Outlander is a compact SUV with seven seats and available PHEV.', image: 'https://images.unsplash.com/photo-1623869674365-a7a1e12395fd?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Gray' },
    { id: 52, make: 'Bentley', model: 'Continental GT', year: 2023, price: 198000, mileage: 800, fuel: 'Gasoline', transmission: 'Automatic', type: 'luxury', origin: 'UK', description: 'The Bentley Continental GT is a grand tourer with a W12 engine and handcrafted interior.', image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=400&fit=crop&auto=format', featured: true, sold: false, color: 'Silver' },
    { id: 53, make: 'Polestar', model: '2', year: 2023, price: 49800, mileage: 2400, fuel: 'Electric', transmission: 'Automatic', type: 'electric', origin: 'Sweden', description: 'The Polestar 2 is a sleek electric fastback with Google built-in.', image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Gray' },
    { id: 54, make: 'GMC', model: 'Sierra 1500', year: 2023, price: 54800, mileage: 7200, fuel: 'Gasoline', transmission: 'Automatic', type: 'truck', origin: 'USA', description: 'The GMC Sierra 1500 is a premium pickup truck with advanced towing tech.', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Red' },
    { id: 55, make: 'Mini', model: 'Cooper S', year: 2023, price: 31500, mileage: 5800, fuel: 'Gasoline', transmission: 'Manual', type: 'sedan', origin: 'UK', description: 'The Mini Cooper S is a fun-loving hatchback with go-kart handling.', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&auto=format', featured: false, sold: false, color: 'Red' }
];

// ============================================================
//  STATE
// ============================================================
let currentFilter = 'all';
let currentSearch = '';
let currentMake = 'all';
let currentType = 'all';
let currentPrice = 'all';
let currentSort = 'default';
let visibleCount = 12;
const loadStep = 8;

// ============================================================
//  DOM REFS
// ============================================================
const carGrid = document.getElementById('carGrid');
const filterButtons = document.querySelectorAll('#filterBar button');
const searchInput = document.getElementById('searchInput');
const makeFilter = document.getElementById('makeFilter');
const typeFilter = document.getElementById('typeFilter');
const priceFilter = document.getElementById('priceFilter');
const sortSelect = document.getElementById('sortSelect');
const searchBtn = document.getElementById('searchBtn');
const totalCarsSpan = document.getElementById('totalCars');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const scrollTopBtn = document.getElementById('scrollTop');

const modal = document.getElementById('carModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalSpecs = document.getElementById('modalSpecs');
const modalDesc = document.getElementById('modalDesc');
const closeModal = document.getElementById('closeModal');
const modalTestDrive = document.getElementById('modalTestDrive');
const modalContact = document.getElementById('modalContact');

// ============================================================
//  HELPER: format KES
// ============================================================
function formatKES(usdPrice) {
    const kes = Math.round(usdPrice * EXCHANGE_RATE);
    return 'KES ' + kes.toLocaleString('en-KE');
}

// ============================================================
//  POPULATE MAKE FILTER
// ============================================================
function populateMakeFilter() {
    const makes = [...new Set(carDatabase.map(c => c.make))].sort();
    makes.forEach(make => {
        const opt = document.createElement('option');
        opt.value = make.toLowerCase();
        opt.textContent = make;
        makeFilter.appendChild(opt);
    });
}
populateMakeFilter();

// ============================================================
//  RENDER CARS
// ============================================================
function getFilteredCars() {
    let filtered = carDatabase.filter(car => {
        if (currentFilter !== 'all' && car.type !== currentFilter) return false;
        if (currentMake !== 'all' && car.make.toLowerCase() !== currentMake) return false;
        if (currentType !== 'all' && car.type !== currentType) return false;

        // Price filter (in KES)
        if (currentPrice !== 'all') {
            const [min, max] = currentPrice.split('-').map(Number);
            const priceKES = car.price * EXCHANGE_RATE;
            if (max === 99999999) {
                if (priceKES < min) return false;
            } else {
                if (priceKES < min || priceKES > max) return false;
            }
        }

        // Search
        if (currentSearch.trim() !== '') {
            const q = currentSearch.toLowerCase().trim();
            const match = car.model.toLowerCase().includes(q) ||
                car.make.toLowerCase().includes(q) ||
                car.origin.toLowerCase().includes(q);
            if (!match) return false;
        }
        return true;
    });

    // Sort
    switch (currentSort) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'year-desc':
            filtered.sort((a, b) => b.year - a.year);
            break;
        case 'year-asc':
            filtered.sort((a, b) => a.year - b.year);
            break;
        case 'mileage-asc':
            filtered.sort((a, b) => a.mileage - b.mileage);
            break;
        default:
            filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
            break;
    }
    return filtered;
}

function renderCars() {
    const filtered = getFilteredCars();
    const total = filtered.length;
    totalCarsSpan.textContent = total;

    const visible = filtered.slice(0, visibleCount);
    const hasMore = visibleCount < total;

    if (visible.length === 0) {
        carGrid.innerHTML = `
            <div style="grid-column:1/-1; text-align:center; padding:60px 20px; background:#fff; border-radius:var(--radius); box-shadow:var(--shadow);">
                <i class="fas fa-search" style="font-size:3rem; opacity:0.2; display:block; margin-bottom:16px;"></i>
                <h3 style="font-size:1.4rem; color:var(--primary);">No cars found</h3>
                <p style="color:var(--gray);">Try adjusting your filters or search terms.</p>
            </div>
        `;
        loadMoreBtn.style.display = 'none';
        return;
    }

    carGrid.innerHTML = visible.map(car => `
        <div class="car-card fade-up">
            ${car.sold ? '<div class="card-badge sold">Sold</div>' : ''}
            ${car.featured && !car.sold ? '<div class="card-badge featured">★ Featured</div>' : ''}
            ${car.fuel === 'Electric' && !car.sold ? '<div class="card-badge electric">⚡ Electric</div>' : ''}
            <img class="card-img" src="${car.image}" alt="${car.make} ${car.model}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&h=400&fit=crop&auto=format'" />
            <div class="card-body">
                <div class="car-name">${car.make} ${car.model}</div>
                <div class="car-make">${car.year} · ${car.origin} · ${car.type.charAt(0).toUpperCase() + car.type.slice(1)}</div>
                <div class="car-price">${formatKES(car.price)} <small>MSRP</small></div>
                <div class="car-specs">
                    <span><i class="fas fa-tachometer-alt"></i> ${car.mileage.toLocaleString()} mi</span>
                    <span><i class="fas fa-gas-pump"></i> ${car.fuel}</span>
                    <span><i class="fas fa-cog"></i> ${car.transmission}</span>
                </div>
                <button class="btn btn-primary" onclick="openModal(${car.id})">
                    <i class="fas fa-info-circle"></i> View Details
                </button>
            </div>
        </div>
    `).join('');

    loadMoreBtn.style.display = hasMore ? 'inline-flex' : 'none';
    observeFadeElements();
}

// ============================================================
//  LOAD MORE
// ============================================================
loadMoreBtn.addEventListener('click', () => {
    visibleCount += loadStep;
    renderCars();
});

// ============================================================
//  MODAL
// ============================================================
function openModal(id) {
    const car = carDatabase.find(c => c.id === id);
    if (!car) return;
    modalImg.src = car.image;
    modalImg.alt = `${car.make} ${car.model}`;
    modalTitle.textContent = `${car.make} ${car.model} (${car.year})`;
    modalPrice.textContent = formatKES(car.price);
    modalDesc.textContent = car.description;

    modalSpecs.innerHTML = `
        <div class="spec-item"><span>Origin</span><span>${car.origin}</span></div>
        <div class="spec-item"><span>Type</span><span>${car.type.charAt(0).toUpperCase() + car.type.slice(1)}</span></div>
        <div class="spec-item"><span>Mileage</span><span>${car.mileage.toLocaleString()} miles</span></div>
        <div class="spec-item"><span>Fuel</span><span>${car.fuel}</span></div>
        <div class="spec-item"><span>Transmission</span><span>${car.transmission}</span></div>
        <div class="spec-item"><span>Color</span><span>${car.color}</span></div>
        ${car.sold ? '<div class="spec-item"><span>Status</span><span style="color:var(--accent);">Sold</span></div>' : ''}
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    modalTestDrive.onclick = () => {
        alert(`🚗 Test drive requested for ${car.make} ${car.model}. We'll contact you shortly!`);
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };
    modalContact.onclick = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };
}

function closeModalFn() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

closeModal.addEventListener('click', closeModalFn);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFn();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModalFn();
});
window.openModal = openModal;

// ============================================================
//  FILTERS & SEARCH
// ============================================================
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        visibleCount = 12;
        renderCars();
    });
});

searchBtn.addEventListener('click', () => {
    currentSearch = searchInput.value;
    visibleCount = 12;
    renderCars();
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        currentSearch = searchInput.value;
        visibleCount = 12;
        renderCars();
    }
});

makeFilter.addEventListener('change', () => {
    currentMake = makeFilter.value;
    visibleCount = 12;
    renderCars();
});

typeFilter.addEventListener('change', () => {
    currentType = typeFilter.value;
    visibleCount = 12;
    renderCars();
});

priceFilter.addEventListener('change', () => {
    currentPrice = priceFilter.value;
    visibleCount = 12;
    renderCars();
});

sortSelect.addEventListener('change', () => {
    currentSort = sortSelect.value;
    visibleCount = 12;
    renderCars();
});

document.querySelectorAll('.brands-bar .brand-item').forEach(item => {
    item.addEventListener('click', () => {
        const make = item.dataset.make;
        if (make === 'all') {
            currentMake = 'all';
            makeFilter.value = 'all';
        } else {
            currentMake = make;
            makeFilter.value = make;
        }
        visibleCount = 12;
        renderCars();
        document.getElementById('inventory').scrollIntoView({ behavior: 'smooth' });
    });
});

// ============================================================
//  HAMBURGER
// ============================================================
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ============================================================
//  SCROLL TO TOP
// ============================================================
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================
//  FADE-UP OBSERVER
// ============================================================
function observeFadeElements() {
    const faders = document.querySelectorAll('.fade-up:not(.visible)');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    faders.forEach(el => observer.observe(el));
}

// ============================================================
//  FORMS
// ============================================================
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Thank you! Your message has been sent. Our team will get back to you within 24 hours.');
    e.target.reset();
});

document.getElementById('newsletterForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('📬 Thanks for subscribing! You\'ll receive the latest deals and news.');
    e.target.reset();
});

document.getElementById('navTestDrive').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});

// ============================================================
//  INIT
// ============================================================
renderCars();
observeFadeElements();

const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a:not(.btn)');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
});

console.log(`🚗 AutoGlobe loaded — ${carDatabase.length} cars from around the world. Prices in KES (rate: 1 USD = ${EXCHANGE_RATE} KES).`);
