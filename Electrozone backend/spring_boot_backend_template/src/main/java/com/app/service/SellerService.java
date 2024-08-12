package com.app.service;

import java.util.List;

import com.app.dto.ApiResponse;
import com.app.dto.SellerDTO;
import com.app.dto.SellerLoginDTO;

public interface SellerService {
	 	SellerDTO findSellerById(Long id);
	    List<SellerDTO> findAllSellers();
	    SellerDTO addSeller(SellerDTO sellerDto);
	    ApiResponse deleteSeller(Long id);
	    SellerDTO updateSeller(Long id, SellerDTO sellerDto);
	    SellerDTO updateAdditionalFields(Long id, SellerDTO sellerDto);
	    SellerLoginDTO findByEmailAndPassword(String email, String pwd);
	}

