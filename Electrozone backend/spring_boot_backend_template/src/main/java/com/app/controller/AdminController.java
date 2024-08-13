package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.AdminDTO;
import com.app.dto.LoginDTO;
import com.app.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

    @Autowired
    private AdminService adminService;

    @PostMapping("/login")
    public ResponseEntity<?> findByEmailAndPassword(@RequestBody LoginDTO loginDTO) {
        try {
            AdminDTO admin = adminService.findByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword());
            return ResponseEntity.ok(admin);
        } catch (Exception e) {
            return ResponseEntity.status(404).body("Invalid email or password");
        }
    }
}
