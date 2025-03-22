class ResponseHandler {
    static success(res, data, message = "Success", status = 200) {
      return res.status(status).json({ success: true, message, data });
    }
  
    static error(res, message = "Internal Server Error", status = 500) {
      return res.status(status).json({ success: false, message });
    }
  }
  
  module.exports = ResponseHandler;
  