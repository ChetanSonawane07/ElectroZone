package com.app.controller;

import java.util.List;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dto.AddressDTO;
import com.app.service.AddressService;

@RestController
@RequestMapping("/user/{userId}/address")
@Validated
public class AddressController {
    
    @Autowired
    private AddressService addressService;
    
    @PostMapping("/create")
    public ResponseEntity<?> assignUserAddress(
        @PathVariable @NotNull Long userId, 
        @RequestBody @Valid AddressDTO address
    ) {
        try {
            addressService.assignUserAddress(userId, address);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }

    @GetMapping
    public ResponseEntity<?> getAllAddressByUser(@PathVariable @NotNull Long userId) {
        List<AddressDTO> addresses = addressService.getAddressByUser(userId);
        return ResponseEntity.status(HttpStatus.OK).body(addresses);
    }
}
