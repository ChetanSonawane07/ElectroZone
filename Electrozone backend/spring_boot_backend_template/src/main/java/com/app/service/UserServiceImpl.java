package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.dto.UserDTO;
import com.app.entities.User;
import com.app.util.PasswordUtil;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public UserDTO findById(Long id) {
        Optional<User> user = userDao.findByIdAndIsActiveTrue(id);
        return user.map(value -> modelMapper.map(value, UserDTO.class)).orElse(null);
    }

    @Override
    public List<UserDTO> findAll() {
        List<User> users = userDao.findAllByIsActiveTrue();
        return users.stream()
                .map(user -> modelMapper.map(user, UserDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public ApiResponse deleteUser(Long id) {
        User deleteUser = userDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("User not found!!"));
        deleteUser.setActive(false);
        return new ApiResponse("User soft deleted.");
    }

    @Override
    public UserDTO addUser(UserDTO userDto) {
        User user = modelMapper.map(userDto, User.class);
        user.setActive(true); // Set isActive to true by defaults
        String hashedPassword = PasswordUtil.hashPassword(userDto.getPassword());
        user.setPassword(hashedPassword);
        User savedUser = userDao.save(user);
        return modelMapper.map(savedUser, UserDTO.class);
    }

    @Override
    public UserDTO updateUser(Long id, UserDTO userDto) {
        User user = userDao.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setName(userDto.getName());
        user.setEmail(userDto.getEmail());
        
        String hashedPassword = PasswordUtil.hashPassword(userDto.getPassword());
        user.setPassword(hashedPassword);
        

        user.setPhoneNo(userDto.getPhoneNo());
        user.setActive(userDto.isActive());
        User updatedUser = userDao.save(user);
        return modelMapper.map(updatedUser, UserDTO.class);
    }

    @Override
    public UserDTO findByEmailAndPassword(String email, String password) {
    	

         User user = userDao.findByEmailAndPasswordAndIsActiveTrue(email, password)
            .orElseThrow(() -> new ResourceNotFoundException(password));
        return modelMapper.map(user, UserDTO.class);
    }
}
