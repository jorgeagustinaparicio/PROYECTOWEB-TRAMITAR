import { Request, Response } from "express";
import { User } from "../entities/User";
import { Profile } from "../entities/profile";

export const getUsers = async (req: Request, res: Response) => {
  try {
    // const users = await User.find();
    const users = await User.find({
      relations: {
        profile: true,
      },
    });

    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
  

/* export const getUsers = async (req: Request, res: Response) => {
  console.log('entrando...');
  try {
    const users = await User.find();
    console.log('users: --->'), users;
    return res.json(users);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
}; */

export const createUser = async (req: Request, res: Response) => {
  const {firstname,lastname,email, password,profile} = req.body;
  const profileUser = new Profile()
  profileUser.gender = profile.gender;
  profileUser.photo = profile.photo;
  await profileUser.save();
  const user = new User();
  user.firstname = firstname;
  user.lastname = lastname;
  user.email = email;
  user.password = password;
  user.profile = profileUser
  await user.save();
  return res.json(user);
}; 
/*  export const createUser = async (req: Request, res: Response) => {
  const { firstname, lastname } = req.body;
  const user = new User();
  user.firstname = firstname;
  user.lastname = lastname;
  await user.save();
  return res.json(user);
};  */
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const user = await User.findOneBy({ id: parseInt(id) });
    if (!user) return res.status(404).json({ message: "Not user found" });

    await User.update({ id: parseInt(id) }, req.body);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await User.delete({ id: parseInt(id) });

    if (result.affected === 0)
      return res.status(404).json({ message: "User not found" });

    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
