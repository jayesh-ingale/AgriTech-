class ResponseHandler {
    static success(res, data, message = 'Success', status = 200) {
      res.status(status).json({ success: true, message, data });
    }
  
    static error(res, message = 'Error', status = 500) {
      res.status(status).json({ success: false, message });
    }
  }
  
  module.exports = ResponseHandler;