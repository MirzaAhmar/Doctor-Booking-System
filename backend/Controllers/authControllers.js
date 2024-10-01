import UserSchema from "../models/UserSchema.js";
import DoctorSchema from "../models/DoctorSchema.js";
import Jwt from "jsonwebtoken";
import bcrypt from 'bcrypt'


const generateToken = (user) => {
    return Jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET_KEY, {
        expiresIn: '20d',
    })
}

export const register = async (req, res) => {
    try {
        console.log('Register function called');
        const { email, name, gender, password, role, photo } = req.body;

        if (!email || !name || !password || !role) {
            console.log('Missing required fields');
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }

        let user = null;
        if (role == 'patient') {
            user = await UserSchema.findOne({ email });
        } else if (role == 'doctor') {
            user = await DoctorSchema.findOne({ email });
        }

        if (user) {
            console.log('User already exists');
            return res.status(400).json({ message: 'User already exists' });
        }

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        if (role == 'patient') {
            user = new UserSchema({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        }
        if (role == 'doctor') {
            user = new DoctorSchema({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        }

        await user.save();
        console.log('User successfully created');
        res.status(200).json({ success: true, message: 'User successfully created' });
    } catch (err) {
        console.error('Error during registration:', err); // Log the error
        res.status(500).json({ success: false, message: 'Internal server error, Try again' });
    }
};

export const login = async (req, res) => {

    const { email } = req.body

    try {

        let user = null;
        const patient = await UserSchema.findOne({ email })
        const doctor = await DoctorSchema.findOne({ email })

        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }

        // check if user exist or not
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // compare password
        const isPasswordMatched = await bcrypt.compare(req.body.password, user.password)

        if (!isPasswordMatched) {
            return res.status(400).json({ status: false, message: 'Invalid credentials' })
        }

        // get tok
        const token = generateToken(user);

        const { password, role, appointments, ...rest } = user._doc
        res.status(200).json({ status: true, message: 'Successfuly login', token, data: { ...rest }, role });

    } catch (err) {
        res.status(500).json({ status: false, message: 'Failed to login' })
    }

}
