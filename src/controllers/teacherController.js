import User from '../models/User.js';
import { AppError } from '../utils/AppError.js';

export const searchTeachers = async (req, res, next) => {
  try {
    const { subject, level, location, minPrice, maxPrice } = req.query;
    
    const query = { role: 'teacher' };
    
    if (subject) {
      query['profile.subjects.name'] = subject;
    }
    
    if (level) {
      query['profile.subjects.level'] = level;
    }
    
    if (location) {
      query['profile.location'] = location;
    }
    
    if (minPrice || maxPrice) {
      query['profile.subjects.hourlyRate'] = {};
      if (minPrice) query['profile.subjects.hourlyRate'].$gte = Number(minPrice);
      if (maxPrice) query['profile.subjects.hourlyRate'].$lte = Number(maxPrice);
    }

    const teachers = await User.find(query)
      .select('-password')
      .lean();

    res.json(teachers);
  } catch (error) {
    next(error);
  }
};

export const getTeacherProfile = async (req, res, next) => {
  try {
    const teacher = await User.findById(req.params.id)
      .select('-password')
      .lean();

    if (!teacher || teacher.role !== 'teacher') {
      throw new AppError('Teacher not found', 404);
    }

    res.json(teacher);
  } catch (error) {
    next(error);
  }
};