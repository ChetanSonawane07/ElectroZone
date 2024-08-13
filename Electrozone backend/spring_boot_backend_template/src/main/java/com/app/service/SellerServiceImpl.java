package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.dao.SellerDao;
import com.app.dto.AdminDTO;
import com.app.dto.ApiResponse;
import com.app.dto.SellerAdditionalInfoDTO;
import com.app.dto.SellerDTO;
import com.app.dto.SellerLoginDTO;
import com.app.entities.Seller;
import com.app.util.PasswordUtil;
@Service
@Transactional
public class SellerServiceImpl implements SellerService {

    @Autowired
    private SellerDao sellerDao;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public SellerDTO findSellerById(Long id) {
        Optional<Seller> seller = sellerDao.findByIdAndIsActive(id, true);
        return seller.map(value -> modelMapper.map(value, SellerDTO.class)).orElse(null);
    }

    @Override
    public List<SellerDTO> findAllSellers() {
        List<Seller> sellers = sellerDao.findAllByIsActive(true); // Fetch active sellers
        return sellers.stream()
                .map(seller -> modelMapper.map(seller, SellerDTO.class))
                .collect(Collectors.toList());
    }

    @Override
    public SellerDTO addSeller(SellerDTO sellerDto) {
        Seller seller = modelMapper.map(sellerDto, Seller.class);
        seller.setActive(true); // Set isActive to true by default
        
        String hashedPassword = PasswordUtil.hashPassword(sellerDto.getPassword());
        seller.setPassword(hashedPassword);
        
        Seller savedSeller = sellerDao.save(seller);
        return modelMapper.map(savedSeller, SellerDTO.class);
    }

    @Override
    public ApiResponse deleteSeller(Long id) {
        Seller deleteseller = sellerDao.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Seller not found"));
        deleteseller.setActive(false);
        sellerDao.save(deleteseller); // Save the changes to update the seller
        return new ApiResponse("Seller soft deleted");
    }

    @Override
    public SellerDTO updateSeller(Long id, SellerDTO sellerDto) {
        Seller seller = sellerDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Seller not found"));
        // Update seller fields 
        seller.setName(sellerDto.getName());
        seller.setEmail(sellerDto.getEmail());
        
        String hashedPassword = PasswordUtil.hashPassword(sellerDto.getPassword());

        seller.setPassword(hashedPassword);
        seller.setPhoneNo(sellerDto.getPhoneNo());
        seller.setGstNo(sellerDto.getGstNo());
        seller.setBankAccountNo(sellerDto.getBankAccountNo());
        seller.setIfscNumber(sellerDto.getIfscNumber());
        seller.setBranch(sellerDto.getBranch());
        seller.setAddress(sellerDto.getAddress());
        seller.setActive(sellerDto.isActive());
        Seller updatedSeller = sellerDao.save(seller);
        return modelMapper.map(updatedSeller, SellerDTO.class);
    }

	@Override
    public SellerAdditionalInfoDTO updateAdditionalFields(Long id, SellerAdditionalInfoDTO sellerDto) {
        Seller seller = sellerDao.findById(id)
                .orElseThrow(() -> new RuntimeException("Seller not found"));
        // Update additional fields (Bank details)
        seller.setGstNo(sellerDto.getGstNo());
        seller.setBankAccountNo(sellerDto.getBankAccountNo());
        seller.setIfscNumber(sellerDto.getIfscNumber());
        seller.setBranch(sellerDto.getBranch());
        seller.setAddress(sellerDto.getAddress());
        //seller.setActive(sellerDto.isActive());
        Seller updatedSeller = sellerDao.save(seller);
        return modelMapper.map(updatedSeller, SellerAdditionalInfoDTO.class);
    }

	@Override
	public SellerDTO findByEmailAndPassword(String email, String pwd) {
		
        String hashedPassword = PasswordUtil.hashPassword(pwd);

		
		Seller seller = sellerDao.findByEmailAndPassword(email, hashedPassword)
        .orElseThrow(() -> new ResourceNotFoundException("Invalid email or password"));
    return modelMapper.map(seller, SellerDTO.class);
	}
}
