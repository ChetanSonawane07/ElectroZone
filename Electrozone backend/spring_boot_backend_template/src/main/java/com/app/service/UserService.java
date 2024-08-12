package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.UserDTO;


public interface UserService {
	 UserDTO findById(Long id);
	 List<UserDTO> findAll();
	 UserDTO findByEmailAndPassword(String email, String password);
	 ApiResponse deleteUser(Long id);
	 UserDTO addUser(UserDTO userDto);
	 UserDTO updateUser(Long id, UserDTO userDto);	 
}
