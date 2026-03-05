/**
 * OTP Utility Functions
 * For future OTP-based authentication
 */

/**
 * Generate a random OTP
 */
const generateOTP = (length = 6) => {
  const digits = '0123456789';
  let otp = '';
  for (let i = 0; i < length; i++) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
};

/**
 * Generate OTP expiry time
 */
const getOTPExpiry = (minutes = 10) => {
  return new Date(Date.now() + minutes * 60 * 1000);
};

/**
 * Verify OTP is not expired
 */
const isOTPValid = (expiryTime) => {
  return new Date() < new Date(expiryTime);
};

module.exports = {
  generateOTP,
  getOTPExpiry,
  isOTPValid
};
