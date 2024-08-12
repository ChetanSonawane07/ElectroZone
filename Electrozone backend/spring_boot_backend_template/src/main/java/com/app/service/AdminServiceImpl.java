package com.app.service;

import org.modelmapper.ModelMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.AdminDao;
import com.app.dto.AdminDTO;
import com.app.dto.UserDTO;
import com.app.entities.Admin;
import com.app.entities.User;
import com.app.util.PasswordUtil;

@Service
@Transactional
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminDao adminDao;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public AdminDTO findByEmailAndPassword(String email, String pwd) {
		
		String hashedPassword = PasswordUtil.hashPassword(pwd);
		
		 Admin admin = adminDao.findByEmailAndPassword(email, hashedPassword)
		            .orElseThrow(() -> new ResourceNotFoundException("Invalid email or password"));
		        return modelMapper.map(admin, AdminDTO.class);
	}

	@Override
	public AdminDTO addAdmin(AdminDTO adminDTO) {
		Admin admin = modelMapper.map(adminDTO, Admin.class);
		String hashedPassword = PasswordUtil.hashPassword(adminDTO.getPassword());
        admin.setPassword(hashedPassword);
        
        Admin savedAdmin = adminDao.save(admin);
        return modelMapper.map(savedAdmin, AdminDTO.class);
	}

}
	