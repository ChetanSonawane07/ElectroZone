package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Seller extends BaseEntity{


	@NotBlank(message = "Name Should not be blank")
	private String name;
	
	@Column(unique = true)
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
	
	private String role = "SELLER"; 
	
	private boolean isActive;
	
}
