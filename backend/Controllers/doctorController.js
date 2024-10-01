// import User from "../models/UserSchema.js";
import BookingSchema from "../models/BookingSchema.js";
import DoctorSchema from "../models/DoctorSchema.js";
export const updateDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedDoctor = await DoctorSchema.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );
        res
            .status(200)
            .json({
                success: true,
                message: "Successfully updated",
                data: updatedDoctor,
            });
    } catch (err) {
        res.status(500).json({ success: false, message: "Failed to update" });
    }
};
export const deleteDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        await DoctorSchema.findOneAndDelete(
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
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;
    try {
        const doctor = await DoctorSchema.findById(
            id,
        ).select("-password");
        res
            .status(200)
            .json({
                success: true,
                message: "User Found",
                data: doctor,
            });
    } catch (err) {
        res.status(404).json({ success: false, message: "No user found" });
    }
};
export const getAllDoctor = async (req, res) => {
    try {
        const { query } = req.query
        let doctors;
        if (query) {
            doctors = await DoctorSchema.find({ isApproved: "approved", $or: [{ name: { $rejex: query, $options: 'i' } }, { specialization: { $rejex: query, $options: 'i' } }] }).select("-password")
        }
        else{
             doctors = await DoctorSchema.find({isApproved: "approved"}).populate('reviews').select("-password");
        }

        res
            .status(200)
            .json({
                success: true,
                message: "User Found",
                data: doctors,
            });
    } catch (err) {
        res.status(404).json({ success: false, message: "Not found" });
    }
};

export const getDoctorProfile = async(req, res) => {
    const doctorId = req.userId

    try {
        const doctor = await DoctorSchema.findById(doctorId)

        if(!doctor){
            return res.status(404).json({success:false, message:'Doctor not found'})
        }

        const {password, ...rest} = doctor._doc
        const appointments = await BookingSchema.find({doctor:doctorId})

        res.status(200).json({success:true, message:'Profile info is getting', data:{...rest, appointments}})
    } catch (err) {
        res.status(500).json({ success: false, message: "Something went wrong, cannot get" });
    }
}