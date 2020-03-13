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
  // initial user credential creation
  userInfo: async userdata => {
    return await service.post("/userdata", userdata);
  },
  // initial project creation
  projectInfo: async projectdata => {
    return await service.post("/projectdata", projectdata);
  },
  // fetches all the user profile data
  userQuery: async userquery => {
    return await service.get("/userquery", userquery);
  },
  // fetches one user's profile data
  oneUserQuery: async oneuserquery => {
    return await service.get("/one-user-query", oneuserquery);
  },
  // updates one user's profile data
  profileUpdate: async profileUpdate => {
    return await service.post("/profile-update", profileUpdate);
  },
  // fetches one user's project data
  oneProjectQuery: async oneprojectquery => {
    return await service.get("/one-project-query", oneprojectquery);
  },
  // updates one user's project data
  projectUpdate: async projectUpdate => {
    return await service.post("/project-update", projectUpdate);
  }

};

export default actions;
