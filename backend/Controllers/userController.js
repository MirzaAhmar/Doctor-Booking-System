import BookingSchema from "../models/BookingSchema.js";
import UserSchema from "../models/UserSchema.js";
import DoctorSchema from "../models/DoctorSchema.js"

export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await UserSchema.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res
            .status(200)
            .json({
                success: true,
                message: "Successfully updated",
                data: updatedUser,
            });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};
export const deleteUser = async (req, res) => {
    const id = req.params.id;
    try {
        await UserSchema.findOneAndDelete(
            id,
        );
        res
            .status(200)
            .json({
                success: true,
                message: "Successfully deleted",
            });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to delete" });
    }
};
export const getSingleUser = async (req, res) => {
    const id = req.params.id;
    try {
        const user = await UserSchema.findById(
            id,
        ).select("-password");
        res
            .status(200)
            .json({
                success: true,
                message: "User Found",
                data: user,
            });
    } catch (err) {
        res.status(404).json({ success: false, message: "No user found" });
    }
};
export const getAllUser = async (req, res) => {
    try {
        const users = await UserSchema.find({}).select("-password");
        res
            .status(200)
            .json({
                success: true,
                message: "User Found",
                data: users,
            });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
};

export const getUserProfile =  async(req, res) => {
    const userId = req.userId

    try {
        const user = await UserSchema.findById(userId)

        if(!user){
            return res.status(404).json({success:false, message:'User not found'})
        }

        const {password, ...rest} = user._doc

        res.status(200).json({success:true, message:'Profile info is getting', data:{...rest}})
    } catch (err) {
        res.status(500).json({ success: false, message: "Something went wrong, cannot get" });
    }
}

export const getMyAppointments =  async(req, res) => {
    try {
        // step 1: retrieve appointments from booking for specific user
        const bookings = await BookingSchema.find({user:req.userId})

        // step 2: extract ids from appointments booking
        const doctorIds = bookings.map(el => el.doctor.id)

        // step3: retrieve doctors using doctor ids
        const doctors = await DoctorSchema.find({_id: {$in:doctorIds}}).select('-password')

        res.status(200).json({success:true, message:'Appointment are getting', data:doctors})
    } catch (err) {
        res.status(500).json({ success: false, message: "Something went wrong, cannot get" });
    }
}