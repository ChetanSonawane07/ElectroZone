package com.app.service;

import com.app.dto.AdminDTO;

public interface AdminService {
	AdminDTO findByEmailAndPassword(String email, String pwd);
	AdminDTO addAdmin(AdminDTO adminDTO);

}
