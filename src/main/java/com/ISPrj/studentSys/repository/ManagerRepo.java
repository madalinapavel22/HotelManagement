package com.ISPrj.studentSys.repository;
import com.ISPrj.studentSys.model.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ManagerRepo extends  JpaRepository<Manager, String> {

    @Query(value = "SELECT * FROM manager WHERE password = :password", nativeQuery = true)
    Manager findManagerByPass(@Param("password") String password);
}