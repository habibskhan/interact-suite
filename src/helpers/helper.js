import axios from "axios";

import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { isExpired, decodeToken } from "react-jwt";
import config from "../config/config";
import moment from "moment";
import _find from "lodash/find";
const helper = {
  validateEmail: async (email, modelName) => {
    try {
      const { data: res } = await axios.post(
        `${config.api_url}/general/email-validation`,
        {
          email,
          modelName,
        }
      );

      if (res.status !== 200) {
        return false;
      }
      return true;
    } catch (error) {
      toast.error("Internal Server Error");
      console.log("error", error.response);
      //   return false;
    }
  },
  validatePhone: async (country_code, phone, modelName) => {
    try {
      const { data: res } = await axios.post(
        `${config.api_url}/general/phone-validation`,
        {
          country_code,
          phone,
          modelName,
        }
      );

      if (res.status !== 200) {
        return false;
      }
      return true;
    } catch (error) {
      toast.error("Internal Server Error");
      console.log("error", error);
      //   return false;
    }
  },

  getUser: () => {
    if (config.app_mode == "production") {
      const token = localStorage.getItem(config.jwt_auth_key);

      if (token) {
        return jwtDecode(token);
      }
    } else {
      const token = localStorage.getItem(config.jwt_auth_key);

      console.log({ token });
      if (token) {
        const isMyTokenExpired = isExpired(token);
        console.log({ isMyTokenExpired });
        if (!isMyTokenExpired) {
          return jwtDecode(token);
        }
      }
    }
  },
  getUserType: (code) => {
    const userTypes = config.user_types;
    let userType = _find(userTypes, { code: code });
    return userType;
  },

  // getVoter: () => {
  //   const token = localStorage.getItem(config.jwt_voter_auth_key);

  //   if (token) {
  //     const isMyTokenExpired = isExpired(token);

  //     if (!isMyTokenExpired) {
  //       return jwtDecode(token);
  //     }
  //   }
  // },

  checkWordLen: (text, length) => {
    var len = text.split(/[\s]+/);
    console.log("word length", len.length);
    if (len.length > length) {
      return false;
    }
    return true;
  },

  dateFormatter: (date, format = "YYYY-MM-DD HH:mm:ss") => {
    return moment(date).format(format);
  },

  validateSize: (field, file, size, errors) => {
    if (file) {
      if (file.file.size > size * 1024 * 1024) {
        errors[field] = `File needs to be under ${size}MB`;
      }
      return false;
    }
    return false;
  },

  validateExt: (field, file, extensions, errors) => {
    if (file) {
      if (!extensions.includes(file.file.type)) {
        errors[field] = "File does not have a valid file extension.";
      }
      return false;
    }
    return false;
  },
  scroll: (id) => {
    var element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  },
  getFirstError: (errors, suffix = "_error") => {
    console.log(`${Object.keys(errors)[0]}${suffix}`);

    return `${Object.keys(errors)[0]}${suffix}`;
  },

  //   ISTDate: (date, format = "YYYY-MM-DD HH:mm:ss") => {
  //     return moment(date).utc().utcOffset("+05:30").format(format);
  //   },
};
export default helper;
