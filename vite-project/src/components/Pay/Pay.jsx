// import React, { useState, useEffect, useMemo, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Pay.css'; 
// import { CartContext } from '../../context/cart';
// import { path } from '../../constants/path'; 

// const Pay = () => {
//     const navigate = useNavigate();
//     const { cartItems, clearCart } = useContext(CartContext); 

//     const [formData, setFormData] = useState({
       
//         firstName: '',
//         lastName: '',
//         email: '',
//         phone: '',
//         address: '',
//         city: '', 
//         zipCode: '',
//         country: 'Viet Nam',
//         state: 'Ho Chi Minh', 
//         company: '',
//         fax: '',

   
//         shippingFirstName: '',
//         shippingLastName: '',
//         shippingAddress: '',
//         shippingCity: '', 
//         shippingZipCode: '',
//         shippingCountry: 'Viet Nam',
//         shippingState: 'Ho Chi Minh', 
//         shippingCompany: '',
//         shippingPhone: '',

      
//         shipSameAddress: true, 
//         shipping: 'free',      
//         payment: '',          
//         cardNumber: '',
//         couponCode: '',
//         giftCardCode: '',
//         comments: '',
//         howDidYouHear: 'Khác',
//         howDidYouHearSpecify: '',
//         acceptTerms: false,
//     });

//     const [errors, setErrors] = useState({});
//     const [shippingCost, setShippingCost] = useState(0);
//     const [total, setTotal] = useState(0);
//     const [exchangeRate] = useState(24500);
//     const [showSuccessModal, setShowSuccessModal] = useState(false);


//     const calculateSubTotal = useMemo(() => {
//         if (!cartItems || cartItems.length === 0) return 0;
//         return cartItems.reduce((sum, item) => {
//             const priceString = String(item?.price || '0').replace(/[.,đ\s]/g, ""); 
//             const price = Number(priceString);
//             const quantity = Number(item?.quantity || 0);
//             if (isNaN(price) || isNaN(quantity)) {
//                  console.warn("Giá hoặc số lượng không hợp lệ cho sản phẩm:", item);
//                  return sum;
//             }
//             return sum + (price * quantity);
//         }, 0);
//     }, [cartItems]);


//     useEffect(() => {
//         let newShippingCost = 0;
//         if (formData.shipping === 'ems') {
//             newShippingCost = 18 * exchangeRate;
//         } else if (formData.shipping === 'free') {
//             newShippingCost = 0; 
//         }

//         setShippingCost(newShippingCost);
//     }, [formData.shipping, exchangeRate]);


//     useEffect(() => {
//         setTotal(calculateSubTotal + shippingCost);
//     }, [calculateSubTotal, shippingCost]);


//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));

//         if (errors[name]) {
//             setErrors(prev => {
//                 const newErrors = { ...prev };
//                 delete newErrors[name];
//                 return newErrors;
//             });
//         }
//     };


//     const validateField = (name, value, currentFormData) => { 
//         let error = '';
//         const isShippingRequired = !currentFormData.shipSameAddress;

//         switch (name) {
//             // Billing Validation
//             case 'firstName':
//                 if (!value.trim()) error = 'Vui lòng nhập Họ.'; break;
//             case 'lastName':
//                 if (!value.trim()) error = 'Vui lòng nhập Tên.'; break;
//             case 'email':
//                 if (!value.trim()) error = 'Vui lòng nhập Email.';
//                 else if (!/\S+@\S+\.\S+/.test(value)) error = 'Email không hợp lệ.'; break;
//             case 'phone':
//                 if (!value.trim()) error = 'Vui lòng nhập Điện thoại.';
//                 else if (!/^\d{10,11}$/.test(value)) error = 'Số điện thoại không hợp lệ (10-11 số).'; break;
//             case 'address':
//                 if (!value.trim()) error = 'Vui lòng nhập Địa chỉ.'; break;
//             case 'city': 
//                 if (!value.trim()) error = 'Vui lòng nhập Quận/Huyện.'; break;
//             case 'state': 
//                  if (!value.trim()) error = 'Vui lòng chọn Tỉnh/Thành phố.'; break; 
//             case 'zipCode':
//                 if (!value.trim()) error = 'Vui lòng nhập Mã bưu chính.';
//                 else if (!/^\d{5,6}$/.test(value)) error = 'Mã bưu chính không hợp lệ (5-6 số).'; break;
//              case 'country':
//                 if (!value.trim()) error = 'Vui lòng chọn Quốc Gia.'; break; 

//             // Shipping Validation 
//             case 'shippingFirstName':
//                 if (isShippingRequired && !value.trim()) error = 'Vui lòng nhập Họ người nhận.'; break;
//             case 'shippingLastName':
//                 if (isShippingRequired && !value.trim()) error = 'Vui lòng nhập Tên người nhận.'; break;
//             case 'shippingAddress':
//                 if (isShippingRequired && !value.trim()) error = 'Vui lòng nhập Địa chỉ giao hàng.'; break;
//             case 'shippingCity':
//                  if (isShippingRequired && !value.trim()) error = 'Vui lòng nhập Quận/Huyện giao hàng.'; break;
//             case 'shippingZipCode':
//                  if (isShippingRequired && !value.trim()) error = 'Vui lòng nhập Mã bưu chính giao hàng.';
//                  else if (isShippingRequired && value.trim() && !/^\d{5,6}$/.test(value)) error = 'Mã bưu chính không hợp lệ (5-6 số).'; break;
//              case 'shippingPhone':
//                  if (isShippingRequired && value.trim() && !/^\d{10,11}$/.test(value)) error = 'Số điện thoại giao hàng không hợp lệ (10-11 số).'; break;
//              case 'shippingState':
//                  if (isShippingRequired && !value.trim()) error = 'Vui lòng chọn Tỉnh/Thành phố giao hàng.'; break;
//              case 'shippingCountry':
//                  if (isShippingRequired && !value.trim()) error = 'Vui lòng chọn Quốc Gia giao hàng.'; break;

//             // Other Fields Validation
//             case 'cardNumber':
//                  if (currentFormData.payment === 'creditCard' && !value.trim()) error = 'Vui lòng nhập số thẻ.';
//                  break;
//             case 'shipping':
//                 if (!value) error = 'Vui lòng chọn Phương thức vận chuyển.'; break;
//             case 'payment':
//                 if (!value) error = 'Vui lòng chọn Phương thức thanh toán.'; break;
//             default: break;
//         }
//         return error;
//     };


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log("Submit triggered. Current formData:", formData);

//         let newErrors = {};
//         let isValid = true;


//         const fieldsToValidate = [
//             'firstName', 'lastName', 'email', 'phone', 'address', 'city', 'zipCode', 'country', 'state', 'shipping', 'payment'
//         ];

//         // Thêm cardNumber nếu chọn thẻ tín dụng
//         if (formData.payment === 'creditCard') {
//             fieldsToValidate.push('cardNumber');
//         }

//         // Thêm các trường shipping nếu địa chỉ giao hàng khác
//         if (!formData.shipSameAddress) {
//             fieldsToValidate.push(
//                 'shippingFirstName', 'shippingLastName', 'shippingAddress',
//                 'shippingCity', 'shippingZipCode', 'shippingCountry', 'shippingState'
//             );
//              if(formData.shippingPhone.trim()){
//                  fieldsToValidate.push('shippingPhone');
//             }
//         }

//         // Validate tất cả các trường đã xác định
//         fieldsToValidate.forEach(field => {
//              // Truyền formData hiện tại vào validateField
//             const error = validateField(field, formData[field], formData);
//             if (error) {
//                 console.log(`Validation Error - Field: ${field}, Value: '${formData[field]}', Error: ${error}`);
//                 newErrors[field] = error;
//                 isValid = false;
//             }
//         });

//         // Validate việc chấp nhận điều khoản
//         if (!formData.acceptTerms) {
//             newErrors.acceptTerms = 'Vui lòng chấp nhận các Điều khoản và Điều kiện.';
//             isValid = false;
//             console.log("Validation Error - acceptTerms not checked.");
//         }

//         setErrors(newErrors); 

//         console.log("Validation complete. Is form valid?", isValid);
//         console.log("Final errors object:", newErrors);

//         if (isValid) {
//             console.log('Form is valid. Proceeding with submission...');
//             console.log('Form Data Submitted:', formData);

//             setShowSuccessModal(true); //Hiển thị modal
//             clearCart(); // Xóa giỏ hàng

//             setTimeout(() => {
//                 setShowSuccessModal(false);
//                 navigate(path.cocoon || '/'); // Chuyển hướng sau khi modal hiển thị
//             }, 2000); // Thời gian hiển thị modal (2 giây)
//         } else {
//             // FORM KHÔNG HỢP LỆ 
//             console.log('Form has validation errors. Submission blocked.');
//             // Cuộn đến trường lỗi đầu tiên
//             const firstErrorField = Object.keys(newErrors)[0];
//             if (firstErrorField) {
//                 const element = document.getElementById(firstErrorField);
//                 if (element) {
//                     element.scrollIntoView({ behavior: 'smooth', block: 'center' });
//                     setTimeout(() => element.focus({ preventScroll: true }), 300);
//                 } else {
//                      const termsElement = document.getElementById('acceptTerms');
//                      if(firstErrorField === 'acceptTerms' && termsElement) {
//                          termsElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
//                      } else {
//                          window.scrollTo({ top: 0, behavior: 'smooth' });
//                      }
//                 }
//             } else {
//                 // Fallback nếu không có lỗi cụ thể nào
//                  window.scrollTo({ top: 0, behavior: 'smooth' });
//             }
//         }
//     };


//     const formatCurrency = (number) => {
//         if (isNaN(number)) return '0 đ';
//         return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
//     };

//     // Kiểm tra giỏ hàng rỗng
//      const isCartEmpty = !cartItems || cartItems.length === 0;

//     return (
//         <div className="checkout-page-container py-4" style={{ backgroundColor: '#FEFBF4' }}>
//             <div className="payment-modal-content">
//                 <h2 className='h22'>Thanh Toán</h2>
//                 <p className='p1'>Hãy điền vào mẫu dưới đây để hoàn tất việc mua hàng của bạn!</p>
//                  {errors.form && <p className="error-message alert alert-danger">{errors.form}</p>}
//                 <form onSubmit={handleSubmit} noValidate>
//                     <div className="checkout-grid">
//                         {/* Column 1: Billing & Shipping Address */}
//                         <div className="checkout-column">
//                             <div className="section">
//                                 <h3 className='h33'>1. Địa Chỉ Thanh Toán</h3>
//                                 {/* Billing Address Fields */}
//                                 <div className="form-row">
//                                     <div className="form-group">
//                                         <label htmlFor="firstName">Họ*</label>
//                                         <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required className={errors.firstName ? 'is-invalid' : ''} />
//                                         {errors.firstName && <p className="error-message">{errors.firstName}</p>}
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="lastName">Tên*</label>
//                                         <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required className={errors.lastName ? 'is-invalid' : ''} />
//                                         {errors.lastName && <p className="error-message">{errors.lastName}</p>}
//                                     </div>
//                                 </div>
//                                 <div className="form-row">
//                                     <div className="form-group">
//                                         <label htmlFor="email">Email*</label>
//                                         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={errors.email ? 'is-invalid' : ''} />
//                                         {errors.email && <p className="error-message">{errors.email}</p>}
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="phone">Điện Thoại*</label>
//                                         <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required className={errors.phone ? 'is-invalid' : ''} />
//                                         {errors.phone && <p className="error-message">{errors.phone}</p>}
//                                     </div>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="address">Địa Chỉ*</label>
//                                     <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} required className={errors.address ? 'is-invalid' : ''} />
//                                     {errors.address && <p className="error-message">{errors.address}</p>}
//                                 </div>
//                                 <div className="form-row">
//                                     <div className="form-group">
//                                         <label htmlFor="country">Quốc Gia*</label>
//                                         <select id="country" name="country" value={formData.country} onChange={handleChange} required className={errors.country ? 'is-invalid' : ''}>
//                                             <option value="Viet Nam">Việt Nam</option>
//                                             <option value="United States">Hoa Kỳ</option>
//                                         </select>
//                                          {errors.country && <p className="error-message">{errors.country}</p>}
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="state">Tỉnh/Thành phố*</label>
//                                         <select id="state" name="state" value={formData.state} onChange={handleChange} required className={errors.state ? 'is-invalid' : ''}>
//                                             <option value="Ho Chi Minh">Hồ Chí Minh</option>
//                                             <option value="Ha Noi">Hà Nội</option>
//                                             <option value="Da Nang">Đà Nẵng</option>
//                                         </select>
//                                          {errors.state && <p className="error-message">{errors.state}</p>}
//                                     </div>
//                                 </div>
//                                 <div className="form-row">
//                                     <div className="form-group">
//                                         <label htmlFor="city">Quận/Huyện*</label>
//                                         <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} required className={errors.city ? 'is-invalid' : ''} />
//                                         {errors.city && <p className="error-message">{errors.city}</p>}
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="zipCode">Mã Bưu Chính*</label>
//                                         <input type="text" id="zipCode" name="zipCode" value={formData.zipCode} onChange={handleChange} required className={errors.zipCode ? 'is-invalid' : ''} />
//                                         {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}
//                                     </div>
//                                 </div>
//                                 <div className="form-row">
//                                     <div className="form-group">
//                                         <label htmlFor="company">Công Ty (Tùy chọn)</label>
//                                         <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} />
//                                     </div>
//                                     <div className="form-group">
//                                         <label htmlFor="fax">Fax (Tùy chọn)</label>
//                                         <input type="text" id="fax" name="fax" value={formData.fax} onChange={handleChange} />
//                                     </div>
//                                 </div>

//                                 {/* Checkbox for Shipping Address*/}
//                                 <div className="form-group">
//                                     <input
//                                         type="checkbox"
//                                         id="shipSameAddress"
//                                         name="shipSameAddress"
//                                         checked={formData.shipSameAddress}
//                                         onChange={handleChange}
//                                     />
//                                     <label htmlFor="shipSameAddress" style={{ display: 'inline', marginLeft: '8px' }}>
//                                         Gửi đến cùng địa chỉ thanh toán
//                                     </label>
//                                 </div>

//                                 {/* Conditional Shipping Address Section*/}
//                                 {!formData.shipSameAddress && (
//                                     <div className="shipping-address-section" style={{ marginTop: '30px', borderTop: '1px solid #EDE0CC', paddingTop: '20px' }}>
//                                         <h4 className='h33' style={{ marginTop: '0', borderBottom: 'none', paddingBottom: '10px' }}>
//                                             Địa Chỉ Giao Hàng*
//                                         </h4>
//                                         <div className="form-row">
//                                             <div className="form-group">
//                                                 <label htmlFor="shippingFirstName">Họ*</label>
//                                                 <input type="text" id="shippingFirstName" name="shippingFirstName" value={formData.shippingFirstName} onChange={handleChange} required={!formData.shipSameAddress} className={errors.shippingFirstName ? 'is-invalid' : ''} />
//                                                 {errors.shippingFirstName && <p className="error-message">{errors.shippingFirstName}</p>}
//                                             </div>
//                                             <div className="form-group">
//                                                 <label htmlFor="shippingLastName">Tên*</label>
//                                                 <input type="text" id="shippingLastName" name="shippingLastName" value={formData.shippingLastName} onChange={handleChange} required={!formData.shipSameAddress} className={errors.shippingLastName ? 'is-invalid' : ''} />
//                                                 {errors.shippingLastName && <p className="error-message">{errors.shippingLastName}</p>}
//                                             </div>
//                                         </div>
//                                         <div className="form-group">
//                                              <label htmlFor="shippingAddress">Địa Chỉ Người Nhận*</label>
//                                              <input type="text" id="shippingAddress" name="shippingAddress" value={formData.shippingAddress} onChange={handleChange} required={!formData.shipSameAddress} className={errors.shippingAddress ? 'is-invalid' : ''} />
//                                              {errors.shippingAddress && <p className="error-message">{errors.shippingAddress}</p>}
//                                          </div>
//                                         <div className="form-row">
//                                             <div className="form-group">
//                                                 <label htmlFor="shippingCountry">Quốc Gia*</label>
//                                                 <select id="shippingCountry" name="shippingCountry" value={formData.shippingCountry} onChange={handleChange} required={!formData.shipSameAddress} className={errors.shippingCountry ? 'is-invalid' : ''}>
//                                                     <option value="Viet Nam">Việt Nam</option>
//                                                     <option value="United States">Hoa Kỳ</option>
//                                                 </select>
//                                                  {errors.shippingCountry && <p className="error-message">{errors.shippingCountry}</p>}
//                                             </div>
//                                             <div className="form-group">
//                                                 <label htmlFor="shippingState">Tỉnh/Thành phố*</label>
//                                                 <select id="shippingState" name="shippingState" value={formData.shippingState} onChange={handleChange} required={!formData.shipSameAddress} className={errors.shippingState ? 'is-invalid' : ''}>
//                                                     <option value="Ho Chi Minh">Hồ Chí Minh</option>
//                                                     <option value="Ha Noi">Hà Nội</option>
//                                                     <option value="Da Nang">Đà Nẵng</option>
//                                                 </select>
//                                                  {errors.shippingState && <p className="error-message">{errors.shippingState}</p>}
//                                             </div>
//                                         </div>
//                                         <div className="form-row">
//                                             <div className="form-group">
//                                                 <label htmlFor="shippingCity">Quận/Huyện*</label>
//                                                 <input type="text" id="shippingCity" name="shippingCity" value={formData.shippingCity} onChange={handleChange} required={!formData.shipSameAddress} className={errors.shippingCity ? 'is-invalid' : ''} />
//                                                 {errors.shippingCity && <p className="error-message">{errors.shippingCity}</p>}
//                                             </div>
//                                             <div className="form-group">
//                                                 <label htmlFor="shippingZipCode">Mã Bưu Chính*</label>
//                                                 <input type="text" id="shippingZipCode" name="shippingZipCode" value={formData.shippingZipCode} onChange={handleChange} required={!formData.shipSameAddress} className={errors.shippingZipCode ? 'is-invalid' : ''} />
//                                                 {errors.shippingZipCode && <p className="error-message">{errors.shippingZipCode}</p>}
//                                             </div>
//                                         </div>
//                                          {/* --- */}
//                                         <div className="form-group">
//                                             <label htmlFor="shippingPhone">Điện Thoại Người Nhận (Tùy chọn)</label>
//                                             <input type="tel" id="shippingPhone" name="shippingPhone" value={formData.shippingPhone} onChange={handleChange} className={errors.shippingPhone ? 'is-invalid' : ''} />
//                                             {errors.shippingPhone && <p className="error-message">{errors.shippingPhone}</p>}
//                                         </div>
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Column 2: Shipping & Payment*/}
//                         <div className="checkout-column">
//                             <div className="section">
//                                 <h3 className='h33'>2. Phương Thức Vận Chuyển*</h3>
//                                 <div className="radio-group">
//                                     <label>
//                                         <input type="radio" name="shipping" value="free" checked={formData.shipping === 'free'} onChange={handleChange} />
//                                         <span>Giao hàng miễn phí: {formatCurrency(0)}</span>
//                                     </label>
//                                     <label>
//                                         <input type="radio" name="shipping" value="ems" checked={formData.shipping === 'ems'} onChange={handleChange} />
//                                         <span>EMS (Chuyển Phát Nhanh): {formatCurrency(18 * exchangeRate)}</span>
//                                     </label>
//                                     {errors.shipping && <p className="error-message">{errors.shipping}</p>}
//                                 </div>
//                             </div>
//                             <div className="section">
//                                 <h3 className='h33'>3. Phương Thức Thanh Toán*</h3>
//                                 <div className="radio-group">
//                                     <label>
//                                         <input type="radio" name="payment" value="cod" checked={formData.payment === 'cod'} onChange={handleChange} />
//                                         <span>Thanh toán khi nhận hàng (COD)</span>
//                                     </label>
//                                     <label>
//                                         <input type="radio" name="payment" value="paypal" checked={formData.payment === 'paypal'} onChange={handleChange} />
//                                         <span>PayPal</span>
//                                     </label>
//                                     <label>
//                                         <input type="radio" name="payment" value="creditCard" checked={formData.payment === 'creditCard'} onChange={handleChange} />
//                                         <span>Thẻ tín dụng/Ghi nợ</span>
//                                     </label>
//                                     <label>
//                                         <input type="radio" name="payment" value="bankTransfer" checked={formData.payment === 'bankTransfer'} onChange={handleChange} />
//                                         <span>Chuyển khoản ngân hàng</span>
//                                     </label>
//                                     {errors.payment && <p className="error-message">{errors.payment}</p>}
//                                 </div>
//                                 {formData.payment === 'creditCard' && (
//                                     <div className="form-group" style={{marginTop: '20px'}}>
//                                         <label htmlFor="cardNumber">Số Thẻ*</label>
//                                         <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required={formData.payment === 'creditCard'} className={errors.cardNumber ? 'is-invalid' : ''} placeholder="XXXX XXXX XXXX XXXX" />
//                                         {errors.cardNumber && <p className="error-message">{errors.cardNumber}</p>}
//                                     </div>
//                                  )}
//                                 {formData.payment === 'bankTransfer' && (
//                                     <div style={{ marginTop: '15px', padding: '12px', backgroundColor: '#f7f7f7', borderRadius: '4px', border: '1px solid #eee' }}>
//                                         <p style={{fontSize: '14px', marginBottom: '5px'}}>Vui lòng chuyển khoản vào tài khoản sau:</p>
//                                         <p style={{fontSize: '14px', marginBottom: '5px'}}><strong>Ngân hàng:</strong> Mbbank</p>
//                                         <p style={{fontSize: '14px', marginBottom: '5px'}}><strong>Số tài khoản:</strong> 0342827606</p>
//                                         <p style={{fontSize: '14px', marginBottom: '0'}}><strong>Nội dung:</strong> Thanh toán DH #[Mã đơn hàng] - {formData.lastName} {formData.firstName}</p> {/* Thêm tên vào nội dung */}
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Column 3: Order Review */}
//                         <div className="checkout-column">
//                             <div className="section">
//                                 <h3 className='h33'>4. Xem lại đơn hàng</h3>
//                                 <div className="order-details">
//                                     <div className="order-item header">
//                                         <p>Sản phẩm</p>
//                                         <p style={{ textAlign: 'center' }}>SL</p>
//                                         <p style={{ textAlign: 'right' }}>Tổng</p>
//                                     </div>
//                                     {cartItems && cartItems.length > 0 ? (
//                                         cartItems.map(item => (
//                                             <div className="order-item" key={item.id || item.productId}> 
//                                                 <p className='order-item-title-p'>{item.title || 'Sản phẩm'}</p>
//                                                 <p style={{ textAlign: 'center' }}>{item.quantity || 0}</p>
//                                                 <p style={{ textAlign: 'right' }}>
//                                                     {formatCurrency(Number(String(item?.price || '0').replace(/[.,đ\s]/g, "")) * Number(item?.quantity || 0))}
//                                                 </p>
//                                             </div>
//                                         ))
//                                     ) : (
//                                          <div className="order-item">
//                                             <p className='text-center w-100' style={{ gridColumn: '1 / -1', padding: '20px 0', fontStyle: 'italic', color: '#888' }}>Giỏ hàng trống.</p>
//                                         </div>
//                                     )}
//                                      {/* Thêm lại dòng tạm tính nếu muốn */}
//                                     <div className="order-item shipping" style={{ borderTop: '1px dashed #eee', paddingTop: '10px', marginTop: '5px' }}>
//                                         <p>Tạm tính</p>
//                                         <p></p>
//                                         <p style={{ textAlign: 'right' }}>{formatCurrency(calculateSubTotal)}</p>
//                                     </div>
//                                     <div className="order-item shipping">
//                                         <p>Phí vận chuyển</p>
//                                         <p></p>
//                                         <p style={{ textAlign: 'right' }}>{formatCurrency(shippingCost)}</p>
//                                     </div>
//                                     <div className="order-item grand-total">
//                                         <p>Tổng cộng</p>
//                                         <p></p>
//                                         <p style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.25em' }}>{formatCurrency(total)}</p>
//                                     </div>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="couponCode">Mã giảm giá (Tùy chọn):</label>
//                                     <input type="text" id="couponCode" name="couponCode" value={formData.couponCode} onChange={handleChange}/>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="giftCardCode">Mã quà tặng (Tùy chọn):</label>
//                                     <input type="text" id="giftCardCode" name="giftCardCode" value={formData.giftCardCode} onChange={handleChange}/>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="comments">Ghi chú đơn hàng (Tùy chọn)</label>
//                                     <textarea id="comments" name="comments" rows="3" placeholder="Ghi chú về đơn hàng, ví dụ: thời gian hay chỉ dẫn giao hàng chi tiết." value={formData.comments} onChange={handleChange}/>
//                                 </div>
//                                 <div className="form-group">
//                                     <label htmlFor="howDidYouHear">Bạn biết đến chúng tôi qua đâu?</label>
//                                     <select id="howDidYouHear" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange}>
//                                         <option value="Khác">Khác</option>
//                                         <option value="Youtube">Xem quảng cáo trên Youtube</option>
//                                         <option value="Bạn bè">Được bạn bè/người thân giới thiệu</option>
//                                         <option value="TikTok">Xem quảng cáo trên TikTok</option>
//                                         <option value="Tìm kiếm">Tự tìm kiếm trên mạng</option>
//                                         <option value="Facebook">Qua Facebook</option>
//                                     </select>
//                                     {formData.howDidYouHear === 'Khác' && (
//                                         <div style={{marginTop: '10px'}}>
//                                             <label htmlFor="howDidYouHearSpecify" style={{ marginTop: '10px' }}>Vui lòng nêu rõ:</label>
//                                             <input type="text" id="howDidYouHearSpecify" name="howDidYouHearSpecify" value={formData.howDidYouHearSpecify} onChange={handleChange} />
//                                         </div>
//                                     )}
//                                 </div>
//                                 <div className="form-group"> 
//                                     <input
//                                         type="checkbox"
//                                         id="acceptTerms"
//                                         name="acceptTerms"
//                                         checked={formData.acceptTerms}
//                                         onChange={handleChange}
//                                         required
//                                         className={errors.acceptTerms ? 'is-invalid-check' : ''} 
//                                     />
//                                     <label htmlFor="acceptTerms" style={{ display: 'inline', marginLeft: '8px', fontWeight: 'normal' }}> Tôi đã đọc và đồng ý với <a href={path.terms || "/terms"} target="_blank" rel="noopener noreferrer">Điều khoản và Điều kiện</a>*</label>
//                                     {errors.acceptTerms && <p className="error-message">{errors.acceptTerms}</p>}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/*button*/}
//                     <button className="place-order-btn" type="submit" disabled={isCartEmpty}>
//                          {isCartEmpty ? 'GIỎ HÀNG TRỐNG' : 'ĐẶT HÀNG NGAY'}
//                     </button>
//                 </form>
//             </div>

//             {/* Success Modal*/}
//             {showSuccessModal && (
//                 <div className="success-modal">
//                     <div className="success-modal-content">
//                         <div className="success-icon">✔</div>
//                         <p className='p1'>Đặt hàng thành công!</p> 
//                         <p style={{fontSize: '14px', color: '#666'}}>Cảm ơn bạn đã mua hàng.</p>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Pay;