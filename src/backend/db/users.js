import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "balika@gmail.com",
    userHandler: "adarshbalika",
    password: "adarshBalika123",
    bio: "this is my bio balika",
    link: "https://adarshbalika.netlify.app",
    profilePic:
      "https://st2.depositphotos.com/1006318/10458/v/450/depositphotos_104580234-stock-illustration-businesswoman-profile-icon-avatar-fashion.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ankur",
    lastName: "Kumar",
    username: "ankur@gmail.com",
    userHandler: "Ankur123",
    password: "ankur@123",
    bio: "Developer who is trying to do better",
    link: "https://sagar.netlify.app",
    profilePic:
      "https://st3.depositphotos.com/3087517/32440/v/450/depositphotos_324400982-stock-illustration-portrait-of-an-asian-businessman.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Aman",
    lastName: "Pandit",
    username: "aman@gmail.com",
    userHandler: "aman_pandit",
    password: "amanPandit",
    bio: "I am capturing moments",
    link: "https://shrey.netlify.app",
    profilePic:
      "https://st2.depositphotos.com/1006318/5909/v/450/depositphotos_59095091-stock-illustration-profile-icon-male-avatar.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shreya",
    lastName: "Verma",
    username: "shreya@gmail.com",
    userHandler: "Shreya@20",
    password: "shreya@123",
    bio: "girl who is curious to know world",
    link: "https://gaurav.netlify.app",
    profilePic:
      "https://st2.depositphotos.com/1006318/8387/v/450/depositphotos_83873966-stock-illustration-casual-businesswoman-profile.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Rahul",
    lastName: "Shah",
    username: "rahul@gmail.com",
    userHandler: "rahul123",
    password: "shah@rahul",
    bio: "Always hustling",
    link: "https://omkar.netlify.app",
    profilePic:
      "https://st3.depositphotos.com/1006318/19151/v/450/depositphotos_191515818-stock-illustration-portrait-of-arab-man-in.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shikha",
    lastName: "Agarwal",
    username: "shikha@gmail.com",
    userHandler: "Shikha123",
    password: "shikha@123",
    bio: "It's shikha not sikha",
    link: "https://sunil.netlify.app",
    profilePic:
      "https://st3.depositphotos.com/3557671/15092/v/450/depositphotos_150921476-stock-illustration-girl-icon-flat-single-avatarpeaople.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
