package com.MoodArts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.MoodArts.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
