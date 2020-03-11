import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? //? (baseURL = 'here should be your production endpoint')
    (baseURL = "https://apps-names.herokuapp.com")
  : (baseURL = "http://localhost:5000");

const service = axios.create({ withCredentials: true, baseURL });

const actions = {
  isLoggedIn: async () => {
    return await service.get("/is-logged-in");
  },
  signUp: async user => {
    return await service.post("/signup", user);
  },
  logIn: async user => {
    return await service.post("/login", user);
  },
  logOut: async () => {
    return await service.get("/logout");
  },
  userInfo: async userdata => {
    return await service.post("/userdata", userdata);
  },
  projectInfo: async projectdata => {
    return await service.post("/projectdata", projectdata);
  },
  userQuery: async userquery =>{
  return await service.get("/userquery", userquery)
  }
};

export default actions;
