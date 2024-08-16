package com.MoodArts.service;

import java.util.List;

import com.MoodArts.exception.UserException;
import com.MoodArts.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;
	
	public List<User> findAllUsers();

}
