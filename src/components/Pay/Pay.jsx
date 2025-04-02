import React, { useState, useEffect, useMemo } from 'react';
import './Pay.css';

const Pay = ({ togglePaymentModal, cartItems }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        password: '',
        confirmPassword: '',
        shipping: '',
        payment: '',
        acceptTerms: false,
        cardNumber: ''
    });

    const [errors, setErrors] = useState({
        cardNumber: ''
    });
    const [shippingCost, setShippingCost] = useState(0);
    const [total, setTotal] = useState(0);
    const [exchangeRate, setExchangeRate] = useState(24500); 
    const [isLoadingRate, setIsLoadingRate] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

   useEffect(() => {
     const fetchExchangeRate = async () => {
      setIsLoadingRate(true);
       try {
         const response = await fetch('YOUR_EXCHANGE_RATE_API_ENDPOINT');
         const data = await response.json();
         if (data && data.rate) {
           setExchangeRate(data.rate);
         } else {
           console.error('Failed to fetch exchange rate: Invalid API response');
         }
       } catch (error) {
         console.error('Failed to fetch exchange rate:', error);
       } finally {
         setIsLoadingRate(false);
       }
     };
     fetchExchangeRate();
    }, []);


    const calculateTotal = useMemo(() => {
        return cartItems.reduce((total, item) => {
            const price = Number(item.price.replace(/\./g, "").replace(" đ", ""));
            return total + (price * item.quantity);
        }, 0);
    }, [cartItems]);

    useEffect(() => {
        let newShippingCost = 0;
        if (formData.shipping === 'ems') {
            newShippingCost = 18 * exchangeRate;
        }
        setShippingCost(newShippingCost);
    }, [formData.shipping, exchangeRate]);

    useEffect(() => {
        setTotal(calculateTotal + shippingCost);
    }, [calculateTotal, shippingCost]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });

        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ''
        }));
    };


    const validateField = (name, value) => {
        let error = '';
        switch (name) {
            case 'firstName':
                if (!value) error = 'Vui lòng nhập Họ.';
                break;
            case 'lastName':
                if (!value) error = 'Vui lòng nhập Tên.';
                break;
            case 'email':
                if (!value) error = 'Vui lòng nhập Địa Chỉ Email.';
                break;
            case 'phone':
                if (!value) error = 'Vui lòng nhập số điện thoại.';
                break;
            case 'address':
                if (!value) error = 'Vui lòng nhập Địa Chỉ.';
                break;
            case 'cardNumber': 
                if (!value) error = 'Vui lòng nhập Mã Thẻ.';
                break;
            case 'city':
                if (!value) error = 'Vui lòng nhập Thành Phố.';
                break;
            case 'zipCode':
                if (!value) error = 'Vui lòng nhập Mã Bưu Chính.';
                break;
            case 'password':
                if (!value) error = 'Vui lòng nhập Mật Khẩu.';
                break;
            case 'confirmPassword':
                if (!value) error = 'Vui lòng xác nhận Mật Khẩu.';
                else if (value !== formData.password) error = 'Mật khẩu không trùng khớp.';
                break;
            case 'shipping':
                if (!value) error = 'Vui lòng chọn Phương thức vận chuyển.';
                break;
            case 'payment':
                if (!value) error = 'Vui lòng chọn Phương thức thanh toán.';
                break;
            case 'acceptTerms':
                if (!value) error = 'Vui lòng chấp nhận các Điều khoản và Điều kiện.';
                break;
            default:
                break;
        }
        return error;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        for (const key in formData) {
            const error = validateField(key, formData[key]);
            if (error) newErrors[key] = error;
        }
        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'Vui lòng chấp nhận các Điều khoản và Điều kiện.';
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log('Form Data:', formData);
            setShowSuccessModal(true); 
            setTimeout(() => { 
                setShowSuccessModal(false);
                togglePaymentModal(); 
            }, 2000);

        } else {
            console.log('Form has errors.');
        }
    };



    const formatCurrency = (number) => {
        return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    return (
        <div className="payment-modal">
            <div className="payment-modal-content">
                <span className="close-payment-modal" onClick={togglePaymentModal}>×</span>
                <h2 className='h22'>Thanh Toán</h2>
                <p className='p1'>Hãy điền vào mẫu dưới đây để hoàn tất việc mua hàng của bạn!</p>

                <form onSubmit={handleSubmit}>
                    <div className="checkout-grid">
                        {/* Column 1: Billing Address */}
                        <div className="checkout-column">
                            <div className="section">
                                <h3 className='h33'>1. Địa Chỉ Thanh Toán</h3>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">Họ*</label>
                                        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                                        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Tên*</label>
                                        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                                        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Địa Chỉ Email*</label>
                                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                                        {errors.email && <p className="error-message">{errors.email}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Điện Thoại*</label>
                                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                                        {errors.phone && <p className="error-message">{errors.phone}</p>}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Địa Chỉ*</label>
                                    <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
                                    {errors.address && <p className="error-message">{errors.address}</p>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="cardNumber">Mã Thẻ*</label>
                                    <input
                                        type="password" 
                                        id="cardNumber"
                                        name="cardNumber"
                                        value={formData.cardNumber}
                                        onChange={handleChange}
                                    />
                                    {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="country">Quốc Gia*</label>
                                        <select id="country" name="country" onChange={handleChange}>
                                            <option>Viet Nam</option>
                                            <option>China</option>
                                            <option>United States</option>
                                            <option>Campuchia</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="State">Tiểu Bang/Tỉnh*</label>
                                        <select id="State" name="State" onChange={handleChange}>
                                            <option>Ha Noi</option>
                                            <option>Ho Chi Minh</option>
                                            <option>New York</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="city">Thành Phố*</label>
                                        <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
                                        {errors.city && <p className="error-message">{errors.city}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="zipCode">Mã Bưu Chính*</label>
                                        <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} />
                                        {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="company">Công Ty</label>
                                        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="fax">Fax</label>
                                        <input type="text" id="fax" name="fax" value={formData.fax} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <input type="checkbox" id="createAccount" />
                                    <label htmlFor="createAccount">Lưu thông tin để sử dụng sau</label>
                                </div>
                                
                                <div className="form-group">
                                    <input type="checkbox" id="shipSameAddress" defaultChecked />
                                    <label htmlFor="shipSameAddress">Gửi đến cùng một địa chỉ</label>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Shipping & Payment Methods */}
                        <div className="checkout-column">
                            <div className="section">
                                <h3 className='h33'>2. Phương Thức Vận Chuyển</h3>
                                <div className="radio-group">
                                    <label>
                                        <input type="radio" name="shipping" value="free" checked={formData.shipping === 'free'} onChange={handleChange} />
                                        Free Shipping: $0.00
                                    </label>
                                    <label>
                                        <input type="radio" name="shipping" value="ems" checked={formData.shipping === 'ems'} onChange={handleChange} />
                                        EMS (Chuyển Phát Nhanh): $18.00
                                    </label>
                                    {errors.shipping && <p className="error-message">{errors.shipping}</p>}
                                </div>
                            </div>

                            <div className="section">
                                <h3 className='h33'>3. Phương Thức Thanh Toán</h3>
                                <div className="radio-group">
                                    <label>
                                        <input type="radio" name="payment" value="paypal" checked={formData.payment === 'paypal'} onChange={handleChange} />
                                        PayPal
                                    </label>
                                    <label>
                                        <input type="radio" name="payment" value="creditCard" checked={formData.payment === 'creditCard'} onChange={handleChange} />
                                        Credit Card
                                    </label>
                                    <label>
                                        <input type="radio" name="payment" value="tienmat" checked={formData.payment === 'tienmat'} onChange={handleChange} />
                                        Tiền Mặt
                                    </label>
                                    {errors.payment && <p className="error-message">{errors.payment}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Review Your Order */}
                        <div className="checkout-column">
                            <div className="section">
                                <h3 className='h33'>4. Xem lại đơn hàng của bạn</h3>
                                <div className="order-details">
                                    <div className="order-item">
                                        <p className='p1'>Sản phẩm</p>
                                        <p className='p1'>Số lượng</p>
                                        <p className='p1'>Tổng cộng</p>
                                    </div>
                                    {cartItems && cartItems.length > 0 ? (
                                        cartItems.map(item => (
                                            <div className="order-item" key={item.id}>
                                                <p className='p1'>{item.title}</p>
                                                <p className='p1'>{item.quantity}</p>
                                                <p className='p1'>{formatCurrency(Number(item.price.replace(/\./g, "").replace(" đ", "")) * item.quantity)}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className='p1'>Không có sản phẩm nào trong giỏ hàng.</p>
                                    )}
                                    <div className="order-item shipping">
                                        <p className='p1'>Shipping</p>
                                        <p className='p1'>{formatCurrency(shippingCost)}</p>
                                    </div>
                                    <div className="order-item grand-total">
                                        <p className='p1'>Tổng Đơn Giá</p>
                                        <p className='p1'>{formatCurrency(total)}</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="couponCode">Mã Phiếu Giảm Giá:</label>
                                    <input type="text" id="couponCode" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="giftCardCode">Mã Quà Tặng:</label>
                                    <input type="text" id="giftCardCode" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comments">Ghi Chú</label>
                                    <textarea id="comments" rows="4" placeholder="Bạn có yêu cầu gì với chúng tôi không?"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="howDidYouHear">Bạn biết đến chúng tôi như thế nào?</label>
                                    <select id="howDidYouHear">
                                        <option>Khác</option>
                                        <option>Xem quảng cáo trên Youtube</option>
                                        <option>Được bạn bè người thân giới thiệu</option>
                                        <option>Xem quảng cáo trên TikTok</option>
                                        <option>Tự tìm thấy</option>
                                    </select>
                                    <label htmlFor="howDidYouHearSpecify">Vui lòng nêu rõ:</label>
                                    <input type="text" id="howDidYouHearSpecify" defaultValue="" />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="checkbox"
                                        id="acceptTerms"
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="acceptTerms">Tôi chấp nhận các Điều khoản và Điều kiện</label>
                                    {errors.acceptTerms && (
                                        <p className="error-message">{errors.acceptTerms}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="place-order-btn" type="submit">ĐẶT HÀNG NGAY</button>
                </form>
            </div>

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="success-modal">
                    <div className="success-modal-content">
                        <div className="success-icon">✔</div>
                        <p className='p1'>Đặt hàng thành công!</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Pay;