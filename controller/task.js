import ErrorHandlere from "../middlewares/error.js";
import { Task } from "../models/task.js";

export const newtask = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        await Task.create({
            title,
            description,
            user: req.user,
        });

        res.status(201).json({
            success: true,
            message: "Task added Successfully",
        });

    } catch (error) {
        next(error);
    }
};


export const getmytask = async (req, res,next) => {

    try {
        const userid = req.user._id;

        const tasks = await Task.find({ user: userid });

        res.status(201).json({
            success: "true",
            tasks,
        });

    } catch (error) {
        next(error);
    }
}


export const updatetask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);
        task.iscompleted = !task.iscompleted;
        await task.save();

        if (!task) return next(new ErrorHandlere("Task Not Find", 404));

        res.status(201).json({
            success: "true",
            message: "task Updated!",
        });

    } catch (error) {
        next(error);
    }
}


export const deletetask = async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) return next(new ErrorHandlere("Task Not Find", 404));

        await task.deleteOne();

        res.status(201).json({
            success: "true",
            message: "task Deleted!",
        });

    } catch (error) {
        next(error);
    }

}
