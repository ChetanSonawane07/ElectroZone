package com.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class User extends BaseEntity{

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
	
	private String role = "USER"; 
	
	private boolean isActive;

	
}

