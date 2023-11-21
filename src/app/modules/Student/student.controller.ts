import { Request, Response } from 'express';
import { StudentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  const { student: studentData } = req.body;
  try {
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something is wrong',
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'All Students data get successfull',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something is wrong',
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  try {
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'All Students data get successfull',
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something is wrong',
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
