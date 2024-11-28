// import mongoose from 'mongoose'
// import dotenv from 'dotenv'
// import colors from 'colors'
// import users from './data/users.js'
// import products from './data/products.js'
// import User from './models/userModel.js'
// import Product from './models/productModel.js'
// import Order from './models/orderModel.js'
// import connectDB from './config/db.js'

// dotenv.config()

// connectDB()



// const importData = async () => {
//   try {
//     await Order.deleteMany()
//     await Product.deleteMany()
//     await User.deleteMany()

//     const createdUsers = await User.insertMany(users)

//     const adminUser = createdUsers[0]._id

//     const sampleProducts = products.map((product) => {
//       return { ...product, user: adminUser }
//     })

//     try {
//       const result = await Product.insertMany(sampleProducts);
//       console.log('Insert Result:', result);
//     } catch (error) {
//       console.error('Insert Error:', error);
//     }
    

//     //await Product.insertMany(sampleProducts)

//     console.log('Data Imported!'.green.inverse)
//     process.exit()
//   } catch (error) {
//     console.error(`${error}`.red.inverse)
//     process.exit(1)
//   }
// }

// const destroyData = async () => {
//   try {
//     await Order.deleteMany()
//     await Product.deleteMany()
//     await User.deleteMany()

//     console.log('Data Destroyed!'.red.inverse)
//     process.exit()
//   } catch (error) {
//     console.error(`${error}`.red.inverse)
//     process.exit(1)
//   }
// }

// if (process.argv[2] === '-d') {
//   destroyData()
// } else {
//   importData()
// }



import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './data/users.js';
import products from './data/products.js';
import User from './models/userModel.js';
import Product from './models/productModel.js';
import Order from './models/orderModel.js';
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    console.log('Before Inserting Products');
    const result = await Product.insertMany(sampleProducts);
    console.log('After Inserting Products');
    console.log('Insert Result:', result);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error('Seeder Error:', error.message.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error('Seeder Error:', error.message.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
