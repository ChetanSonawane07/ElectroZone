package com.app.dto;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SellerDTO {

    private Long id;

    @NotBlank(message = "Name Should not be blank")
    private String name;

    @NotBlank(message = "Email Should not be blank")
    private String email;

    @NotBlank(message = "Password Should not be blank")
    private String password;

    @Length(min = 10)
    @NotBlank(message = "Phone no Should not be blank")
    private String phoneNo;

    @Column(unique = true)
    @Length(min = 15)
    @NotBlank(message = "Gst no Should not be blank")
    private String gstNo;

    @Column(unique = true)
    @NotBlank(message = "Bank Account Number Should not be blank")
    private String bankAccountNo;

    @NotBlank(message = "IFSC Number Should not be blank")
    private String ifscNumber;

    @NotBlank(message = "Branch Should not be blank")
    private String branch;

    @NotBlank(message = "Address Should not be blank")
    private String address;
    
    private String role;

    private boolean isActive;

}
