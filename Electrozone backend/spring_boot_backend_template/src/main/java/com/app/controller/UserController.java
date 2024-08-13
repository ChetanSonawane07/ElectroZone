package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.ApiResponse;
import com.app.dto.LoginDTO;
import com.app.dto.UserDTO;
import com.app.service.UserService;
import com.app.util.PasswordUtil;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;
 
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> findById(@PathVariable String id) {
        UserDTO userDto = userService.findById(Long.valueOf(id));
        return ResponseEntity.ok(userDto);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> findByEmailAndPassword(@Valid @RequestBody LoginDTO loginDTO) {
    	 String hashedPassword = PasswordUtil.hashPassword(loginDTO.getPassword());
    	
        UserDTO userDto = userService.findByEmailAndPassword(loginDTO.getEmail(),hashedPassword);
        return ResponseEntity.ok(userDto);
    }

    @PostMapping
    public ResponseEntity<UserDTO> addUser(@Valid @RequestBody UserDTO userDto) {
        UserDTO createdUser = userService.addUser(userDto);
        return ResponseEntity.status(201).body(createdUser);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<UserDTO> updateUser(@PathVariable String id, @Valid @RequestBody UserDTO userDto) {
        UserDTO updatedUser = userService.updateUser(Long.valueOf(id), userDto);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }
}
