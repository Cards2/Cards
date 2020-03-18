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
  

  // USER ACTIONS
  // ------------------------------------------------------------------------------
  // initial user credential creation
  userInfo: async userdata => {
    return await service.post("/userdata", userdata);
  },

  // creates user interaction isntance in DB
  userInteraction: async userInter => {
    return await service.post("/userInteraction", userInter);
  },

  // fetch user interaction data
  oneUserInteraction: async oneuserinterac => {
    return await service.get("/user-interaction-query", oneuserinterac);
  },

  // Send card, updates both user requestedcards array and receiver's pending requests
  sendMyCard: async sendcard => {
    return await service.post("/send-my-card", sendcard);
  },

  // deletes freind request. Should add option to block user in future.
  deleteRequest: async deletecard => {
    return await service.post("/delete-card-send", deletecard);
  },

  // accepts invitation to add to stack
  acceptRequest: async acceptcard => {
    return await service.post("/accept-card-send", acceptcard);
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


// PROJECT ACTIONS
// ------------------------------------------------------------------------------
// initial project creation
  projectInfo: async projectdata => {
    return await service.post("/projectdata", projectdata);
  },

  // updates one user's project data
  projectUpdate: async projectUpdate => {
     return await service.post("/project-update", projectUpdate);
  },

  // fetches one user's project data
  oneProjectQuery: async oneprojectquery => {
    return await service.get("/one-project-query", oneprojectquery);
  },

  // creates project interaction instance in Database
  projectInteraction: async projectInter => {
    return await service.post("/projectInteraction", projectInter);
  },

  // fetches all projects data
  projectQuery: async userquery => {
    return await service.get("/userquery", userquery);
  },
  


};

export default actions;
