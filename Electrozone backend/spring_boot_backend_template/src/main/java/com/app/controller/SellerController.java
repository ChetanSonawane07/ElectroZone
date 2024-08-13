package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.dto.LoginDTO;
import com.app.dto.SellerDTO;
import com.app.dto.SellerLoginDTO;
import com.app.service.SellerService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/sellers")
@CrossOrigin
public class SellerController {

    @Autowired
    private SellerService sellerService;

    @GetMapping("/{id}")
    public ResponseEntity<SellerDTO> findSellerById(@PathVariable Long id) {
        SellerDTO sellerDto = sellerService.findSellerById(id);
        return ResponseEntity.ok(sellerDto);
    }

    @GetMapping
    public ResponseEntity<List<SellerDTO>> findAllSellers() {
        List<SellerDTO> sellers = sellerService.findAllSellers();
        return ResponseEntity.ok(sellers);
    }

    @PostMapping
    public ResponseEntity<SellerDTO> addSeller(@Valid @RequestBody SellerDTO sellerDto) {
        SellerDTO createdSeller = sellerService.addSeller(sellerDto);
        return ResponseEntity.status(201).body(createdSeller);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSeller(@PathVariable Long id) {
        sellerService.deleteSeller(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<SellerDTO> updateSeller(@PathVariable Long id, @Valid @RequestBody SellerDTO sellerDto) {
        SellerDTO updatedSeller = sellerService.updateSeller(id, sellerDto);
        return ResponseEntity.ok(updatedSeller);
    }

    @PatchMapping("/{id}/additional-fields")
    public ResponseEntity<SellerDTO> updateAdditionalFields(@PathVariable Long id, @Valid @RequestBody SellerDTO sellerDto) {
        SellerDTO updatedSeller = sellerService.updateAdditionalFields(id, sellerDto);
        return ResponseEntity.ok(updatedSeller);
    }
    
    @PostMapping("/login")
    public ResponseEntity<?> findByEmailAndPassword(@RequestBody LoginDTO loginDTO) {
        try {
        	
        	
            SellerLoginDTO sellerLogin = sellerService.findByEmailAndPassword(loginDTO.getEmail(), loginDTO.getPassword());
            return ResponseEntity.ok(sellerLogin);
        } catch (Exception e) {
            return ResponseEntity.status(404).body("Invalid email or password");
        }
    }
}
