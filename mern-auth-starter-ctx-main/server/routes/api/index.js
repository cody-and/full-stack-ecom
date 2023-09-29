const router = require('express').Router();
const addressRoutes = require('./address.routes')
const authRoutes = require('./auth.routes');
const cartRoutes = require('./cart.routes')
const categoryRoutes = require('./category.routes')
const couponRoutes = require('./coupon.routes')
const orderRoutes = require('./order.routes')
const paymentRoutes = require('./payment.routes')
const productRoutes = require('./product.routes')
const reviewRoutes = require('./review.routes')
const userRoutes = require('./user.routes');

routeer.use('/address' , addressRoutes);
router.use('/auth', authRoutes);
router.use('/cart' ,cartRoutes);
router.use('/category', categoryRoutes);
router.use('/coupon', couponRoutes);
router.use('/order', orderRoutes);
router.use('/payment', paymentRoutes);
router.use('/product', productRoutes);
router.use('/review', reviewRoutes);
router.use('/user', userRoutes);

module.exports = router;
